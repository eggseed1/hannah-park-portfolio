import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const base = process.env.AUDIT_BASE || 'https://eggseed1.github.io/hannah-park-portfolio';
const routes = ['/', '/about/', '/portfolio/coinbase-2025-summer/', '/portfolio/ibm-2024-summer/', '/portfolio/hanhwa-investment/', '/portfolio/usda/', '/coinbase/', '/ibm/'];
const viewports = [
  { name: 'iphone-narrow', width: 320, height: 640, isMobile: true, deviceScaleFactor: 1 },
  { name: 'iphone-se', width: 375, height: 667, isMobile: true, deviceScaleFactor: 1 },
  { name: 'iphone-pro', width: 393, height: 852, isMobile: true, deviceScaleFactor: 1 },
  { name: 'tablet', width: 768, height: 1024, isMobile: true, deviceScaleFactor: 1 },
  { name: 'desktop', width: 1365, height: 900, isMobile: false, deviceScaleFactor: 1 }
];
await fs.mkdir('mobile-audit', { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
const results = [];
for (const viewport of viewports) {
  const context = await browser.newContext({ viewport, isMobile: viewport.isMobile, deviceScaleFactor: 1 });
  for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message.slice(0, 130)));
    let http = 0;
    let timedOut = false;
    try {
      const response = await page.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
      http = response?.status() || 0;
      await page.waitForTimeout(1400);
      const data = await page.evaluate(() => {
        const d = document;
        const w = window;
        const vw = d.documentElement.clientWidth;
        const items = [...d.querySelectorAll('body *')];
        const visible = el => {
          const style = getComputedStyle(el);
          const box = el.getBoundingClientRect();
          return box.width > 3 && box.height > 3 && style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity || 1) > 0.05;
        };
        const overflow = items.filter(el => {
          if (!visible(el)) return false;
          const box = el.getBoundingClientRect();
          return box.width > 15 && (box.right > vw + 7 || box.left < -7);
        }).slice(0,12).map(el => {
          const b = el.getBoundingClientRect();
          return { tag:el.tagName.toLowerCase(), class:(el.className?.baseVal || el.className || '').toString().slice(0,75), text:(el.innerText || '').trim().replace(/\s+/g,' ').slice(0,75), left:Math.round(b.left), right:Math.round(b.right), width:Math.round(b.width) };
        });
        const brokenImages = [...d.images].filter(img => visible(img) && img.complete && img.naturalWidth === 0).slice(0,12).map(img=>img.currentSrc.slice(0,120));
        const heading = [...d.querySelectorAll('h1,h2,h3')].filter(visible).slice(0, 14).map(el=>({ text:el.textContent.trim().slice(0,90), size: getComputedStyle(el).fontSize, lineHeight: getComputedStyle(el).lineHeight }));
        const tinyTargets = [...d.querySelectorAll('a,button,input,[role="button"]')].filter(visible).map(el=>({el,box:el.getBoundingClientRect()})).filter(({box})=>box.width>0 && box.height<40).slice(0,10).map(({el,box})=>({text:(el.textContent||el.getAttribute('aria-label')||'').trim().slice(0,38), height:Math.round(box.height)}));
        const links = [...d.querySelectorAll('a')].filter(visible).slice(0,18).map(el=>({text:(el.textContent||'').trim().replace(/\s+/g,' ').slice(0,45), href:el.href}));
        const body = d.body.getBoundingClientRect();
        return {title:d.title,documentWidth:d.documentElement.scrollWidth,viewportWidth:vw,bodyHeight:Math.round(body.height), overflow,brokenImages,heading,tinyTargets,links,headText:(d.body.innerText||'').slice(0,700)};
      });
      const row = { route, viewport:viewport.name, http, errors, ...data };
      results.push(row);
      console.log('AUDIT ' + JSON.stringify({...row, links:undefined, headText:undefined}).slice(0,5500));
      if ((viewport.name === 'iphone-pro' || viewport.name === 'iphone-narrow') || (viewport.name === 'desktop' && ['/', '/about/'].includes(route))) {
        await page.screenshot({path:path.join('mobile-audit', viewport.name+'-'+(route === '/' ? 'home' : route.replaceAll('/','-').replace(/^-|-$/g,''))+'.png'), fullPage:true, animations:'disabled', timeout:20000}).catch(e=> console.log('SCREENSHOT ERROR '+e.message));
      }
    } catch(e) {
      timedOut=true;
      console.log('NAVIGATION ERROR '+viewport.name+' '+route+' '+e.message);
      results.push({route,viewport:viewport.name,http,errors,error:e.message});
    }
    await page.close();
  }
  await context.close();
}
await browser.close();
await fs.writeFile('mobile-audit/results.json',JSON.stringify({base,date:new Date().toISOString(),results}, null, 2));
const issues = results.filter(r=>r.error || r.http!==200 || r.documentWidth>r.viewportWidth+7 || r.brokenImages?.length || r.errors?.length);
console.log('SUMMARY '+JSON.stringify({checked:results.length,issueViews:issues.length,issueViewDetails:issues.map(r=>({route:r.route,viewport:r.viewport,http:r.http,overflow:r.documentWidth-r.viewportWidth,broken:r.brokenImages?.length,errors:r.errors?.slice(0,2)}))},null,2));

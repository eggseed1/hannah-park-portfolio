import { assets } from "../assets";
import { Clip, Kicker, Shot, StudyNav } from "../components/Media";
import { Page } from "../components/Chrome";
import CaseStudy from "./CaseStudy";

const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#usdc", label: "USDC OI Rewards" },
  { href: "#scaled", label: "Scaled Orders" },
  { href: "#adv", label: "CDS8 x Advanced" },
  { href: "#learnings", label: "Learnings" },
];

export default function CoinbaseFull() {
  return (
    <Page>
      <StudyNav items={nav} />
      <CaseStudy
        when="2025 Summer"
        company="Coinbase Advanced"
        url="https://www.coinbase.com/advanced-trade"
        title="Building scalable systems for pro traders"
        hero={assets.coinbase}
        role="Product Designer Intern"
        timeline="May 2025 — Aug 2025"
        team={
          <>
            <p>
              <strong>Scaled Order</strong>
              <br />
              PM - Ayush Rastogi; Developer - Julia Hazer, Reed Williams; Data -
              Stewart Gibson; Design - Hannah Park
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>Derivatives OI</strong>
              <br />
              PM - Alan Waldman; Developer - Zezhi Xia, Ritika Pareek, Jim Cai;
              Data - Han Deng; Design - Hannah Park
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>CDS8 x Adv Theming</strong>
              <br />
              Project lead - June Punkasem; Design - Hannah Park
            </p>
          </>
        }
      >
        <h3 id="overview">Overview</h3>
        <p className="lede">
          At Coinbase Advanced, I delivered three high-impact projects:
        </p>
        <ol>
          <li>
            USDC OI Rewards reimagined incentives by tying boosted APY tiers to
            open interest. I designed a gamified system that shifted users from
            passive holding to active trading, doubling engagement and scaling
            reach 50×.
          </li>
          <li>
            Scaled Orders was a top-requested feature that let traders split
            large trades into smaller limit orders. I simplified a complex,
            high-friction flow into an intuitive experience, cutting clicks by
            50% compared to Bybit and giving users more control in volatile
            markets.
          </li>
          <li>
            CDS8 × Advanced unified Coinbase Advanced’s design language. By
            auditing 50+ components across 20+ screens on both web & mobile, I
            improved visual polish, reduced developer debt, and built a scalable
            foundation for future features.
          </li>
        </ol>
        <a
          className="full-study"
          href="https://www.figma.com/deck/uwCb6Ospn8LNigh05EPTsk/Hannah-Park----Final-Intern-Presentation?node-id=1-414"
          target="_blank"
          rel="noreferrer"
        >
          View final presentation
        </a>

        <Kicker>WHAT IS COINBASE ADVANCED?</Kicker>
        <p className="lede">
          Coinbase Advanced is a trading platform built for experienced and
          professional traders
        </p>
        <div className="context-grid">
          <p>Access advanced charts & tooling</p>
          <p>Track your portfolio & earn rewards</p>
          <p>Support for spots & derivatives</p>
        </div>
        <p>and more...</p>
        <p className="lede">This is what the platform looks like:</p>
        <div className="row-2">
          <div>
            <Shot id="jRZKkkcGGZpRskc61Cp6Jirh8uI.png" />
            <p>
              <strong>Advanced Trade</strong> · Web
            </p>
          </div>
          <div>
            <Shot id="ylh0Kuo8XybOqOufq8KdjsCUwQ.png" />
            <p>
              <strong>Advanced Trade</strong> · Mobile
            </p>
          </div>
        </div>

        <p className="lede">How did I make an impact on the Coinbase Advanced team?</p>
        <Kicker>PROJECT OVERVIEW</Kicker>
        <p className="lede">
          I worked on three high-impact projects at Coinbase Advanced:
        </p>
        <p>click the card to jump to the project</p>
        <div className="row-3">
          <a href="#usdc">
            <Shot id="nGeGTCsw7F1wfnt79KuL25BFAVg.png" />
            <h5>USDC OI Rewards</h5>
            <p>Expanding growth and top of funnels for Derivatives</p>
          </a>
          <a href="#scaled">
            <Shot id="dOQZpSinrUbknkI61TZhbKEZuCo.png" />
            <h5>Scaled Order</h5>
            <p>Driving high-priority feature development for Advanced</p>
          </a>
          <a href="#adv">
            <Shot id="fHKQtFwN8NgOO9ssi3YT0U9Em4.png" />
            <h5>CDS8 X Adv theming</h5>
            <p>Driving quality & design consistency on Advanced</p>
          </a>
        </div>

        <h3 id="usdc">PROJECT #1</h3>
        <p className="lede">Incentivizing trading through USDC OI Rewards</p>
        <p>
          USDC OI Rewards reimagined incentives for derivatives traders. I
          designed a gamified reward system that tied boosted APY tiers to open
          interest, shifting behavior from passive holding to active trading.
        </p>
        <Clip id="tZwg9hKSKd5Tr3DfmqcMH9h6s.mp4" />

        <Kicker>WHAT WE ARE SEEING</Kicker>
        <p className="lede">19.5x trading volume vs. oi</p>
        <p>
          Trading volume is growing rapidly, but open interest remains flat.
          This indicates users are not holding positions and most trading
          activity is short-term and transactional.
        </p>
        <Shot id="WbDhgy76UxqJhpQx5CrXqWx1mEs.png" />
        <p className="lede">So, why is this bad for Coinbase?</p>
        <Kicker>BUSINESS IMPACT</Kicker>
        <p className="lede">
          Coinbase rewards users for holding USDC - but if they don’t trade, we
          earn no fees.
        </p>
        <Shot id="He6U46v8RzKLkcY7kNGoFMZq7zc.png" />
        <p>How do we solve this gap?</p>
        <Kicker>TO-BE</Kicker>
        <p className="lede">
          Introduce boosted APY rewards to incentivize trading
        </p>
        <p>
          → Use clear, gamified upsells to make rewards easy to understand and
          act on.
        </p>

        <Kicker>USER JOURNEY</Kicker>
        <h3>Designing the user journey to drive engagement</h3>
        <p>
          By guiding users from awareness to action, the journey turns passive
          browsing into active trading.
        </p>
        <div className="row-3">
          <div>
            <h5>See it</h5>
            <p>Users notice rewards while browsing their portfolio.</p>
          </div>
          <div>
            <h5>Understand it</h5>
            <p>Users tap in to understand how rewards work</p>
          </div>
          <div>
            <h5>Act on it</h5>
            <p>Users are guided to act on it, with rewards that feel earned.</p>
          </div>
        </div>

        <Kicker>STEP 1: SEE IT</Kicker>
        <Kicker>ENTRY POINT</Kicker>
        <h3>We knew the portfolio tab should be its entry point</h3>
        <p>
          As it is where users check their positions and account performance
          since it&apos;s relevant to the positions they holding
        </p>
        <Shot id="ADCozV5p9RbjUfSxDmdwWcgLsuQ.png" />
        <Shot id="a5rArGmU1YFeybGhiAQ1ev0u7U.png" />

        <Kicker>DESIGN TRADEOFFS</Kicker>
        <h3>Iterating to find the perfect balance between simplicity and motivation</h3>
        <p>
          I explored multiple design directions to find the right balance:
          keeping the UI clear and uncluttered while still motivating users to
          aim for higher rewards.
        </p>
        <div className="stack">
          <div>
            <h5>EXPLORATION 1: Segmented Progress Bar</h5>
            <Shot id="y7si0EoOMY6PgaguvPwfVEf8Fo.png" />
          </div>
          <div>
            <h5>EXPLORATION 2: Text-only</h5>
            <Shot id="5wcouM0gjaYpXTKHqSP4EyscDU.png" />
          </div>
          <div>
            <h5>EXPLORATION 3: Radial Progress</h5>
            <Shot id="HyyrJbIIzjcVIaaPJ0ANAMrS7g.png" />
          </div>
        </div>
        <Shot id="AoxMAxPL1ohowN7odGYpbLtp0o.png" />

        <Kicker>SEE IT: Final Design</Kicker>
        <div className="row-3">
          <Shot id="ApsPvarbdZ7J2hKdni2zaDdiYaE.png" />
          <Shot id="YXdIYc22d1DZsbhCfBEKv8aVMLk.png" />
          <Shot id="7r3QUGqKpxdwC65cqrOwOEDXB3Q.png" />
        </div>
        <Shot id="WGn2C2s3QUxf9x0uE4NU81MABo.png" />
        <Clip id="tZwg9hKSKd5Tr3DfmqcMH9h6s.mp4" />

        <Kicker>STEP 2: UNDERSTAND IT</Kicker>
        <Shot id="2F1OSayLfrvXbaJpC8kGU3XoWLk.png" />
        <Clip id="co2BGZq8wceEGVuzLhxfJmScpU.mp4" />

        <Kicker>UNDERSTAND IT: Final Design</Kicker>
        <Shot id="Bg4E5AyRL1XQZYUJM2bfAgsdkY0.png" />
        <Shot id="zkvLSRxnp3i8ImWNyyouKyFrhoI.png" />

        <Kicker>STEP 3: ACT ON IT</Kicker>
        <Kicker>FINAL PROTOTYPE</Kicker>
        <div className="row-2">
          <Shot id="vjqMxbHffzPOQktki4PMDFqmoqM.png" />
          <div className="row-2">
            <Shot id="SZbuFVOZHkQqxsQdJuzm8JfO3ek.png" />
            <Shot id="hmJukD1gyE2ubrn0G6O6TRhESIs.png" />
          </div>
        </div>
        <Clip id="pOJXguTZ232x757sDU0GwrFrUg.mp4" />
        <Shot id="Wqfjjo5grWQTbKf2fAlVZMMJxhM.png" />
        <Shot id="LnUnVI2dCmcj5jnf6dlllvbXzMc.png" />

        <Kicker>SCALABILITY</Kicker>
        <h3>Designing solutions that scale across platforms</h3>
        <p>
          It was critical to ensure the rewards experience worked seamlessly
          across desktop and mobile. The design system was built as a scalable
          pattern, making it flexible enough to support new reward types.
        </p>
        <div className="row-2">
          <Shot id="S836v8dhHG5dsM7dyNJusLzE.gif" />
          <Clip id="SOYYZCuoFYkeMELZ6d8G8886iK0.mp4" />
        </div>
        <Clip id="SBrnoDyBZAxDgpPJQAR41Fl10l8.mp4" />

        <Kicker>IMPACT</Kicker>
        <p className="lede">Wins 🏆</p>
        <ul>
          <li>
            Established a scalable rewards pattern to support future incentive
            flows across Coinbase.
          </li>
          <li>
            A pilot doubled open interest with fewer than 20 users. OI Rewards
            scales it 50×, with potential for even greater impact.
          </li>
          <li>
            Introduced goal-driven visuals to gamify rewards and motivate
            sustained trading behavior.
          </li>
        </ul>

        <h3 id="scaled">PROJECT #2</h3>
        <p className="lede">
          Delivered Scaled Orders, simplifying complex flows for advanced
          traders
        </p>
        <p>
          Scaled Orders was a top-requested feature that let traders split large
          trades into smaller limit orders. I simplified a complex, high-friction
          flow into an intuitive experience, cutting clicks by 50% compared to
          Bybit.
        </p>
        <div className="proto-links">
          <a
            className="full-study"
            href="https://www.figma.com/proto/F1YB8nE8nb0TLqGLmjaoCJ/Scaled-order-type?node-id=18289-103559&scaling=scale-down&content-scaling=fixed&page-id=18010%3A57770&starting-point-node-id=18289%3A102249&show-proto-sidebar=1"
            target="_blank"
            rel="noreferrer"
          >
            View Final Prototype: Mobile
          </a>
          <a
            className="full-study"
            href="https://www.figma.com/proto/F1YB8nE8nb0TLqGLmjaoCJ/Scaled-order-type?node-id=18467-409597&scaling=min-zoom&content-scaling=fixed&page-id=18467%3A401183&starting-point-node-id=18467%3A409218"
            target="_blank"
            rel="noreferrer"
          >
            View Final Prototype: Web
          </a>
        </div>
        <div className="row-3">
          <Shot id="0Ty2vLlKlKocJZqMwLbu5Hna9E4.png" />
          <Shot id="MLeHA0pU14qZAf4NZiQcGlW2ajU.png" />
          <Shot id="M2Qptap9cHNIJn9VW1H2cT2MtVg.png" />
        </div>
        <Clip id="co2BGZq8wceEGVuzLhxfJmScpU.mp4" />

        <Kicker>WHY IS SCALED ORDER A PRIORITY</Kicker>
        <p className="lede">
          Scaled order is one of the most requested features from top traders,
          giving them the control and speed they need to place large orders in
          fast-moving markets.
        </p>
        <Kicker>BUSINESS IMPACT</Kicker>
        <h3>Reach parity with competitors</h3>
        <p>To win over whale traders, offering a scaled order type is essential</p>
        <Kicker>ANALYZING TOP COMPETITOR: BYBIT</Kicker>
        <h3>The goal isn’t to just catch up. It’s to lead.</h3>
        <div className="row-2">
          <Shot id="zxPW3Epx6nFqmcC50DxJZ9ZMek.png" />
          <Shot id="CGWTWWcrlZJav5XOBQQRg5FdNPc.png" />
        </div>
        <Shot id="gzzGFB9tdzafchGQLmF4reBhecc.png" />
        <p className="lede">Design Goals</p>
        <div className="row-3">
          <div>
            <h5>Make it easy</h5>
            <p>
              Simplify complex info so users can understand their trade at a
              glance, without feeling overwhelmed.
            </p>
          </div>
          <div>
            <h5>Make it fast</h5>
            <p>
              Enable traders to place multiple limit orders within seconds,
              reducing clicks and speeding up trade
            </p>
          </div>
          <div>
            <h5>Make it scale</h5>
            <p>
              Build a foundation that can scale with future needs: like chart
              trading, TP/SL, or new distribution methods
            </p>
          </div>
        </div>
        <Shot id="AB2sMpUKqxVe1q48IVxVRLLCJi4.png" />
        <Shot id="zxPW3Epx6nFqmcC50DxJZ9ZMek.png" />
        <Shot id="CGWTWWcrlZJav5XOBQQRg5FdNPc.png" />
        <div className="row-2">
          <Shot id="y8cBsoIIB17hkQrOLs5WeScQg.png" />
          <Shot id="YuZxTDIgsWuLhairghcTV6ZXrnk.png" />
        </div>
        <Shot id="6Eqix3xUdvobo7g8r3YiUbE3bOY.png" />
        <Shot id="7YW2t6af8dsPkGKXCAUOeYlTPPI.png" />
        <Shot id="vK3B2f9ixAqxtGUjXG9MEMY3Z9U.png" />
        <p className="lede">Scaled Orders are scheduled for release in Q4.</p>
        <p>
          Early user testing and feedback have been overwhelmingly positive.
          Traders emphasized that the streamlined flow not only reduces the
          number of clicks but also lowers cognitive load.
        </p>

        <h3 id="adv">PROJECT #3</h3>
        <p className="lede">Improving design systems for Coinbase Advanced team</p>
        <p>
          CDS8 × Advanced unified Coinbase Advanced’s design language. By
          auditing 50+ components across 20+ screens on both web & mobile, I
          improved visual polish, reduced developer debt, and built a scalable
          foundation for future features.
        </p>
        <Kicker>CONTEXT</Kicker>
        <h3>Advanced trade is in need of a new design system</h3>
        <p>
          The current experience still uses components built for Simple Trade,
          which don’t scale well for the complexity required in advanced
          workflows.
        </p>
        <Kicker>MY IMPACT</Kicker>
        <h3>
          Audited and refined visuals across Advanced Trade to align with the
          new design system.
        </h3>

        <h3 id="learnings">PROJECT TAKEAWAYS</h3>
        <p className="lede">So, what did I learn?</p>
        <h5>CROSS-FUNCTIONAL COLLABORATION</h5>
        <p>
          Working closely with PMs, engineers, other designers, and traders
          throughout the entire design process helped me deeply understand user
          needs and make more informed, practical design decisions.
        </p>
        <h5>LEARN FROM GREAT TALENTS</h5>
        <p>
          Grew my visual and interaction design skills by learning from
          experienced designers, applying critique feedback, and studying
          internal patterns.
        </p>
        <h5>SCALABILITY</h5>
        <p>
          Learned to design with a systems mindset, considering how my work
          aligns with the broader company vision and scales for long-term
          impact.
        </p>

        <h3>Recommendations</h3>
        <div className="quote">
          <img src={assets.june} alt="June Punkasem" />
          <div>
            <p>
              I had the pleasure of mentoring Hannah during her internship, and
              I was constantly impressed by her talent, motivation, and clear
              thinking. From the start, she took on complex projects and turned
              them into simple, thoughtful design solutions that focused on real
              user needs.
            </p>
            <div className="who">June Punkasem</div>
            <div className="role">Product Design Manager at Coinbase</div>
          </div>
        </div>
      </CaseStudy>
    </Page>
  );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets";
import { Friends, Nav, Page } from "../components/Chrome";
import { Reveal, TiltLink } from "../components/Motion";

const projects = [
  {
    to: "/portfolio/coinbase-2025-summer",
    img: assets.coinbase,
    title: "Coinbase Advanced",
    blurb: "Building scalable systems for pro traders",
  },
  {
    to: "/portfolio/ibm-2024-summer",
    img: assets.ibm,
    title: "IBM watsonx.ai",
    blurb: "Transforming documentation for data scientists",
  },
  {
    to: "/portfolio/hanhwa-investment",
    img: assets.hanhwa,
    title: "Hanhwa Investments",
    blurb: "Creating experiences for wealth managers",
  },
  {
    to: "/portfolio/usda",
    img: assets.usda,
    title: "USDA",
    blurb: "Redesigning project management for gov. funding",
  },
];

export default function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <Page>
      <section className="panel" id="hero">
        <Nav active="work" />
        <div className="hero">
          <Reveal className="hero-lines">
            <div className="hero-line">
              <h1>hello, i’m hannah</h1>
              <img className="chip tilt-photo" src={assets.headshot} alt="" />
              <h1>a designer</h1>
            </div>
            <div className="hero-line">
              <h1>raised in dmv</h1>
              <img className="chip float-2" src={assets.crab} alt="" />
              <h1>based in boston.</h1>
            </div>
            <div className="hero-line">
              <h1>designs w/ empathy</h1>
              <img className="chip float-3" src={assets.palm} alt="" />
              <h1>studying</h1>
            </div>
            <div className="hero-line">
              <h1>psych & cs @ harvard</h1>
              <img className="chip wide float-4" src={assets.harvard} alt="" />
            </div>
          </Reveal>
          <Reveal className="prev" delay={180}>
            <span>Previously at</span>
            <div className="prev-logos">
              <img src={assets.coinbaseLogo} alt="coinbase" />
              <img src={assets.ibmLogo} alt="IBM" />
              <img src={assets.hanwhaLogo} alt="Hanwha" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="panel projects" id="projects">
        <div className="wrap">
          <Reveal>
            <h3>Featured Projects</h3>
          </Reveal>
          <div className="grid">
            {projects.map((p, i) => (
              <Reveal key={p.to} delay={i * 80}>
                <TiltLink className="project-card" to={p.to}>
                  <div className="project-media">
                    <img src={p.img} alt={p.title} />
                    <div className="project-copy">
                      <p>{p.blurb}</p>
                      <h4>{p.title}</h4>
                    </div>
                  </div>
                </TiltLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Friends />
    </Page>
  );
}

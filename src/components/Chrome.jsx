import { NavLink } from "react-router-dom";
import { assets, links } from "../assets";
import { Reveal } from "./Motion";

export function Nav({ active }) {
  return (
    <nav className="nav wrap">
      <NavLink to="/" end>
        <img className="logo" src={assets.logo} alt="hannah" />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" end className={active === "work" ? "active" : ""}>
          Work
        </NavLink>
        <NavLink to="/about" className={active === "about" ? "active" : ""}>
          About
        </NavLink>
        <a
          className="btn-resume"
          href={links.resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
}

export function Friends() {
  return (
    <section className="panel friends">
      <Reveal>
        <h2>Let&apos;s be friends!!</h2>
        <p className="sub">I&apos;d love to connect with you!</p>
      </Reveal>
      <Reveal className="contact" delay={120}>
        <a href={links.email}>
          <div className="label">Email</div>
          <div className="value">{links.emailLabel}</div>
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          <div className="label">LinkedIn</div>
          <div className="value">{links.linkedinLabel}</div>
        </a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <a href="#top">
          <img className="logo" src={assets.logo} alt="hannah" />
        </a>
        <div className="nav-links">
          <NavLink to="/about">About</NavLink>
          <a href={links.resumeDriveHome} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </footer>
      <div className="love">Made with love by Hannah Park</div>
    </>
  );
}

export function Page({ children }) {
  return (
    <div className="page" id="top">
      {children}
      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";

export function Back() {
  return (
    <Link className="back" to="/#projects">
      ← Back
    </Link>
  );
}

export default function CaseStudy({
  when,
  company,
  url,
  title,
  hero,
  role,
  team,
  timeline,
  children,
}) {
  return (
    <section className="panel case">
      <div className="wrap">
        <Back />
        <div className="case-meta">
          <span>{when}</span>
          <span>{company}</span>
          <a href={url} target="_blank" rel="noreferrer">
            {url.replace(/^https?:\/\//, "")}
          </a>
        </div>
        <h1>{title}</h1>
        <div className="hero-shot">
          <img src={hero} alt={title} />
        </div>
        <div className="facts">
          <div>
            <h5>Role</h5>
            <p>{role}</p>
          </div>
          <div>
            <h5>My team</h5>
            {team}
          </div>
          <div>
            <h5>Timeline</h5>
            <p>{timeline}</p>
          </div>
        </div>
        <div className="case-body">{children}</div>
        <Back />
      </div>
    </section>
  );
}

import { Reveal } from "./Motion";

const IMG = "https://framerusercontent.com/images/";
const VID = "https://framerusercontent.com/assets/";

export function img(id) {
  return `${IMG}${id}`;
}

export function vid(id) {
  return `${VID}${id}`;
}

export function Shot({ id, className = "usda-img" }) {
  return (
    <Reveal>
      <img className={className} src={img(id)} alt="" />
    </Reveal>
  );
}

export function Clip({ id, className = "study-video" }) {
  return (
    <Reveal>
      <video
        className={className}
        src={vid(id)}
        autoPlay
        muted
        loop
        playsInline
      />
    </Reveal>
  );
}

export function Kicker({ children }) {
  return <div className="kicker-lg">{children}</div>;
}

export function StudyNav({ items }) {
  return (
    <nav className="study-nav" aria-label="Section navigation">
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

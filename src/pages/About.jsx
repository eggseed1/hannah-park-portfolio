import { assets, links } from "../assets";
import { Friends, Nav, Page } from "../components/Chrome";

export default function About() {
  return (
    <Page>
      <section className="panel">
        <Nav active="about" />
        <div className="about-hero">
          <img className="portrait" src={assets.headshot} alt="Hannah Park" />
          <h1>Hi, I&apos;m Hannah!</h1>
          <div className="about-copy">
            <p>
              Hi, I’m a product designer who loves making complex things feel
              simple. Whether it’s untangling a messy workflow or translating
              dense data into something clear and usable, I focus on creating
              experiences that feel easy and intuitive.
            </p>
            <p>
              Being deaf has shaped how I see the world and taught me the
              importance of accessibility and inclusivity in design. For me,
              good design isn’t just about function: it’s about making sure
              everyone can use and connect with what we create.
            </p>
          </div>
        </div>

        <div className="unfiltered wrap">
          <div className="kicker">ME, UNFILTERED</div>
          <h3>I &lt;3 expressing my creativity in unconventional ways</h3>
          <div className="hobby-grid">
            <div>
              <img src={assets.aquarium} alt="" />
              <p>I enjoy aquascaping for my pet fish!</p>
            </div>
            <div>
              <img src={assets.collage} alt="" />
              <p>I collect junk to make collages</p>
            </div>
            <div>
              <img src={assets.blog} alt="" />
              <p>I write on my personal blog about books :)</p>
            </div>
          </div>

          <h3>I am a huge fan of all kinds of music !!</h3>
          <div className="hobby-grid tall">
            <div>
              <img src={assets.archive} alt="" />
              <p>
                I archive 1920-50s music (
                <a href={links.instagram} target="_blank" rel="noreferrer">
                  see here
                </a>
                )
              </p>
            </div>
            <div>
              <img src={assets.concert} alt="" />
              <p>I like going to concerts with my friends ^_^</p>
            </div>
            <div>
              <img src={assets.vinyl} alt="" />
              <p>I also dj with a vinyl</p>
            </div>
          </div>
        </div>
      </section>
      <Friends />
    </Page>
  );
}

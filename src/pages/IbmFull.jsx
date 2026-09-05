import { assets } from "../assets";
import { Kicker, Shot } from "../components/Media";
import { Reveal } from "../components/Motion";
import { Page } from "../components/Chrome";
import CaseStudy from "./CaseStudy";

const cloud = (path) => `https://res.cloudinary.com/dagtm3hce/video/upload/${path}`;

function CloudClip({ path }) {
  return (
    <Reveal>
      <video
        className="study-video"
        src={cloud(path)}
        autoPlay
        muted
        loop
        playsInline
      />
    </Reveal>
  );
}

export default function IbmFull() {
  return (
    <Page>
      <CaseStudy
        when="2024 Summer"
        company="IBM watsonx.ai"
        url="https://www.ibm.com/products/watsonx-ai"
        title="Transforming documentation process for data scientists"
        hero={assets.ibm}
        role="Product Design Intern — Served as the sole designer on this project."
        timeline="May 2024 — Aug 2024"
        team={
          <p>
            Project Lead - Jolie Durand
            <br />
            UX Designer - Hannah Park
            <br />
            PM - Antonio
            <br />
            Developer - Gustavo Murcia
          </p>
        }
      >
        <h3>Overview</h3>
        <p className="lede">
          We built a centralized solution that gives teams a single space to
          author project documentations quickly and easily.
        </p>
        <CloudClip path="v1727116144/wrwg1cg7ceypidhcmtdv.mp4" />

        <Kicker>ROUGH PROBLEM</Kicker>
        <p className="lede">
          Current watsonx.ai does not have sufficient documentation feature.
        </p>
        <p>
          The current &quot;readme&quot; is ineffective, often causing users to
          add pointless content just to avoid leaving it blank.
        </p>
        <p>
          <a href="#solution">Jump to Solution</a>
        </p>
        <Shot id="MIOgcN0qo1kBvSBcgJ5W1fJw.png" />

        <Kicker>WHAT EVEN IS DOCUMENTATION?</Kicker>
        <p className="lede">
          Documentation is any information about data-related projects.
        </p>
        <p>So, why is it so important?</p>
        <div className="context-grid">
          <div>
            <h6>Continuity & replication</h6>
            <p>
              Facilitates smooth transitions and consistent application of
              successful processes.
            </p>
          </div>
          <div>
            <h6>Supports informed decisions</h6>
            <p>
              Maintains the reasoning behind past actions, aiding in
              understanding and refining strategies.
            </p>
          </div>
          <div>
            <h6>Often mandatory for external clients</h6>
            <p>
              Ensures accurate project execution and compliance with regulatory
              requirements.
            </p>
          </div>
        </div>
        <p className="lede">
          While it is highly important, people HATE documentations
        </p>
        <p className="lede">93%</p>
        <p>
          of 5,500 respondents noted that incomplete or outdated documentation
          is a pervasive problem
        </p>
        <p className="lede">60%</p>
        <p>responded that they rarely or never contribute to documentation</p>
        <p>
          &quot;You know, every minute you spend building documentation, submit
          it, you&apos;re not actually coding&quot; - data scientist 1
        </p>

        <Kicker>USER RESEARCH</Kicker>
        <p className="lede">
          To further validate these findings, we conducted interviews with a
          diverse group of users.
        </p>
        <p>
          Through these interviews, we gained valuable insights into user needs
          and specialized industry information, which helped us understand how
          users approach documentation.
        </p>
        <div className="row-2">
          <Shot id="AgPwqiNMWPuyh7atxIhrQhiyfkM.png" />
          <Shot id="tGnfmRqf48bohyRimPPQjME7cVY.png" />
        </div>
        <Shot id="F0sLAVQ2VQ2fkvhPgo27bv4MtRM.png" />

        <Kicker>UNDERSTANDING THE PROJECT SPACE</Kicker>
        <p className="lede">
          Interviews revealed how each role contributes to the documentation
          process at every stage
        </p>
        <Shot id="r0m8aV3URsUwsMv6R3TEoIzR7Q.png" />
        <Shot id="xWshlBnxCfnUTCEL2hRHqMqvI.png" />

        <Kicker>SYNTHESIZING RESEARCH</Kicker>
        <p className="lede">
          Further, Affinity mapping helped our team collaboratively organize
          information from user interviews
        </p>
        <Shot id="mwmj9UnWiC3kMWL3tqiLPbubfo.png" />
        <Shot id="DXTiIwjiDgqtqoYYYMyOgplMcY.png" />

        <Kicker>KEY INSIGHTS</Kicker>
        <p className="lede">... and we learned that users care about these issues:</p>
        <h5>🎯 Consistency & Standards</h5>
        <ul>
          <li>There is too much clutter or unnecessary details</li>
          <li>Documentation has not been standardized on my team</li>
          <li>Documentation I create or use has knowledge gaps</li>
          <li>Documentation I create or use is incomplete</li>
        </ul>
        <h5>⏰ Time & Resources</h5>
        <ul>
          <li>I have to write too much documentation in my role</li>
          <li>Time and resources affect the quality of my documentation</li>
        </ul>
        <h5>🏃 End-Users</h5>
        <ul>
          <li>
            The level of the end-user’s technicality affects the way I have to
            write documentation
          </li>
          <li>Documentation I create is not used or is not impactful</li>
        </ul>
        <h5>🛠️ Tools</h5>
        <ul>
          <li>
            The tool(s) I use for documentation need to have flexible formatting
            options
          </li>
          <li>
            Creating and adding non-textual content to my documentation needs to
            be easy
          </li>
        </ul>

        <Kicker>PROBLEM STATEMENT</Kicker>
        <p className="lede">
          How might we make documentation process efficient & less painful for
          all users?
        </p>
        <Kicker>HIGH LEVEL GOALS TO DEFINE MY DESIGN</Kicker>
        <ul>
          <li>Reduce the time users spend on tedious documentation tasks.</li>
          <li>Cater to the diverse needs of different roles in the workspace</li>
          <li>
            Promote widespread adoption and consistent use of the documentation
          </li>
        </ul>

        <Kicker>APPROACHING A SOLUTION</Kicker>
        <div className="goals">
          <div>
            <Shot id="1ddTFrOSRRsYtrjhPewAYbMU.png" />
            <h5>Flexible</h5>
            <p>
              The platform should support different team roles and workflows to
              enable seamless collaboration.
            </p>
          </div>
          <div>
            <Shot id="InKtE3nAeYZRKmJGN2Aosj56pg.png" />
            <h5>Efficiency</h5>
            <p>
              Reducing time spent on documentation frees professionals to focus
              on core work, boosting productivity.
            </p>
          </div>
          <div>
            <Shot id="Cw1p6WOLNLTvqXjcHruLC2Y5T3k.png" />
            <h5>Ease of Use</h5>
            <p>
              Essential for promoting widespread adoption and consistent use of
              the documentation tools.
            </p>
          </div>
        </div>

        <h3 id="solution">SOLUTION</h3>
        <p className="lede">Starting with the bare minimum MVP</p>
        <p>
          Users preferred Google Docs for its simplicity, so we first focused on
          enabling efficient, distraction-free documentation.
        </p>
        <p>
          Note: The quality of the interaction video may appear slightly blurry
          or laggy as it is a screen recording from a presentation I conducted
          during my internship. Due to an NDA, I do not have access to higher
          quality files.
        </p>

        <Kicker>DESIGN GOAL: EASE OF USE & EFFICIENCY</Kicker>
        <p className="lede">
          Simplifying the addition of textual and non-textual components
        </p>
        <CloudClip path="v1726767520/pm45nzwdskwe5twhixfy.mp4" />
        <Kicker>DESIGN GOAL: FLEXIBLE</Kicker>
        <p className="lede">Flexible Markdown View for All Users</p>
        <CloudClip path="v1726691590/Florian_Niethammer_s_Personal_Room-20240806_1518-2_1_xfwsuq.mp4" />
        <Kicker>DESIGN GOAL: EASE OF USE</Kicker>
        <p className="lede">Table of Contents for Easy Navigation</p>
        <CloudClip path="v1726693043/mvp_04_sq94pc.mp4" />
        <Kicker>DESIGN GOAL: EASE OF USE</Kicker>
        <p className="lede">Seamless Sharing for Documents</p>
        <CloudClip path="v1726693570/mvp_05_jcx3bl.mp4" />
        <Shot id="a2RThqb5GjfO1zCMdIU7jainlJs.png" />

        <Kicker>GOING BEYOND THE MVP</Kicker>
        <p className="lede">Why do we need another documentation app..?</p>
        <p>
          Existing documentation apps already execute these features well, so
          perhaps there may be little incentive for users to switch to
          watsonx.ai for documentation.
        </p>
        <Shot id="ZNT806xDvQs3VC7AghLrlAqnro.png" />

        <Kicker>COMPETITIVE ANALYSIS</Kicker>
        <p className="lede">
          There are no documentation app that fits the needs for ALL users
        </p>
        <Shot id="b98W5POEbW65AHLfFU72kAKX0.png" />
        <Shot id="OFGmpEILzFaczZbp9TY0ee4tU.png" />

        <Kicker>SOLUTION</Kicker>
        <h3>Integrating AI components to further achieve design goals</h3>
        <p>
          After prototyping the MVP, we built a phase 2 feature to push our
          design goals further and showcase watsonx.ai’s edge over other
          documentation platforms.
        </p>
        <CloudClip path="v1727282634/p0vi3rooztlu4tzodmi4.mp4" />
        <CloudClip path="v1727116144/ps3dkhi1miyplt6ttaae.mp4" />
        <div className="row-2">
          <CloudClip path="v1727116145/gva1tkj27qfxah9nspog.mp4" />
          <CloudClip path="v1727116145/atlb7jhufvhsbgjjg4b0.mp4" />
        </div>

        <Kicker>ETHICAL USAGE OF AI</Kicker>
        <p className="lede">Ensuring Ethical & Transparent AI Usage</p>
        <p>
          AI acts as a collaborator, with clear labels marking AI vs. human
          content. Each AI section shows the model used and a disclaimer on
          accuracy.
        </p>
        <p className="lede">Introducing Version Tracking</p>
        <p>
          A dedicated history view lets users see who used AI for specific edits
          and revert to non-AI versions, giving full transparency and control
          over a document’s evolution.
        </p>
        <div className="row-2">
          <Shot id="AooTscSVkZVU3sM10GdCGlBPUMs.jpg" />
          <Shot id="ifLi05H0MQqN7Jmm6FHCzIURpk.png" />
        </div>

        <Kicker>PROJECT TAKEAWAYS</Kicker>
        <h5>Cross-Functional Collaboration</h5>
        <p>
          In my first corporate experience, I quickly realized design feedback
          doesn’t just come from designers. Developers, PMs, and even
          non-designers all brought perspectives I never would’ve considered on
          my own.
        </p>
        <h5>Become a Sponge!</h5>
        <p>
          At first, I hesitated to ask for help. But I learned quickly that
          feedback is where growth happens. The more I embraced questions and
          doubts, the stronger my work became.
        </p>
        <h5>There&apos;s no &quot;formal&quot; process..</h5>
        <p>
          Coming from school, I thought UX followed a rigid formula. My
          internship taught me the opposite: every project is different, and
          flexibility matters more than rules.
        </p>

        <h3>Recommendations</h3>
        <div className="quote">
          <img src={assets.jolie} alt="Jolie Durand" />
          <div>
            <p>
              Hannah&apos;s internship at IBM on the Data & AI Platform was
              outstanding. As a UX designer, she demonstrated remarkable speed,
              intelligence, and a deep commitment to her work.
            </p>
            <div className="who">Jolie Durand</div>
            <div className="role">Senior UX Designer at IBM</div>
          </div>
        </div>
      </CaseStudy>
    </Page>
  );
}

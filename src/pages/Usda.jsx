import { links, usdaImgs } from "../assets";
import { Page } from "../components/Chrome";
import CaseStudy from "./CaseStudy";

export default function Usda() {
  return (
    <Page>
      <CaseStudy
        when="2023"
        company="USDA"
        url="https://www.usda.gov/"
        title="Redesigning project management for gov. funding"
        hero={usdaImgs.hero}
        role="Product Designer — Redesign, Information Architecture, Prototyping, Interaction Design, UX Research"
        timeline="February 2023 - May 2023"
        team={
          <p>
            PM - Nicole Chen
            <br />
            Product Designer -
          </p>
        }
      >
        <h3>Overview</h3>
        <p className="lede">
          Redesigning a legacy USDA platform to deliver modern usability,
          scalable systems, and executive alignment.
        </p>
        <p>
          The USDA’s NAMP Platform had not been updated in decades, making
          modernization essential. We collaborated with internal developer teams
          and stakeholders in weekly design and strategy sessions, aligning on
          requirements and ensuring progress across all phases. In the final
          two weeks, I led design independently, creating a scalable design
          system and high-fidelity prototypes to support long-term usability.
          The work was presented to a cohort of 20 USDA executives, including
          the CIO leadership team, and received formal recognition through a
          letter of high praise.
        </p>

        <div className="kicker-lg">CONTEXT</div>
        <div className="context-grid">
          <div>
            <h6>Used by 30,000+ USDA employees</h6>
            <p>
              At USDA, NAMP serves as the sole system for project management,
              requiring all funding and documentation to be submitted through
              it.
            </p>
          </div>
          <div>
            <h6>$1 Billion in funding</h6>
            <p>
              In 2022, NAMP platform was used to handle over a billion dollars
              in funding from over 150 national forests
            </p>
          </div>
          <div>
            <h6>Mandated by law</h6>
            <p>
              NAMP platform is required by the PMIAA law and needs to be
              continuously updated to meet legislative requirements
            </p>
          </div>
        </div>
        <img className="usda-img" src={usdaImgs.context} alt="" />
        <p className="lede">
          Yet despite its importance and legal requirements, the USDA struggles
          to get users to work within the platform
        </p>
        <p style={{ textAlign: "center", fontSize: 28, margin: "24px 0" }}>
          Why is that?
          <br />
          ꜜ
        </p>

        <div className="kicker-lg">PROBLEM STATEMENT</div>
        <p className="lede">
          New and field-oriented staff grapple with considerable learning
          obstacles, leading to regular miscommunication and imbalanced task
          allocation. Moreover, experienced users also encounter inefficiencies
          stemming from the platform&apos;s design and procedural flaws. How
          might we refine NAMP to accommodate both novice and experienced users,
          ensuring a streamlined, efficient, and user-friendly experience?
        </p>
        <p>
          <a href="#solution">Jump to Solution</a>
        </p>

        <div className="kicker-lg">PROBLEM BREAKDOWN</div>
        <p>
          <strong>🐳 Breaks when scaled up to large volumes</strong>
          <br />
          The NAMP platform couldn&apos;t manage large data volumes, which is
          becoming the norm with the newly enacted law.
        </p>
        <p style={{ marginTop: 16 }}>
          <strong>🤔 Complicated workflows with no IA</strong>
          <br />
          Most experiences over time became a kitchen sink of complex controls,
          with abstruse jargon in its copywriting.
        </p>
        <p style={{ marginTop: 16 }}>
          <strong>🌲 Absence of hierarchy</strong>
          <br />
          The platform&apos;s overreliance of tabs for accessing detailed
          information hinders intuitive navigation and obscures content
          prioritization.
        </p>
        <p style={{ marginTop: 16 }}>
          <strong>🖥 Dated user interface</strong>
          <br />
          The NAMP platform followed dated UI paradigms from an old tech stack,
          with critical usability issues.
        </p>

        <div className="kicker-lg">OVERVIEW OF OLD EXPERIENCE</div>
        <img className="usda-img" src={usdaImgs.old} alt="" />

        <div className="kicker-lg">USER RESEARCH</div>
        <p className="lede">
          To further investigate and confirm the problem, I conducted ten 40-50
          minute interviews with different users and stakeholders.
        </p>
        <p>
          Through these interviews, we gained insight into client-specific
          information and research, supplanted limited access to the
          application, and highlighted how users approach platform.
        </p>
        <img className="usda-img" src={usdaImgs.research} alt="" />
        <p>Turning conversations into concrete insights</p>
        <img className="usda-img" src={usdaImgs.insights} alt="" />

        <div className="kicker-lg">SYNTHESIZING RESEARCH</div>
        <p className="lede">
          Affinity Mapping allows our team to collaboratively organize the info
          we received from user interviews and meaningfully analyze common
          themes in order to uncover key insights.
        </p>
        <img className="usda-img" src={usdaImgs.affinity} alt="" />
        <p>Some patterns we found through affinity mapping</p>
        <img className="usda-img" src={usdaImgs.patterns} alt="" />

        <div className="kicker-lg">KEY TAKEAWAYS</div>
        <p className="lede">
          Our most significant finding was the pronounced disparity between the
          experienced and the inexperienced.
        </p>
        <ul>
          <li>
            Most interviewees, with 10+ years of experience in NAMP are
            comfortable with the platform but recognize its complexity and
            overwhelming nature for others.
          </li>
          <li>
            Other interviewees with no NAMP familiarity avoid the system
            entirely, leading to a significant task burden on the few
            experienced individuals.
          </li>
          <li>
            Many interviewees pinpointed inaccuracy (of calculated costs), lack
            of editability, and disorganization as pain points.
          </li>
          <li>
            All interviewees are eager to help others and subordinates learn how
            to use NAMP and realize its importance.
          </li>
        </ul>

        <div className="kicker-lg">USER PERSONA</div>
        <p className="lede">Consolidating our key insights into 2 personas.</p>
        <img className="usda-img" src={usdaImgs.personaA} alt="" />
        <img className="usda-img" src={usdaImgs.personaB} alt="" />

        <div className="kicker-lg">APPROACHING A SOLUTION</div>
        <p className="lede">
          Leveraging our key findings and persona attributes, our team devised a
          three-step redesign process:
        </p>
        <p>
          We analyzed the existing user workflow and optimized it into a
          well-structured system architecture, ensuring the final design
          implementation reflected the improved process.
        </p>
        <img className="usda-img" src={usdaImgs.process} alt="" />
        <p className="lede">Design Goals</p>
        <p>The research also helped us define our focus areas for the redesign.</p>
        <div className="goals">
          <div>
            <img src={usdaImgs.flexible} alt="" />
            <h5>Flexible</h5>
            <p>Adapt to various levels of information density across different user roles.</p>
          </div>
          <div>
            <img src={usdaImgs.simple} alt="" />
            <h5>Simple</h5>
            <p>Clean out the clutter, and help users easily complete their tasks.</p>
          </div>
          <div>
            <img src={usdaImgs.coherent} alt="" />
            <h5>Coherent</h5>
            <p>Focusing on workflows rather than silos of information.</p>
          </div>
        </div>

        <div className="kicker-lg">USERFLOW</div>
        <p className="lede">
          Through detailed mapping of the current user journey, we set the stage
          for optimizing the workflow with streamlined steps.
        </p>
        <img className="usda-img" src={usdaImgs.userflow} alt="" />
        <p>Creating a more intuitive user journey…</p>
        <img className="usda-img" src={usdaImgs.journey} alt="" />

        <div className="kicker-lg">KEY TAKEAWAY</div>
        <p>
          <strong>⚒️ Project-Task Hierarchy</strong>
        </p>
        <ul>
          <li>
            Tasks are nested exclusively within their associated project such
            that to access is restricted to a project selection first then task
            selection second flow
          </li>
          <li>
            Additional Tasks not categorizable into routes, rec sites, etc. are
            hierarchically placed on the same level as other tasks, as they are
            all nested within a project
          </li>
        </ul>
        <p>
          <strong>🗂️ Task-to-Task Organization</strong>
        </p>
        <ul>
          <li>
            All tasks nested within the same project are accessible to view from
            the current task page to facilitate for a task-focused experience
          </li>
          <li>
            A navigation bar on the side of the screen enables for users’ quick
            and easy access to other tabs and pages
          </li>
        </ul>
        <img className="usda-img" src={usdaImgs.takeaway} alt="" />
        <p className="lede">
          Consideration for our persona&apos;s context directed a user flow
          focusing on intuitive hierarchy.
        </p>
        <p>
          While prioritizing hierarchy and intuitiveness, we ensured minimal
          disruption for superusers familiar with the existing layout.
        </p>

        <div className="kicker-lg">SYSTEM ARCHICTECTURE</div>
        <img className="usda-img" src={usdaImgs.architecture} alt="" />

        <div className="kicker-lg">USERFLOW</div>
        <p className="lede">Building a low-fidelity prototype to conduct usability tests</p>
        <img className="usda-img" src={usdaImgs.loFi} alt="" />
        <p>How can we improve on the prototype?</p>

        <div className="kicker-lg">USER RESEARCH</div>
        <p className="lede">
          5 rounds of moderated tests informed iterations that helped refocus
          hierarchy and navigation.
        </p>
        <p>
          We asked participants to complete scenarios while observing their
          movement patterns, mental models, and goal completion. Multiple
          feedback rounds informed key improvements to our low-fidelity
          prototypes.
        </p>
        <img className="usda-img" src={usdaImgs.testing} alt="" />

        <div className="kicker-lg" id="solution">
          SOLUTION
        </div>
        <h3>Final Prototype: Highlights</h3>
        <img className="usda-img" src={usdaImgs.solution} alt="" />

        <div className="kicker-lg">DESIGN GOAL: SIMPLE</div>
        <p className="lede">Streamlining and simplifying the platform&apos;s organization</p>
        <p>
          <strong>USER SCENARIO</strong>
          <br />
          NAMP serves as a handy tool for users, able to manage all forestry
          projects within our country. But with no organization and confusing
          copy users struggle to find what they&apos;re looking for.
        </p>
        <p>
          <strong>SOLUTION</strong>
          <br />
          We improved the IA with logical groupings, clearer copy, and
          simplified navigation to create a more intuitive user experience.
        </p>

        <div className="kicker-lg">DESIGN GOAL: COHERENT</div>
        <p className="lede">Consistent UI styles across the entire platform</p>
        <p>
          From font sizes to buttons, the old platform’s inconsistent style
          guide created fragmented visuals, confusing cues, and a disjointed
          user experience.
        </p>
        <p>
          We built a unified style guide to standardize visual cues and create a
          cohesive, intuitive user experience across the platform.
        </p>

        <div className="kicker-lg">DESIGN GOAL: FLEXIBLE</div>
        <p className="lede">
          A customizable project table with filters and sort options.
        </p>
        <p>
          Users who manage and supervise on-going projects everyday, have to
          scan across large volumes of projects. Finding what you need can take
          a lot of time and effort.
        </p>
        <p>
          With different options to view and search through projects, users can
          quickly customize to the exact view of the table they need.
        </p>

        <div className="kicker-lg">DESIGN GOAL: INTUITIVE</div>
        <p className="lede">
          Creating clear distinctions in hierarchy between projects and tasks
        </p>
        <p>
          The old platform used tabs to access project tasks, but this misled
          users: tabs suggest parallel hierarchies, creating structural
          confusion.
        </p>
        <p>
          We expanded the table view with a side peek for quick project details
          and added a “View Project Tasks” button to clearly separate projects
          from their tasks.
        </p>

        <div className="kicker-lg">DESIGN GOAL: SIMPLE</div>
        <p className="lede">Swift navigation through breadcrumbs</p>
        <p>
          Because NAMP processes diverse data, its multi-page flow often left
          users disoriented—uncertain of each page’s purpose or how to navigate
          back.
        </p>
        <p>
          We created breadcrumbs to help users understand their current location
          within the platform and effortlessly retrace their steps, reducing
          confusion and enhancing usability.
        </p>

        <div className="kicker-lg">DESIGN GOAL: FLEXIBLE</div>
        <p className="lede">Information popup to guide new users</p>
        <p>
          To ease onboarding, we added contextual popups on key sections. These
          clarified industry-specific terms and complex metrics, helping new
          users quickly understand the platform and navigate with confidence.
        </p>
        <p className="lede">
          Features mirror the old platform to adapt to seasoned users
        </p>
        <p>
          We kept the familiar tab layout while adding intuitive elements and
          tooltips, making navigation easier for new users without disrupting
          experienced ones.
        </p>
        <p className="lede">Navigating between tasks through sidetabs</p>
        <p>
          As users frequently work within various tasks, we added a sidetab for
          easy navigation within the tasks.
        </p>
        <p className="lede">Clear distinction between view & edit mode</p>
        <p>
          This distinction is essential to prevent inadvertent changes or
          mistakes, ensuring users are aware of their actions on the platform.
        </p>

        <div className="kicker-lg">PROJECT TAKEAWAYS</div>
        <p className="lede">
          In redesigning an application, it’s easy to assume that piling on new
          features will improve the experience. In reality, unnecessary
          additions can overwhelm users, dilute core functionality, and create
          friction instead of value.
        </p>
        <p>
          While basic users might appreciate a more intuitive and simplified
          approach, super users, especially those acclimated to the original
          platform, can find drastic changes disruptive. It&apos;s a delicate
          balance to strike. This experience has taught me the importance of a
          holistic user-centric design approach. Before making significant
          changes or introducing new features, it&apos;s crucial to gauge the
          needs and habits of all user groups. Change for the sake of change can
          be detrimental. The key is to evolve a platform while ensuring it
          remains accessible and efficient for both new and veteran users.
        </p>

        <div className="kicker-lg">IMPACT</div>
        <p className="lede">
          Presented project to a cohort of 20 executives including the CIO
          leadership team at USDA and received a{" "}
          <a href={links.praise} target="_blank" rel="noreferrer">
            letter of high praise
          </a>
          . Launched December of 2024.
        </p>
      </CaseStudy>
    </Page>
  );
}

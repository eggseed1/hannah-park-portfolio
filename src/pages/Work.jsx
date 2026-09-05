import { Link } from "react-router-dom";
import { assets } from "../assets";
import { Page } from "../components/Chrome";
import CaseStudy from "./CaseStudy";

export function Coinbase() {
  return (
    <Page>
      <CaseStudy
        when="2025 Summer"
        company="Coinbase Advanced"
        url="https://www.coinbase.com/advanced-trade"
        title="Building scalable systems for pro traders"
        hero={assets.coinbase}
        role="Product Designer Intern — Worked as the sole designer on these projects"
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
        <h3>Overview</h3>
        <p>
          At Coinbase Advanced, I delivered three high-impact projects:
          designing Scaled Orders, launching USDC OI Rewards, and auditing the
          Advanced design system for consistency and scalability.
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
        <h3>NDA Statement</h3>
        <div className="nda">
          <p>
            Due to confidentiality, only a preview is shown here. You can access
            the full case study using the password included on my resume.
          </p>
          <Link className="full-study" to="/coinbase">
            View Full Case Study
          </Link>
        </div>
        <h3>Recommendations</h3>
        <div className="quote">
          <img src={assets.june} alt="June Punkasem" />
          <div>
            <p>
              I had the pleasure of mentoring Hannah during her internship, and
              I was constantly impressed by her talent, motivation, and clear
              thinking. From the start, she took on complex projects and turned
              them into simple, thoughtful design solutions that focused on real
              user needs. She learned quickly, asked smart questions, and always
              delivered work that was polished and well thought out. Hannah is
              also a great team player. She worked closely with product
              managers, engineers, and researchers to make sure everyone was
              aligned and the work moved forward smoothly. Any team would be
              lucky to have Hannah. She’s curious, thoughtful, and takes real
              ownership of her work. I’m excited to see everything she
              accomplishes next.
            </p>
            <div className="who">June Punkasem</div>
            <div className="role">Staff Product Designer at Coinbase</div>
          </div>
        </div>
      </CaseStudy>
    </Page>
  );
}

export function IBM() {
  return (
    <Page>
      <CaseStudy
        when="2024 Summer"
        company="IBM watsonx.ai"
        url="https://www.ibm.com/products/watsonx-ai"
        title="Transforming documentation for data scientists"
        hero={assets.ibm}
        role="Product Design Intern — Served as the sole designer on these project."
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
        <p>
          Documentation is often a tedious task that pulls focus away from the
          real work of a project. Our solution streamlines the process, reducing
          the time and effort required while ensuring consistency and clarity.
          With AI support, users can generate, refine, and update documentation
          seamlessly, allowing them to focus on core objectives rather than
          administrative overhead.
        </p>
        <p className="arrow-note">
          -&gt; The result is a more efficient workflow: less time spent
          managing documentation, more time dedicated to building and delivering
          impactful outcomes.
        </p>
        <h3>NDA Statement</h3>
        <div className="nda">
          <p>
            Due to confidentiality, only a preview is shown here. You can access
            the full case study using the password included on my resume.
          </p>
          <Link className="full-study" to="/ibm">
            View Full Case Study
          </Link>
        </div>
        <h3>Recommendations</h3>
        <div className="quote">
          <img src={assets.jolie} alt="Jolie Durand" />
          <div>
            <p>
              Hannah&apos;s internship at IBM on the Data & AI Platform was
              outstanding. As a UX designer, she demonstrated remarkable speed,
              intelligence, and a deep commitment to her work. She thoroughly
              reviewed past work and research perviously done on the project and
              even conducted her own competitive research, ensuring her designs
              were well-informed and impactful. Hannah followed directives with
              precision, took feedback seriously, and consistently applied it,
              showing a strong willingness to improve. Her proactive approach to
              seeking feedback and refining her work impressed the entire team.
              Her final concepts were exceptional, showcasing her skills and
              dedication. Hannah would be an excellent candidate for other UX
              positions in SaaS.
            </p>
            <div className="who">Jolie Durand</div>
            <div className="role">Senior UX Designer at IBM</div>
          </div>
        </div>
      </CaseStudy>
    </Page>
  );
}

export function Hanhwa() {
  return (
    <Page>
      <CaseStudy
        when="2023 - 2024"
        company="Hanhwa Investments"
        url="https://www.hanwhawm.com"
        title="Creating experiences for wealth managers"
        hero={assets.hanhwa}
        role="Product Designer — Design System, Information Architecture, Prototyping, Content Design, UX Research"
        timeline="December 2023 - May 2024."
        team={
          <p>
            Team of 4 Interns
            <br />
            PM: Yuna Kim
            <br />
            Backend Developer: Jeseong Lee
            <br />
            Frontend Developer: Joh Minjae
            <br />
            Product Designer: Hannah Park
            <br />
            <br />
            Our team met with 3x a week with the wealth management team at
            Hanhwa to get valuable feedback.
          </p>
        }
      >
        <h3>Overview</h3>
        <p className="lede">
          We built a platform for Hanwha Investments that helps wealth managers
          seamlessly onboard and manage high net-worth clients.
        </p>
        <p>
          We created a platform for Hanwha Investments that addressed the
          evolving needs of wealth managers and their clients. Unlike
          traditional high-net-worth individuals, the newly wealthy, such as
          influencers, often have different expectations and behaviors. To meet
          these needs, we designed an intuitive onboarding process to match
          clients with the right wealth managers, along with management tools
          that enhanced wealth managers’ ability to oversee client portfolios
          efficiently. By prioritizing user-centric design, the platform
          ensured a seamless experience for both clients and managers.
        </p>
        <p className="arrow-note">
          -&gt; Successfully delivered an MVP to Hanwha’s team in May 2024;
          Rewarded 14M₩ in executive recognition
        </p>
        <h3>NDA Statement</h3>
        <p>
          Due to the confidential nature of this project, I’m unable to share
          full details at this time. However, I’d be happy to walk through the
          process and my contributions verbally during the interview. A detailed
          case study will be made available once the project is publicly
          released.
        </p>
      </CaseStudy>
    </Page>
  );
}

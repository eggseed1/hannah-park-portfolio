import { Link } from "react-router-dom";
import { Page } from "../components/Chrome";

export default function Private() {
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <Page>
      <section className="panel private">
        <h1>Private Content</h1>
        <p>Enter passcode to continue (passcode is listed on my resume!)</p>
        <form className="gate" onSubmit={onSubmit}>
          <input type="password" autoComplete="off" />
          <button type="submit">Unlock</button>
        </form>
        <Link className="return-link" to="/">
          ↩ Return to Projects
        </Link>
      </section>
    </Page>
  );
}

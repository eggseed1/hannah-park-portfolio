import { useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/Chrome";
import { checkPasscode, isUnlocked, unlock } from "../lib/gate";

export default function Private({ children }) {
  const [open, setOpen] = useState(isUnlocked);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const [shake, setShake] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (checkPasscode(value)) {
      unlock();
      setOpen(true);
      setError(false);
      return;
    }
    setError(true);
    setShake(true);
    window.setTimeout(() => setShake(false), 400);
  }

  if (open) return children;

  return (
    <Page>
      <section className="panel private">
        <h1>Private Content</h1>
        <p>Enter passcode to continue (passcode is listed on my resume!)</p>
        <form className={`gate${shake ? " shake" : ""}`} onSubmit={onSubmit}>
          <div className="gate-field">
            <input
              type={show ? "text" : "password"}
              autoComplete="off"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              aria-label="Passcode"
            />
            <button
              type="button"
              className="gate-eye"
              onClick={() => setShow((s) => !s)}
              aria-label={show ? "Hide passcode" : "Show passcode"}
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
          {error ? <p className="gate-error">Incorrect passcode. Try again.</p> : null}
          <button type="submit">Unlock</button>
        </form>
        <Link className="return-link" to="/">
          ↩ Return to Projects
        </Link>
      </section>
    </Page>
  );
}

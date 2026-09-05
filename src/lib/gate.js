const KEY = "hp-case-unlocked";
const PASSCODE = "design0200";

export function isUnlocked() {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function checkPasscode(value) {
  return String(value).trim() === PASSCODE;
}

export function unlock() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* ignore */
  }
}

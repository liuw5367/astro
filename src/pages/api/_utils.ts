const KEY = import.meta.env.PUBLIC_APP_KEY;
const KEY1 = import.meta.env.APP_KEY;
const SECRET = import.meta.env.APP_SECRET;
const SECRET2 = import.meta.env.PUBLIC_APP_SECRET;

export function getEnv() {
  return {
    zx1: import.meta.env.PUBLIC_APP_KEY,
    zx2: import.meta.env.APP_KEY,
    zx3: import.meta.env.APP_SECRET,
    zx4: import.meta.env.PUBLIC_APP_SECRET,
    a1: KEY,
    a2: KEY1,
    b1: SECRET,
    b2: SECRET2,
  };
}

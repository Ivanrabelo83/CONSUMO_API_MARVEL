import md5 from "js-md5";

export const PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;

export const createHash = (timestamp) => {
  const hash = md5.create();
  return hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
};

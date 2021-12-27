export default (query) => {
  if (!window) return false;

  return window.matchMedia(query).matches;
};

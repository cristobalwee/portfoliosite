exports.shouldUpdateScroll = ({
  routerProps,
  getSavedScrollPosition,
}) => {
  window.scrollTo(0, 0);
  return false
}

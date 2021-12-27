import React, { ReactNode, useCallback, Fragment } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

export const LinkFade = ({ children, url }) => {
  const exitTransition = {
    length: 1.2,
    zIndex: 2,
    trigger: ({ node }) => {
      exitTransition.exitTrigger(node);
      if (node) node.style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback(container => {
      container.setAttribute('style', 'animation: fadeOut 0.25s ease forwards;');
    }, []),
  };

  const entryTransition = {
    zIndex: 1,
    trigger: ({ node }) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback(container => {
      container.setAttribute('style', 'animation: fadeIn 0.25s ease forwards;');
    }, []),
  };

  return (
    <Fragment>
      <TransitionLink to={url} exit={exitTransition} entry={entryTransition}>
        {children}
      </TransitionLink>
    </Fragment>
  );
};

export default LinkFade;

import React from 'react';
import classnames from 'classnames';

const Loader = ({ loading }) => {
  return (
    <div className={ classnames('loader', { 'loading': loading }) }>
      <div className='loader-inner'></div>
    </div>
  );
};

export default Loader;

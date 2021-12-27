import React, { useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className='loader'>
      <div className='loader-inner' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default Loader;

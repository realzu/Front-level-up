import React, { Suspense, useState } from 'react';
import SplitMe from './SplitMe';

const SplitPage = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <p onClick={onClick}>Click me</p>
      <Suspense fallback={<div>로딩중..</div>}>
        {visible && <SplitMe />}
      </Suspense>
    </div>
  );
};

export default SplitPage;

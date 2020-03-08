import React from 'react';

import Loading from '@/components/Loading';
import s from './index.module.less';


const Fallback = () => (
  <div className={s.fallbackComponent}>
    <Loading />
  </div>
);

export default React.memo(Fallback);

import React from 'react';
import { Spin } from 'antd';

import s from './index.module.less';
import spinner from '@/assets/images/loading.png';

const Fallback = () => (
  <div className={s.fallbackComponent}>
    <Spin
      size="large"
      indicator={<img className="animation-spin" src={spinner} alt="" />}
    />
  </div>
);

export default React.memo(Fallback);

import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import s from './index.module.less';

const loadingIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const Fallback = () => (
  <div className={s.fallbackComponent}>
    <Spin
      className="common-global-loading"
      size="large"
      indicator={loadingIcon}
    />
  </div>
);

export default React.memo(Fallback);

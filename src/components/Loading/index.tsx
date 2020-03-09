import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const Loading = () => (
  <Spin
    className="g-loading"
    size="large"
    indicator={loadingIcon}
  />
);

export default React.memo(Loading);

import React, { useState, useEffect } from 'react';
import Icon from '@ant-design/icons';

import { IconStyle, SwitcherProps } from './helpers';


function CameraSwitcher({
  defaultValue = true,
  style,
  onChange,
}: SwitcherProps) {
  const [enable, setEnable] = useState(defaultValue);

  useEffect(() => {
    onChange && onChange(enable);
    // eslint-disable-next-line
  }, [enable]);

  const switchMic = () => {
    setEnable(!enable);
  };

  const icon = () => {
    return enable
      ? <img
        style={IconStyle}
        src={require('@/assets/images/camera-active.png')}
        alt="audio control" />
      : <img
        style={IconStyle}
        src={require('@/assets/images/camera-inactive.png')}
        alt="audio control"
      />;
  };

  return (
    <Icon style={{ ...(style || {}) }} onClick={switchMic} component={icon} />
  );
}

export default React.memo(CameraSwitcher);

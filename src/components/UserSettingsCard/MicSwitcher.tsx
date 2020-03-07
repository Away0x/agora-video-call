import React, { useState, useEffect } from 'react';
import Icon from '@ant-design/icons';

import { IconStyle, SwitcherProps } from './helpers';


function MicSwitcher({
  defaultValue = true,
  style,
  onChange,
}: SwitcherProps) {
  const [enable, setEnable] = useState(defaultValue);

  useEffect(() => {
    onChange && onChange(enable);
    // 上层包裹在 form item 里面，如果 dep 加了 onChange 会死循环
    // eslint-disable-next-line
  }, [enable]);

  const switchMic = () => {
    setEnable(!enable);
  };

  const icon = () => {
    return enable
      ? <img
          style={IconStyle}
          src={require('@/assets/images/mic-active.png')}
          alt="audio control" />
      : <img
          style={IconStyle}
          src={require('@/assets/images/mic-inactive.png')}
          alt="audio control"
        />;
  };

  return (
    <Icon style={{ ...(style || {})}} onClick={switchMic} component={icon} />
  );
}

export default React.memo(MicSwitcher);

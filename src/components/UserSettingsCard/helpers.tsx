import React, { CSSProperties, useState, useCallback } from 'react';
import Icon from '@ant-design/icons';

export const IconStyle: CSSProperties = {
  width: '40px',
  height: '40px',
  cursor: 'pointer'
};

export function useSwitcher(imgName: 'mic' | 'camera', defaultValue = true) {
  const [enable, setEnable] = useState(defaultValue);

  const handleSwitch = useCallback(() => {
    setEnable(!enable);
  }, [enable]);

  const iconImg = useCallback(() => {
    const alt = `${imgName === 'mic' ? 'audio' : 'video'} control`;

    return enable
      ? <img style={IconStyle} alt={alt}
          src={require(`@/assets/images/${imgName}-active.png`)}
          />
      : <img style={IconStyle} alt={alt}
          src={require(`@/assets/images/${imgName}-inactive.png`)}
          />;
  }, [enable, imgName]);

  const Switcher = useCallback(({ style }: {
    style: CSSProperties;
  }) => {
    return (
      <Icon style={{ ...(style || {}) }} onClick={handleSwitch} component={iconImg} />
    );
  }, [iconImg, handleSwitch]);

  return {
    Switcher,
    enable,
  };
}

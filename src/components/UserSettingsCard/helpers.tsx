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

  const cameraIcon = useCallback(() => {
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
  }, [enable]);

  const micIcon = useCallback(() => {
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
  }, [enable]);

  const Switcher = useCallback(({ style }: {
    style: CSSProperties;
  }) => {
    return (
      <Icon style={{ ...(style || {}) }}
        onClick={handleSwitch}
        component={imgName === 'camera' ? cameraIcon : micIcon} />
    );
  }, [imgName, cameraIcon, micIcon, handleSwitch]);

  return {
    Switcher,
    enable,
  };
}

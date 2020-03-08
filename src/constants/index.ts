import AgoraRTC from 'agora-rtc-sdk';
import AgoraRTM from 'agora-rtm-sdk';

export * from './devices';
export * from './http';

export const VersionContents = [
  `Version: ${process.env.REACT_APP_APP_VERSION}`,
  `  RTC  : ${AgoraRTC.VERSION}`,
  `  RTM  : ${AgoraRTM.VERSION}`
];

// eslint-disable-next-line
export const PASSWORD_PATTERN = /^[0-9a-zA-Z!#\$%&\(\)+-:;<=.>?@\[\]^_\}\{]+$/;

import { UAParser } from 'ua-parser-js';

const parser = new UAParser();

const userAgentInfo = parser.getResult();

export const isSafari = () => {
  return (
    userAgentInfo.browser.name === 'Safari' ||
    userAgentInfo.browser.name === 'Mobile Safari'
  );
};

export const isChrome = () => {
  return userAgentInfo.browser.name === 'Chrome';
};

export const isFirefox = () => {
  return userAgentInfo.browser.name === 'Firefox';
};

export const isMobile = () => {
  return userAgentInfo.device.type === 'mobile';
};

export const isVP8Supported = () => {
  // safari will support vp8 after 12.1
  const safariVersionStr = isSafari ? (userAgentInfo.browser.version || '') : '0.0.0';
  const [major, minor] = safariVersionStr.split('.');
  if (Number(major) > 12) {
    return true;
  } else if (Number(major) === 12) {
    return Number(minor) >= 1;
  }
  return false;
};

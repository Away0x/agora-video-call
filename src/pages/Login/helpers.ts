import AgoraRTC from 'agora-rtc-sdk';
import { notification, message } from 'antd';

import {
  isChrome as isChromeCheck,
  isSafari as isSafariCheck,
  isVP8Supported,
} from '@/tools/browser';


const isChrome = isChromeCheck();
export const isSafari = isSafariCheck();

export function browserCheck() {
  const isAgoraSupported = AgoraRTC.checkSystemRequirements();

  if (isSafari) {
    if (!isVP8Supported()) {
      notification.warning({
        duration: 0,
        message: 'For Safari User',
        description: `
              Remote video may not be visible because of browser codec constraints.
              Please switch to use Chrome for better experience.
            `
      });
    }
  }

  if (!isAgoraSupported) {
    message.warn('AgoraVideoCall seems to not support your browser.', 10000);
  }

  if (!isChrome) {
    setTimeout(() => {
      notification.warning({
        duration: 0,
        message: 'Browser Tooltip',
        description: `
              Recommend to use Chrome for a better experience.
            `
      });
    }, 100);
  }
}

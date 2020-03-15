import AgoraRTM from 'agora-rtm-sdk';


export const APP_ID = process.env.REACT_APP_AGORA_APP_ID as string;
const ENABLE_LOG = process.env.REACT_APP_AGORA_LOG === 'true';

export type RTMClientIniializeParams = {
  uid: string;
  channel: string;
}

export function createRTMClient() {
  return AgoraRTM.createInstance(APP_ID, {
    enableLogUpload: ENABLE_LOG,
    logFilter: AgoraRTM.LOG_FILTER_INFO,
  });
}

export type AgoraRTMClient = ReturnType<typeof createRTMClient>;

export function createRTMChannel(client: AgoraRTMClient, channelName: string) {
  return client.createChannel(channelName);
}

export type AgoraRTMChannel = ReturnType<typeof createRTMChannel>;

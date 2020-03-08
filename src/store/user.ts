import { RxStore } from '@/tools/rx';
import { VideoQuality } from '@/constants';
import { localStorage as storage } from '@/tools/storage';

export interface UserState {
  uid: string;
  name: string;
  portraitId?: string;
  streamId?: string | number;
  video: boolean;
  audio: boolean;
  enableVideo: boolean;
  enableAudio: boolean;
  codec: 'vp8';
  mode: 'rtc';
  videoProfile: VideoQuality;
  cameraId?: string;
  microphoneId?: string;
  // used on safari
  camera?: string;
  microphone?: string;
}

const storageData = storage.read('userState');

class UserStore extends RxStore<UserState> {

  public readonly defaultState: UserState = {
    ...{
      uid: '',
      name: '',
      video: true,
      audio: true,
      enableVideo: true,
      enableAudio: true,
      codec: 'vp8',
      mode: 'rtc',
      videoProfile: VideoQuality.Standard,
      gdprAccepted: false,
    },
    ...(storageData || {}),
    ...{
      codec: 'vp8',
    },
  };

  public updateUserInfo(newInfo: Partial<UserState>) {
    this.commit(newInfo);
  }

}

export default new UserStore();

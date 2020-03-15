import AgoraRTC from 'agora-rtc-sdk';

import { RxStore } from '@/tools/rx';
import { isSafari } from '@/tools/browser';
import { VideoQuality } from '@/constants';

export type SubmitDevicesInfo = {
  cameraId?: string;
  camera?: string;
  microphoneId?: string;
  microphone?: string;
  videoProfile: string;
};

export interface DeviceSettingsCardState {
  audios: AgoraRTC.MediaDeviceInfo[];
  videos: AgoraRTC.MediaDeviceInfo[];
  audioIndex: number;
  videoIndex: number;
  videoProfile: string;
  tempStream: null | AgoraRTC.Stream
}

class DeviceSettingsCardStore extends RxStore<DeviceSettingsCardState> {

  public PREVIEW_DOM_ID = 'preview-window';
  public VideoProfiles = [
    { label: 'Low', value: VideoQuality.Low },
    { label: 'Standard', value: VideoQuality.Standard },
    { label: 'High', value: VideoQuality.High }
  ];
  private refreshStreamPromise: Promise<any> | null = null;

  public readonly defaultState: DeviceSettingsCardState = {
    audios: [],
    videos: [],
    audioIndex: 0,
    videoIndex: 0,
    videoProfile: '',
    tempStream: null,
  }

  public async unsubscribe() {
    if (this.refreshStreamPromise) {
      try {
        await this.refreshStreamPromise;
      } catch (err) {
        console.warn(err);
      } finally {
        this.closeStream();
      }
    }
    this.refreshStreamPromise = null;
    this.closeStream();

    super.unsubscribe();
  }

  public getDevices(defaultMicrophoneId: string, defaultCameraId: string, defaultVideoProfile: string) {
    return new Promise((resolve) => {
      const audios: AgoraRTC.MediaDeviceInfo[] = [];
      const videos: AgoraRTC.MediaDeviceInfo[] = [];
      let audioIndex = this.state.audioIndex;
      let videoIndex = this.state.videoIndex;

      AgoraRTC.getDevices(((devices) => {
        (devices || []).forEach((d) => {
          if (d.kind === 'audioinput') {
            audios.push(d);
          } else if (d.kind === 'videoinput') {
            videos.push(d);
          }
        });

        audios.some((item, index) => {
          if (item.deviceId === defaultMicrophoneId) {
            audioIndex = index;
            return true;
          }
          return false;
        });

        videos.some((item, index) => {
          if (item.deviceId === defaultCameraId) {
            videoIndex = index;
            return true;
          }
          return false;
        });

        this.commit({
          audios,
          videos,
          audioIndex,
          videoIndex,
          videoProfile: defaultVideoProfile,
        });
        resolve({ audioIndex, videoIndex});
      }));
    });
  }

  public createStream() {
    return new Promise((resolve, reject) => {
      const [cameraId, microphoneId, profile] = [
        this._getCameraId(),
        this._getMicId(),
        this.state.videoProfile,
      ];

      this.closeStream();
      this.state.tempStream = AgoraRTC.createStream({
        streamID: new Date().getTime() % 10000000,
        audio: true,
        video: true,
        screen: false,
        cameraId,
        microphoneId
      });
      this.state.tempStream.setVideoProfile(profile);
      this.state.tempStream.init(
        () => {
          const previewDom = document.querySelector(`#${this.PREVIEW_DOM_ID}`);
          if (previewDom && this.state.tempStream) {
            this.state.tempStream.play(this.PREVIEW_DOM_ID)
          }
          resolve();
        },
        err => {
          reject(err)
        },
      );
    });
  }

  public refreshStream() {
    this.refreshStreamPromise = this.createStream().catch((err) => {
      console.error(`Stream failed to init, ${JSON.stringify(err)}`);
    });
  }

  public closeStream() {
    this.state.tempStream && this.state.tempStream.close();
    const previewDom = document.querySelector(`#${this.PREVIEW_DOM_ID}`);
    if (previewDom) previewDom.innerHTML = '';
  }

  public getDevicesInfo(): SubmitDevicesInfo {
    if (isSafari()) {
      const camera = this._getCamera();
      const mic = this._getMic();

      const cameraVal = camera
        ? JSON.stringify({ id: camera.deviceId, label: camera.label })
        : undefined;
      const micVal = mic
        ? JSON.stringify({ id: mic.deviceId, label: mic.label })
        : undefined;

      return {
        camera: cameraVal,
        microphone: micVal,
        videoProfile: this.state.videoProfile,
      };
    }

    return {
      cameraId: this._getCameraId(),
      microphoneId: this._getMicId(),
      videoProfile: this.state.videoProfile,
    };
  }

  public setAudioIndex(index: number) {
    this.commit({
      audioIndex: index,
    });
  }

  public setVideoIndex(index: number) {
    this.commit({
      videoIndex: index,
    });
  }

  public setVideoProfile(val: string) {
    this.commit({
      videoProfile: val,
    });
  }

  private _getCameraId(): string {
    if (!this.state.videos.length) return '';

    let videoId = this.state.videos[0].deviceId;
    if (this.state.videos[this.state.videoIndex]) {
      videoId = this.state.videos[this.state.videoIndex].deviceId;
    }
    return videoId;
  }

  private _getCamera(): AgoraRTC.MediaDeviceInfo | null {
    if (!this.state.videos.length) return null;

    let video = this.state.videos[0];
    if (this.state.videos[this.state.videoIndex]) {
      video = this.state.videos[this.state.videoIndex];
    }
    return video;
  }

  private _getMicId(): string {
    if (!this.state.audios.length) return '';

    let audioId = this.state.audios[0].deviceId;
    if (this.state.audios[this.state.audioIndex]) {
      audioId = this.state.audios[this.state.audioIndex].deviceId;
    }
    return audioId;
  }

  private _getMic(): AgoraRTC.MediaDeviceInfo | null {
    if (!this.state.audios.length) return null;

    let audio = this.state.audios[0];
    if (this.state.audios[this.state.audioIndex]) {
      audio = this.state.audios[this.state.audioIndex];
    }
    return audio;
  }

}

export default new DeviceSettingsCardStore();

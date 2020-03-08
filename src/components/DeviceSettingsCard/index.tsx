import React, { useEffect, useRef } from 'react';
import { Button, Card, Divider, Select, Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { ArrowLeftOutlined } from '@ant-design/icons';

import ScaleInWrapper from '@/components/ScaleInWrapper';
import s from './index.module.less';
import store from './store';
import { useObserver } from '@/tools/hooks/useObserver';

const RadioGroup = Radio.Group;

type DeviceSettingsCardProps = {
  defaultMicrophoneId?: string;
  defaultCameraId?: string;
  defaultVideoProfile?: string
  disablePreview?: boolean;
  onSubmit?: (formValues: FormType) => void;
  onCancel?: () => void;
  uploadLog?: () => void;
};

export type FormType = {
  cameraId?: string;
  camera?: string;
  microphoneId?: string;
  microphone?: string;
  videoProfile: string;
};

const DEFAULT_VIDEO_PROFILE = store.VideoProfiles[1].value;

function DeviceSettingsCard({
  defaultMicrophoneId = '',
  defaultCameraId = '',
  defaultVideoProfile = DEFAULT_VIDEO_PROFILE,
  disablePreview = false,
  onSubmit,
  onCancel,
  uploadLog,
}: DeviceSettingsCardProps) {
  const refreshLock = useRef(true);
  const { audios, videos, audioIndex, videoIndex, videoProfile } = useObserver(store);
  const PREVIEW_DOM_ID = store.PREVIEW_DOM_ID;
  const VideoProfiles = store.VideoProfiles;

  const handleAudioChange = (index: number) => {
    store.setAudioIndex(index);
  };

  const handleVideoChange = (index: number) => {
    store.setVideoIndex(index);
  };

  const handleVideoProfileChange = (e: RadioChangeEvent) => {
    store.setVideoProfile(e.target.value);
  };

  const handleUpdateDevices = () => {
    onSubmit && onSubmit(store.getDevicesInfo());
  };

  useEffect(() => {
    store.getDevices(defaultMicrophoneId, defaultCameraId, defaultVideoProfile).then(() => {
      refreshLock.current = false; // 获取到设备后再 refreshStream
    });

    return () => {
      refreshLock.current = true;
    };
  }, [defaultMicrophoneId, defaultCameraId, defaultVideoProfile]);

  useEffect(() => {
    if (refreshLock.current) return;
    if (disablePreview) return;
    store.refreshStream();
  }, [audios, videos, audioIndex, videoIndex, videoProfile, disablePreview]);

  return (
    <ScaleInWrapper className={s.deviceSettingsCardComponent}>
      <Card className={s.animationAppear} bodyStyle={{ position: 'relative' }}>
        <header>
          <div className={s.cartTitle}>
            <ArrowLeftOutlined className={s.backIcon} onClick={onCancel} />
            <span className={s.titleText}>Set your devices</span>
          </div>
        </header>

        <Divider />

        <div className={s.contentContainer}>
          <div className={s.audioSetting}>
            <div className={s.settingLabel}>Microphone</div>
            <div className={s.settingDesc}>
              <span>Produce sounds to check if the mic works.</span>
            </div>
            <Select className={s.audioSettingSelect}
              onChange={handleAudioChange}
              value={audioIndex}>
              {audios.map((item, index) => {
                return (
                  <Select.Option key={index} value={index}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select>
          </div>

          <div className={s.videoSetting}>
            <div className={s.videoSettingLeft}>
              <div className={s.settingLabel}>Camera</div>
              <div className={s.settingDesc}>
                <span>Move in front of the camera to check if it works.</span>
              </div>
              <Select className={s.videoSettingSelect}
                onChange={handleVideoChange}
                value={videoIndex}>
                {videos.map((item, index) => {
                  return (
                    <Select.Option key={index} value={index}>
                      {item.label}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <div>
              <div className={s.previewWindow} id={PREVIEW_DOM_ID} />
            </div>
          </div>

          <Divider />
          <div className={s.settingLabel}>Resolution</div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <RadioGroup onChange={handleVideoProfileChange} value={videoProfile}>
              {VideoProfiles.map((item, index) => (
                <Radio key={index} value={item.value}>
                  {' '} {item.label} {' '}
                </Radio>
              ))}
            </RadioGroup>
          </div>

          <Divider />
          <Button type="primary" style={{ width: '100%' }} onClick={uploadLog}>
            Upload Log
            </Button>
          <Divider />
          <Button type="primary" style={{ width: '100%' }} onClick={handleUpdateDevices}>
            Confirm
          </Button>
        </div>
      </Card>
    </ScaleInWrapper>
  );
}

export default React.memo(DeviceSettingsCard);

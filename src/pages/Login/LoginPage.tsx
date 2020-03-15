import React, { useCallback, useState, useEffect } from 'react';

import s from './LoginPage.module.less';
import { localStorage as storage } from '@/tools/storage';

import JoinRoomCard, { FormType as JoinRoomCardSubmitData } from '@/components/JoinRoomCard';
import SetNicknameCard, { FormType as SetNicknameCardSubmitData } from '@/components/SetNicknameCard';
import UserSettingsCard, { FormType as UserSettingsCardSubmitData } from '@/components/UserSettingsCard';
import DeviceSettingsCard, { FormType as DeviceSettingsCardSubmitData } from '@/components/DeviceSettingsCard';
import GDPRTermsView from '@/components/GDPRTermsView';
import {
  RegisterUserParams,
} from '@/services/user';

import { browserCheck, isSafari } from './helpers';

enum CardType {
  JOIN_ROOM_CARD = 'JOIN_ROOM_CARD',
  SET_NICKNAME_CARD = 'SET_NICKNAME_CARD',
  USER_SETTING_CARD = 'USER_SETTING_CARD',
  DEVICE_SETTING_CARD = 'DEVICE_SETTING_CARD',
}

const gdprAcceptedStorageKey = 'gdprAccepted';
const gdprAcceptedStorageData: boolean = storage.read(gdprAcceptedStorageKey);

interface LoginPageProps {
  avatar: string;
  portraitId?: string;
  name: string;

  enableAudio: boolean;
  enableVideo: boolean;
  microphoneId?: string;
  cameraId?: string;
  videoProfile: string;

  roomId: string;
  roomPwd: string;
  hasPwd: boolean;

  registerUser: (d: RegisterUserParams) => Promise<void>;
  joinRoom: (roomName: string, password: string) => void;
}

function LoginPage({
  avatar,
  portraitId,
  name,
  enableAudio,
  enableVideo,
  roomId,
  roomPwd,
  // hasPwd,
  microphoneId,
  cameraId,
  videoProfile,

  registerUser,
  joinRoom,
}: LoginPageProps) {
  const [gdprAccepted, setGdprAccepted] = useState(gdprAcceptedStorageData || false);
  const [currentCard, setCurrentCard] = useState(CardType.JOIN_ROOM_CARD);

  useEffect(() => {
    browserCheck();
  }, []);

  const acceptGDPR = useCallback(() => {
    setGdprAccepted(true);
    storage.save(gdprAcceptedStorageKey, true);
  }, []);

  const onJoinRoom = useCallback(({ roomName, password }: JoinRoomCardSubmitData) => {
    if (!name) {
      return setCurrentCard(CardType.SET_NICKNAME_CARD);
    }
    joinRoom(roomName, password);
  }, [joinRoom, name]);

  const switchJoinRoomCard = useCallback(() => {
    setCurrentCard(CardType.JOIN_ROOM_CARD)
  }, []);

  const switchDeviceSettingsCard = useCallback(() => {
    setCurrentCard(CardType.DEVICE_SETTING_CARD)
  }, []);

  const onSettingNickName = useCallback(async (data: SetNicknameCardSubmitData) => {
    await registerUser({ name: data.nickname });
    switchJoinRoomCard();
  }, [registerUser, switchJoinRoomCard]);

  const onUpdateUserSettings = useCallback((opts: UserSettingsCardSubmitData) => {
    // return updateUserSettings(opts).then(() => switchJoinRoomCard());
  }, []);

  const onUpdateStreamProfiles = useCallback((opts: DeviceSettingsCardSubmitData) => {
    // updateStreamProfiles(opts);
    if (isSafari) {

    } else {

    }

    switchJoinRoomCard();
  }, [switchJoinRoomCard]);

  const CurrentCardComponent = useCallback(() => {
    if (currentCard === CardType.SET_NICKNAME_CARD) {
      return <SetNicknameCard
        defaultNickname={name}
        onCancel={switchJoinRoomCard}
        onSubmit={onSettingNickName} />
    } else if (currentCard === CardType.USER_SETTING_CARD) {
      return <UserSettingsCard
        defaultNickname={name}
        defaultAvatarId={portraitId}
        defaultEnableVideo={enableVideo}
        defaultEnableAudio={enableAudio}
        onCancel={switchJoinRoomCard}
        onSubmit={onUpdateUserSettings} />
    } else if (currentCard === CardType.DEVICE_SETTING_CARD) {
      return <DeviceSettingsCard
        defaultMicrophoneId={microphoneId}
        defaultCameraId={cameraId}
        defaultVideoProfile={videoProfile}
        onCancel={switchJoinRoomCard}
        onSubmit={onUpdateStreamProfiles} />
    }
    return <JoinRoomCard
      defaultRoomName={roomId}
      defaultPassword={roomPwd}
      onOpenSettings={switchDeviceSettingsCard}
      onSubmit={onJoinRoom} />
    // eslint-disable-next-line
  }, [currentCard]);

  return (
    <div className={`g-container ${s.indexPage}`}>
      {!gdprAccepted && <GDPRTermsView onOk={acceptGDPR} />}
      <header className={s.header}>
        <div>
          <img className={s.logo} alt="avc-logo"
            src={require('@/assets/images/logo2.png')} />
          <span className={s.title}>AgoraVideoCall</span>
        </div>
        <div className={s.userSetting}>
          <img className={s.userSettingImg} src={avatar} alt="avatar"
            onClick={() => setCurrentCard(CardType.USER_SETTING_CARD)} />
        </div>
      </header>
      <section className={s.main}>
        <CurrentCardComponent />
      </section>
    </div>
  );
}

export default React.memo(LoginPage);


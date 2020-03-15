import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { useUserState, useRoomState } from '@/containers/root';
import {
  RegisterUserParams,
} from '@/services/user';
import { userInteractors } from '@/interactors/user';
import { roomInteractors } from '@/interactors/room';

import LoginPage from './LoginPage';


function LoginPageContainer() {
  const history = useHistory();

  const { roomId, hasPwd, roomPwd } = useRoomState();
  const {
    portraitId,
    name,
    enableAudio,
    enableVideo,
    microphoneId,
    cameraId,
    videoProfile,
  } = useUserState();

  const avatar = useMemo(() => {
    return portraitId
      ? require(`@/assets/images/avatar/avatar-${portraitId}.png`)
      : require('@/assets/images/avatar/default.png');
  }, [portraitId]);

  const handleRegisterUser = useCallback((params: RegisterUserParams) => {
    return userInteractors.registerUser(params);
  }, []);

  const joinRoom = useCallback(async (roomName: string, password: string) => {
    try {
      await roomInteractors.joinRoom({ roomName, password });
      history.push('/metting');
    } catch (err) {}
  }, [history]);

  return (
    <LoginPage
      portraitId={portraitId}
      name={name}
      avatar={avatar}
      enableAudio={enableAudio}
      enableVideo={enableVideo}
      microphoneId={microphoneId}
      cameraId={cameraId}
      videoProfile={videoProfile}
      roomId={roomId}
      hasPwd={hasPwd}
      roomPwd={roomPwd}
      registerUser={handleRegisterUser}
      joinRoom={joinRoom}
    />
  );
}

export default React.memo(LoginPageContainer);

import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import Loading from '@/components/Loading';
import { useGlobalState, useUserState, useRoomState } from '@/containers/root';
import {
  RegisterUserParams,
} from '@/services/user';
import { userInteractors } from '@/interactors/user';

import LoginPage from './LoginPage';


function LoginPageContainer() {
  const history = useHistory();

  const { loading } = useGlobalState();

  const {
    portraitId,
    name,
    enableAudio,
    enableVideo,
    microphoneId,
    cameraId,
    videoProfile,
  } = useUserState();

  const {
    roomId,
    hasPwd,
    roomPwd,
  } = useRoomState();

  const avatar = useMemo(() => {
    return portraitId
      ? require(`@/assets/images/avatar/avatar-${portraitId}.png`)
      : require('@/assets/images/avatar/default.png');
  }, [portraitId]);

  const handleRegisterUser = useCallback((params: RegisterUserParams) => {
    return userInteractors.registerUser(params);
  }, []);

  const gotoMettingPage = useCallback(() => {
    history.push('/metting');
  }, [history]);

  return (
    <>
      {loading ? <Loading /> : null}

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
        gotoMettingPage={gotoMettingPage}
        registerUser={handleRegisterUser}
      />
    </>
  );
}

export default React.memo(LoginPageContainer);

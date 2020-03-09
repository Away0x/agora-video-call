import React, { useCallback, useMemo } from 'react';
import Loading from '@/components/Loading';

import { useGlobalState, useUserState } from '@/containers/root';
import {
  RegisterUserParams,
} from '@/services/user';
import { userInteractors } from '@/interactors/user';

import LoginPage from './LoginPage';


function LoginPageContainer() {
  const { loading } = useGlobalState();
  const {
    portraitId,
  } = useUserState();

  const avatar = useMemo(() => {
    return portraitId
      ? require(`@/assets/images/avatar/avatar-${portraitId}.png`)
      : require('@/assets/images/avatar/default.png');
  }, [portraitId]);

  const handleRegisterUser = useCallback((params: RegisterUserParams) => {
    return userInteractors.registerUser(params);
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}

      <LoginPage
        avatar={avatar}
        registerUser={handleRegisterUser}
      />
    </>
  );
}

export default React.memo(LoginPageContainer);

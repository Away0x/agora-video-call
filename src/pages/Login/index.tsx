import React, { } from 'react';

import JoinRoomCard from '@/components/JoinRoomCard';
import SetNicknameCard from '@/components/SetNicknameCard';
import UserSettingsCard from '@/components/UserSettingsCard';
import DeviceSettingsCard from '@/components/DeviceSettingsCard';
// import GDPRTermsView from '@/components/GDPRTermsView';
// import ScaleInWrapper from '@/components/ScaleInWrapper';

interface LoginPageProps {
  a?: string;
}

function LoginPage({
  a,
}: LoginPageProps) {
  return (
    <div>
      <JoinRoomCard />
      <SetNicknameCard />
      <UserSettingsCard />
      <DeviceSettingsCard />
      {/* <GDPRTermsView /> */}
    </div>
  );
}

export default React.memo(LoginPage);

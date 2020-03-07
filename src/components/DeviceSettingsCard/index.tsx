import React from 'react';

type DeviceSettingsCardProps = {
  a?: string;
};

function DeviceSettingsCard({
  a,
}: DeviceSettingsCardProps) {
  return (
    <>
      DeviceSettingsCard
    </>
  );
}

export default React.memo(DeviceSettingsCard);

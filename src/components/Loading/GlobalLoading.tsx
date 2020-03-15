import React from 'react';

import { useGlobalState } from '@/containers/root';
import Loading from './index';

function GlobalLoading() {
  const { loading, loadingTip } = useGlobalState();

  if (loading) {
    return (
      <Loading tip={loadingTip} />
    );
  }

  return null;
}

export default React.memo(GlobalLoading);

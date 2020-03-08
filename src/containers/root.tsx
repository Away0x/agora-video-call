import React, { createContext, useContext, useMemo, useEffect } from 'react';

import { isDev as isDevCheck } from '@/config';
import globalStore, { GlobalState } from '@/store/global';
import userStore, { UserState } from '@/store/user';
import roomStore, { RoomState } from '@/store/room';
import { useObserver } from '@/tools/hooks/useObserver';

const isDev = isDevCheck();

export type IRootProvider = {
  globalState: GlobalState;
  userState: UserState;
  roomState: RoomState;
}

export const RootContext = createContext({} as IRootProvider);

export const useStore = () => {
  const context = useContext(RootContext)
  if (context === undefined) {
    throw new Error('useStore must be used within a RootProvider');
  }
  return context;
}

export const useGlobalState = () => {
  return useStore().globalState;
}

export const useUserState = () => {
  return useStore().userState;
}

export const useRoomState = () => {
  return useStore().roomState;
}

const RootProvider: React.FC = ({ children }) => {
  const globalState = useObserver(globalStore);
  const userState = useObserver(userStore);
  const roomState = useObserver(roomStore);

  const value = useMemo(() => {
    return {
      globalState,
      userState,
      roomState,
    };
  }, [globalState, userState, roomState]);

  useEffect(() => {
    if (isDev) {
      //@ts-ignore
      window.globalStore = globalStore;
      //@ts-ignore
      window.userStore = userStore;
      //@ts-ignore
      window.roomStore = roomStore;
    }
  }, []);

  return (
    <RootContext.Provider value={value}>
      {children}
    </RootContext.Provider>
  );
};

export default RootProvider;

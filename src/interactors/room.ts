import roomStore from '@/stores/room';
import userStore from '@/stores/user';
import globalStore from '@/stores/global';
import { getRequestToken } from '@/tools/request';
import { rtmClient } from '@/tools/rtm/client';

import { Singleton } from 'tools/Singleton';


class RoomInteractors extends Singleton {

  /** 加入房间 */
  public async joinRoom({ roomName, password }: {
    roomName: string;
    password: string;
  }) {
    globalStore.startLoading();
    try {
      const { uid, enableAudio, enableVideo } = userStore.state;
      const token = getRequestToken();

      globalStore.startLoading('连接RTM');
      await rtmClient.initialize({ uid, channel: roomName });
      roomStore.updateRoom({
        roomId: roomName,
        roomPwd: password,
      });
    } catch (err) {
      console.warn(`[UserInteractors#registerUser] error: ${err}`);
    } finally {
      globalStore.stopLoading();
      rtmClient.destroy();
    }
  }

}

export const roomInteractors = RoomInteractors.instance<RoomInteractors>();

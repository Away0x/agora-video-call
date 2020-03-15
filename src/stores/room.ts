import { Map, List } from 'immutable';

import { RxStore } from '@/tools/rx';
import { localStorage as storage } from '@/tools/storage';

export interface RoomState {
  roomId: string;
  roomPwd: string;
  topic: string;
  hosts: List<any>;
  hostsDetails: List<any>;
  defaultVideo: boolean;
  defaultAudio: boolean;
  users: Map<string, any>;
  messages: List<string>;
  unmutePool: Map<string, any>;
  hasPwd: boolean;
  roomKey: string;
  mediaToken: string | null;
  shareMediaToken: string | null;
  shareId: string | null;
  sharerId: string | null;
  roomSecure: boolean;
}

const STORAGE_KEY = 'roomState';
const storageData = storage.read(STORAGE_KEY);

class RoomStore extends RxStore<RoomState> {

  public readonly defaultState: RoomState = {
    ...{
      roomId: '',
      roomPwd: '',
      topic: '',
      hosts: List(),
      hostsDetails: List(),
      defaultVideo: true,
      defaultAudio: true,
      users: Map(),
      messages: List(),
      unmutePool: Map(),
      hasPwd: false,
      roomKey: '',
      mediaToken: null,
      shareMediaToken: null,
      shareId: null,
      sharerId: null,
      roomSecure: false
    },
    ...(storageData || {}),
    ...{
      users: Map(),
      unmutePool: Map(),
      messages: List(),
      hosts: List(),
      hostsDetails: List()
    },
  };

  public stateUpdate(state: Readonly<RoomState>) {
    storage.save(STORAGE_KEY, state);
  }

  public updateUsers(user: any) {
    this.commit({
      users: this.state.users.update(user.uid, val => {
        return {...val, user};
      }),
    });
  }

  public updateRoom(room: Partial<RoomState>) {
    this.commit(room);
  }

}

export default new RoomStore();

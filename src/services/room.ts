import { request } from '@/tools/request';
import { Singleton } from 'tools/Singleton';


export type JoinRoomParams = {
  roomName: string;
  password: string;
}

export class RoomServices extends Singleton {

  public async joinRoom({ roomName, password }: JoinRoomParams): Promise<any> {
    const result = await request.post({
      url: 'usrservice/v1/account/getToken',
      data: {
        channel: 0,
        device: 0,
        name,
      },
    });

    return result;
  }

}

export const roomServices = RoomServices.instance<RoomServices>();


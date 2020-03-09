import { request } from '@/tools/request';
import { updateRequestToken } from '@/tools/request';
import { Singleton } from 'tools/Singleton';

export type RegisterUserParams = {
  name: string;
}

type RegisterUserResp = {
  uid: string;
  name: string;
  token: string;
  portraitId: string;
  streamId: number
}

export class UserServices extends Singleton {

  public async registerUser({ name }: RegisterUserParams): Promise<RegisterUserResp> {
    const result = await request.post({
      url: 'usrservice/v1/account/getToken',
      data: {
        channel: 0,
        device: 0,
        name,
      },
    });

    updateRequestToken(result.token);
    return result;
  }

}

export const userServices = UserServices.instance<UserServices>();


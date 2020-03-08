import { Request } from '@/tools';
import { updateRequestToken } from '@/tools/http';

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

export async function registerUser({ name }: RegisterUserParams) {
  const result = await Request.request<RegisterUserResp>({
    method: 'POST',
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

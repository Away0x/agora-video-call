import userStore from '@/stores/user';
import globalStore from '@/stores/global';
import {
  userServices,
  RegisterUserParams,
} from '@/services/user';
import { Singleton } from 'tools/Singleton';

class UserInteractors extends Singleton {

  /** 用户注册 */
  public async registerUser(params: RegisterUserParams) {
    globalStore.startLoading();
    try {
      const { uid, name, portraitId, streamId } = await userServices.registerUser(params);
      userStore.updateUserInfo({ uid, name, portraitId, streamId });
    } catch (err) {
      console.warn(`[UserInteractors#registerUser] error: ${err}`);
    } finally {
      globalStore.stopLoading();
    }
  };

}

export const userInteractors = UserInteractors.instance<UserInteractors>();

import userStore from '@/store/user';
import globalStore from '@/store/global';
import {
  registerUser as registerUserService,
  RegisterUserParams,
} from '@/services/user';

class UserInteractors {
  private static _instance: UserInteractors | null = null;

  public static instance(): UserInteractors {
    if (this._instance === null) {
      this._instance = new this();
    }

    return this._instance!;
  }

  /** 用户注册 */
  public async registerUser(params: RegisterUserParams) {
    globalStore.startLoading();
    try {
      const { uid, name, portraitId, streamId } = await registerUserService(params);
      userStore.updateUserInfo({ uid, name, portraitId, streamId });
      globalStore.stopLoading();
    } catch (err) {
      globalStore.stopLoading();
      console.warn(`[LoginPage#registerUser] error: ${err}`);
    }
  };

}

export default UserInteractors.instance();

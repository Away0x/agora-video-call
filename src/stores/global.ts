import { RxStore } from '@/tools/rx';
import { localStorage as storage } from '@/tools/storage';

export interface GlobalState {
  loading: boolean;
  unmuteRequestTimeout: number;
}

const storageData = storage.read('globalState');

class GlobalStore extends RxStore<GlobalState> {

  public readonly defaultState: GlobalState = {
    ...{
      loading: false,
      unmuteRequestTimeout: 15000,
    },
    ...(storageData || {}),
  };

  public startLoading() {
    this.commit({
      loading: true,
    });
  }

  public stopLoading() {
    this.commit({
      loading: false,
    });
  }

}

export default new GlobalStore();

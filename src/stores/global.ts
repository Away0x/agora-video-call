import { RxStore } from '@/tools/rx';
import { localStorage as storage } from '@/tools/storage';

export interface GlobalState {
  loading: boolean;
  unmuteRequestTimeout: number;
}

const STORAGE_KEY = 'globalState';
const storageData = storage.read(STORAGE_KEY);

class GlobalStore extends RxStore<GlobalState> {

  public readonly defaultState: GlobalState = {
    ...{
      loading: false,
      unmuteRequestTimeout: 15000,
    },
    ...(storageData || {}),
    ...(this.state || {}),
  };

  public stateUpdate(state: Readonly<GlobalState>) {
    storage.save(STORAGE_KEY, state);
  }

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

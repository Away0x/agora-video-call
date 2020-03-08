
export interface IObserver<T> {
  subscribe: (setState: (state: T) => void) => void;
  unsubscribe: () => void;
  commit: (newState: Partial<T>) => void;
  defaultState: T;
}

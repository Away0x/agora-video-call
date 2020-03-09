import { BehaviorSubject } from 'rxjs';

export interface IObserver<T> {
  subscribe: (setState: (state: T) => void) => void;
  unsubscribe: () => void;
  commit: (newState: Partial<T>) => void;
  defaultState: T;
  state: T;
}

export abstract class RxStore<T> implements IObserver<T> {

  public abstract readonly defaultState: Readonly<T>;
  public subject: BehaviorSubject<T> | null = null;

  public set state(newState: T) {
    this.subject && this.subject.next(newState);
  }

  public get state() {
    if (!this.subject) return this.defaultState;
    return this.subject.getValue();
  }

  public initialize() {
    this.subject = new BehaviorSubject(this.defaultState);
  };

  public stateUpdate(state: Readonly<T>) {}

  public subscribe(stateUpdate: (state: Readonly<T>) => void) {
    this.initialize();

    this.subject && this.subject.subscribe((s) => {
      this.stateUpdate(s);
      stateUpdate(s);
    });
  }

  public unsubscribe() {
    this.subject && this.subject.unsubscribe();
    this.subject = null;
  }

  public commit(newState: Partial<T>) {
    this.subject && this.subject.next({ ...this.state, ...newState });
  }

}

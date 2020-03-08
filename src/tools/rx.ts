import { BehaviorSubject } from 'rxjs';

export interface IObserver<T> {
  subscribe: (setState: (state: T) => void) => void;
  unsubscribe: () => void;
  commit: (newState: Partial<T>) => void;
  defaultState: T;
  state: T;
}

export abstract class RxStore<T> implements IObserver<T> {

  public abstract readonly defaultState: T;
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

  public subscribe(updateState: (state: T) => void) {
    this.initialize();
    this.subject && this.subject.subscribe(updateState);
  }

  public unsubscribe() {
    this.subject && this.subject.unsubscribe();
    this.subject = null;
  }

  public commit(newState: Partial<T>) {
    this.subject && this.subject.next({ ...this.state, ...newState });
  }

}

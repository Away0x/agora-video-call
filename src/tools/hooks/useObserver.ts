import { useState, useEffect } from 'react';

import { IObserver } from '@/tools/rx';

export function useObserver<T>(store: IObserver<T>) {
  const [state, setState] = useState<T>(store.defaultState);

  useEffect(() => {
    store.subscribe((state: any) => {
      setState(state);
    });

    return () => {
      store.unsubscribe();
    }
  }, [store]);

  return state;
}

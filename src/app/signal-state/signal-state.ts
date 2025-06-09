import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type CountState = { count: number };

const initialState: CountState = {
  count: 0,
};

export const countState = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    increment(): void {
      patchState(store, (state) => ({
        count: state.count + 1,
      }));
    },
    decrement(): void {
      patchState(store, (state) => ({
        count: state.count - 1,
      }));
    },
  }))
);

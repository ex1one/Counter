import { RootState } from '../store';

const selectors = {
  counter: (state: RootState) => state.counter,
};

export default selectors;

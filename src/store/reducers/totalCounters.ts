import { createSlice } from '@reduxjs/toolkit';

export interface ICounter {
  id: number | string;
}

interface IInitialState {
  counters: ICounter[];
  total: number;
}

const initialState: IInitialState = {
  counters: [],
  total: 0,
};

const totalCounters = createSlice({
  name: 'totalCounters',
  initialState,
  reducers: {
    addCounter(state) {
      state.counters.push({ id: new Date().getMilliseconds() });
    },

    deleteCounter(state) {
      state.counters.pop();
    },
    increment(state) {
      state.total += 1;
    },
    decrement(state) {
      state.total -= 1;
    },
  },
});

export const { addCounter, deleteCounter, increment, decrement } = totalCounters.actions;

export default totalCounters.reducer;

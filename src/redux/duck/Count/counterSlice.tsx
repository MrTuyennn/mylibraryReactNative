import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'redux/configureStore.dev';

export interface CounterState {
  value: number;
  title: string;
}

const initialState: CounterState = {
  value: 0,
  title: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
      state.title = 'Cộng 1 đơn vị';
    },
    decrement: state => {
      state.value -= 1;
      state.title = 'Trừ 1 đơn vị';
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload?.value;
      state.title = action.payload?.title;
    },
    incrementSaga: (state, action) => {
      console.log('?');
    },
    incrementSagaSuccess: (state, action) => {
      state.title = 'idle';
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  incrementSaga,
  incrementSagaSuccess,
} = counterSlice.actions;

export const selectCount = (state: RootState) => state;
export default counterSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameInfoContent, IQuestionStep } from './models';
import { initialGamePageState } from './constants';

const initialState = initialGamePageState as IGameInfoContent;

export const gamePageSlice = createSlice({
  name: 'gamePage',
  initialState,
  reducers: {
    addQuestionStep(state, action: PayloadAction<IQuestionStep>) {
      state.questionSteps.push(action.payload);
    },
  },
});

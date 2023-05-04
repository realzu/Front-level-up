import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTIONS = 'auth/SAMPLE_ACTIONS';

export const sampleAction = createAction(SAMPLE_ACTIONS);

const initialState = {};

const auth = handleActions(
  {
    [SAMPLE_ACTIONS]: (state, action) => state,
  },
  initialState,
);

export default auth;

import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

//  액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// 초기 상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'redux',
      done: true,
    },
    {
      id: 2,
      text: 'context api',
      done: false,
    },
  ],
};

// 리듀서 함수
const todos = handleActions(
  {
    // [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    // [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.slice(index, 1);
      }),
  },
  initialState,
);

export default todos;

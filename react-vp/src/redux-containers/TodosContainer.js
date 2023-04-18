import { connect } from 'react-redux';
import Todos from '../redux-components/Todos';
import {
  changeInput,
  insert,
  toggle,
  remove,
} from '../redux-components/modules/todos';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  // 비구조화 할당을 통하여 todos 를 분리하여
  // state.todos.input 대신 todos.input 을 사용
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);

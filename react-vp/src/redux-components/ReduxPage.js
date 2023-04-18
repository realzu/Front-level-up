import CounterContainer from '../redux-containers/CounterContainer';
import TodosContainer from '../redux-containers/TodosContainer';

const ReduxPage = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default ReduxPage;

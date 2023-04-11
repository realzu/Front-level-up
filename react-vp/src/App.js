import { Route, Routes } from 'react-router-dom';
import BasicPage from './BasicComponents/BasicPage';
import TodoPage from './TodoComponents/TodoPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
};

export default App;

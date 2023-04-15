import { Route, Routes } from 'react-router-dom';
import BasicPage from './BasicComponents/BasicPage';
import TodoPage from './TodoComponents/TodoPage';
import Immutability from './Components/Immutability';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/Immutability" element={<Immutability />} />
    </Routes>
  );
};

export default App;

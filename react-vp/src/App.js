import { Route, Routes } from 'react-router-dom';
import BasicPage from './BasicComponents/BasicPage';
import TodoPage from './TodoComponents/TodoPage';
import Immutability from './Components/Immutability';
import Home from './RouteComponents/Home';
import About from './RouteComponents/About';
import Profile from './RouteComponents/Profile';
import Articles from './RouteComponents/Articles';
import Article from './RouteComponents/Article';
import Layout from './RouteComponents/Layout';
import NewsPage from './NewsComponents/NewsPage';
import ColorPage from './ContextComponents/ColorPage';
import ReduxPage from './redux-components/ReduxPage';

const App = () => {
  return (
    <Routes>
      <Route index element={<BasicPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/Immutability" element={<Immutability />} />

      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>

      <Route path="/news" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />

      <Route path="/color" element={<ColorPage />} />

      <Route path="/redux" element={<ReduxPage />} />
    </Routes>
  );
};

export default App;

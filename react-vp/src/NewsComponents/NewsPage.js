import NewsList from './NewsList';
import Categories from './Categories';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;

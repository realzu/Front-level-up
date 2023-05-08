import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();

  const { username } = useParams();
  const tag = searchParams.get('tag');
  const page = parseInt(searchParams.get('page'), 10) || 1; // 없으면 1 기본값

  const { posts, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  if (!posts || loading) return null;

  return (
    <div>
      {username} , {tag}, {page}
    </div>
  );
};

export default PaginationContainer;

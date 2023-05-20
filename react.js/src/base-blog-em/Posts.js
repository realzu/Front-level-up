import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query"; // 서버에서 데이터 가져올때 사용할 hook
import { PostDetail } from "./PostDetail";

const maxPostPage = 10;

async function fetchPosts(pageNum) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    // prefetching
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextPage], () =>
        fetchPosts(nextPage)
      );
    }
  }, [currentPage, queryClient]);

  const { data, isError, error, isLoading } = useQuery(
    ["posts", currentPage],
    () => fetchPosts(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  ); //쿼리이름, 함수(쿼리의 데이터 가져올 방법), options(2초마다 게시물 만료)
  // [의존성 배열] -> 바뀌면 함수도 바뀜 => 데이터 변경

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>something went wrong ㅠ</h3>
        <p>{error.toString()}</p>
        {/* TypeError: Failed to fetch */}
      </>
    );

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((previousValue) => previousValue - 1);
          }}
        >
          Previous page
        </button>
      </div>
      <span>Page {currentPage}</span>
      <div className="pages">
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => {
            setCurrentPage((previousValue) => previousValue + 1);
          }}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}

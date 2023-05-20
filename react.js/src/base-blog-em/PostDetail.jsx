import { useMutation, useQuery } from "react-query";

async function fetchComments(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);
	return response.json();
}

async function deletePost(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/postId/${postId}`,
		{ method: "DELETE" }
	);
	return response.json();
}

async function updatePost(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/postId/${postId}`,
		{ method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
	);
	return response.json();
}

const ab = "ax";

export function PostDetail({ post }) {
	const { data, isLoading, isError, error } = useQuery(
		["comments", post.id],
		() => {
			fetchComments(post.id);
		}
	); // 의존성 배열로 'comments'뿐만 아니라 식별자 더해짐(post.id)

	const deleteMutation = useMutation((postId) => deletePost(postId));

	if (isError) {
		return <></>;
	}

	return (
		<>
			<h3 style={{ color: "blue" }}>{post.title}</h3>
			<button>Delete</button> <button>Update title</button>
			<p>{post.body}</p>
			<h4>Comments</h4>
			{data.map((commment) => (
				<li key={commment.id}>
					{commment.email}: {commment.body}
				</li>
			))}
		</>
	);
}

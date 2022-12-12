import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
	return {
		props: { time: new Date().toISOString() },
	};
}

export default function Home({ time }) {
	return (
		<div className={styles.container}>
			<h1>Hello Next World!</h1>
			<h1>{time}</h1>
		</div>
	);
}

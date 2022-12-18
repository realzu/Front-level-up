import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
	const favoritesCtx = useContext.apply(FavoritesContext);

	let content; // JSX 반환

	if (favoritesCtx.totalFavorites === 0) {
		content = <p>You got no favorites yet. Start adding some?</p>
	}
	// else {
	// 	content = <MeetupList meetups={favoritesCtx.favorites} />
	// }

	return (
		<>
			<h1>My Favorites</h1>
			{ content }
		</>
	)
}

export default Favorites;
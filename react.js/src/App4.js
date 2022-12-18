import { useContext } from "react"
import FavoritesContext from "./store/favorites-context"

export default function App4(props) { // MeetupItem 컴포넌트 임시로 App4에 테스트
	const favoritesCtx = useContext(FavoritesContext); // 객체 가져옴 (component와 context 연결)

	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id); // 즐겨찾기 추가확인 - T/F

	// 즐겨찾기에 아이템 유무 판단
	function toggleFavoriteStatusHandler() {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(props.id);
		}
		else {
			// 상태 업데이트 -> userFavorites 배열에 항목 추가
			favoritesCtx.addFavorite({
				id: props.id,
				// title: props.title,
			})
		}
	}

	return (
		<button onClick={toggleFavoriteStatusHandler}>
			{ itemIsFavorite ? 'Remove from Favoriets' : 'To Favorites' }
		</button>
	)
}

import { createContext, useState } from "react";

const FavoritesContext = createContext({
	// 초기값
	favorites: [],
	totalFavorites: 0,
	addFavorite: (favoriteMeetup) => {}, // for IDE 자동완성
	removeFavorite: (favoriteMeetup) => {},
	itemIsFavorite: (favoriteMeetup) => {}
});

// for 값 수신 및 업데이트
export function FavoritesContextProvider(props) {
	const [userFavorites, setUserFavorites] = useState([]);

	function addFavoriteHandler(favoriteMeetup) { // concat
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.concat(favoriteMeetup);
		}); // 기존상태 기반으로 상태 업데이트 (함수로)
	}

	function removeFavoriteHandler(meetupId) { // filter
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
		})
	}

	function itemIsFavoriteHandler(meetupId) { // some
		return userFavorites.some((meetup) => meetup.id === meetupId);
	}

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler
	};

	return <FavoritesContext.Provider value={context}> {/* value 프로퍼티로 컴포넌트에 context 분배 */}
		{ props.childern }
	</FavoritesContext.Provider>
}

export default FavoritesContext;
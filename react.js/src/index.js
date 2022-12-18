import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites-context";
import App4 from "./App4";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	// <React.StrictMode>
// 	<>
// 		<App />
// 		<App2 />
// 		<App3 />
// 	</>
// 	// </React.StrictMode>
// );

ReactDOM.render(
	<FavoritesContextProvider>
		<BrowserRouter>
			<App4 />
		</BrowserRouter>
	</FavoritesContextProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

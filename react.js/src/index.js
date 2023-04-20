import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites-context";
import App4 from "./App4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// ReactDOM.render(
// 	<FavoritesContextProvider>
// 		<BrowserRouter>
// 			<App4 />
// 		</BrowserRouter>
// 	</FavoritesContextProvider>,
// 	document.getElementById("root")
// );

reportWebVitals();

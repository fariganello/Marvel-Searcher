import React, { useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {MyProvider} from './store/store';
import Characters from "./views/Characters";
import SearchBar from "./views/SearchBar";
import SingleCharacter from "./views/SingleCharacter"
import {reducer, initialState} from "./reducers/reducer"


function App() {

	const useMarvelState = useReducer(reducer, initialState);
	
	return (
		<MyProvider value={useMarvelState}>
			<BrowserRouter>
				<div>
					<SearchBar />
					<Route exact path="/" component={Characters} />
					<Route exact path="/characters/:characterId" component={SingleCharacter} />
				</div>
			</BrowserRouter>
		</MyProvider>
	);
}

export default App;

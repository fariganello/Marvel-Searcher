import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {MyProvider} from './MyContext';
import Characters from "./views/Characters";
import SearchBar from "./views/SearchBar";
import SingleCharacter from "./views/SingleCharacter"

const initialStore = {	characters: [],
						comics: [],
						singleCharacter: {},
						setCharacters: () => {},
						setSingleCharacter: () => {},
						setComics: () => {} 
					};

function App() {
	
	const setCharacters = (characters) => {
        setStore({ ...store, characters: characters });
	}
	
	const setSingleCharacter = (character) => {
        setStore({ ...store, singleCharacter: character });
	}

	const setComics = (comics) => {
        setStore({ ...store, comics: comics });
    }
	
	const [store, setStore] = useState({...initialStore, setCharacters: setCharacters, setSingleCharacter: setSingleCharacter, setComics: setComics});
	
	return (
		<MyProvider value={store}>
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

import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {MyProvider} from './MyContext';
import Characters from "./views/Characters";
import SearchBar from "./views/SearchBar";
import SingleCharacter from "./views/SingleCharacter"



function App() {
	
	const initialStore = {	characters: [],
		comics: [1],
		singleCharacter: {},
		setCharacters: () => {},
		setSingleCharacter: () => {},
		setComics: () => {} 
	};
	const setCharacters = (characters) => {
		console.log(store, "AAAAAAAAAAA")
		setStore({ ...store, characters: characters });
		console.log("AGREGANDO CHARACTERS", characters, store)
	}
	
	const setSingleCharacter = (character) => {
		setStore({ ...store, singleCharacter: character });
		console.log("AGREGANDO SINGLE CHARACTER", character, store)
	}

	const setComics = (comics) => {
		console.log("ANTES", store)
		const newStore = {...store}
		newStore.comics = comics
		setStore(newStore);
		console.log("DESPUES", store)
    }
	
	const [store, setStore] = useState({...initialStore, setCharacters: setCharacters, setSingleCharacter: setSingleCharacter, setComics: setComics});
	
	
	setTimeout(function(){ console.log("store in app 10s", store) }, 10000);


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

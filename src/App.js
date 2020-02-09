import React, { useState } from "react";

import {MyProvider} from './MyContext';
import Characters from "./views/Characters";
import SearchBar from "./views/SearchBar";

const initialStore = { characters: [], comics: [], setCharacters: () => {}, setComics: () => {} };

function App() {
	
	const setCharacters = (characters) => {
        setStore({ ...store, characters: characters });
	}
	
	const setComics = (comics) => {
        setStore({ ...store, comics: comics });
    }
	
	const [store, setStore] = useState({...initialStore, setCharacters: setCharacters, setComics: setComics});
	
	return (
		<MyProvider value={store}>
			<div>
				<SearchBar />
				<Characters />
			</div>
		</MyProvider>
	);
}

export default App;

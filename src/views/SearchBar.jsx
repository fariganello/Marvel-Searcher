import crypto from "crypto-js";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom"

import {fetchCharacters} from "../api"
import MyContext from '../store/store';
import {MarvelLogo, SearchBarContainer, SearchInput, StyledForm} from "../styles/SearchBarStyles"

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState("");
	const [, dispatch ] = useContext(MyContext)
	let history = useHistory();
	
	const publicApiKey = process.env.PUBLIC_APIKEY;
	const privateApiKey = process.env.PRIVATE_APIKEY;
	const timeStamp = "1";
	const hash = crypto.MD5(timeStamp + privateApiKey + publicApiKey)

	const handleSubmit = (event) => {
		event.preventDefault();
	}

	const handleChange = (event) => {
		setSearchInput(event.target.value)
		const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${event.target.value}&ts=${timeStamp}&apikey=${publicApiKey}&hash=${hash}`;
		const baseUrl = process.env.BASE_URL || "http://localhost:3000";
		fetchCharacters(url, baseUrl, dispatch, history);
	}

	return (
		<SearchBarContainer>
			<Link to={"/"}>
				<MarvelLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"/>
			</Link>
			<StyledForm onSubmit={handleSubmit}>
				<SearchInput type="text" placeholder="Buscar" value={searchInput} onChange={handleChange}/>	
			</StyledForm>
		</SearchBarContainer>
	);
}
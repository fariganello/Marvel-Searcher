import crypto from "crypto-js";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom"

import {BASE_URL, PRIVATE_APIKEY, PUBLIC_APIKEY } from "../constants"
import {fetchCharacters} from "../api"
import MyContext from '../store/store';
import {MarvelLogo, SearchBarContainer, SearchInput, StyledForm} from "../styles/SearchBarStyles"

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState("");
	const [, dispatch ] = useContext(MyContext)
	let history = useHistory();
	
	// const PUBLIC_APIKEY = process.env.PUBLIC_APIKEY;
	// const PRIVATE_APIKEY = process.env.PRIVATE_APIKEY;
	const timeStamp = "1";
	const hash = crypto.MD5(timeStamp + PRIVATE_APIKEY + PUBLIC_APIKEY)

	const handleSubmit = (event) => {
		event.preventDefault();
	}

	const handleChange = (event) => {
		setSearchInput(event.target.value)
		const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${event.target.value}&ts=${timeStamp}&apikey=${PUBLIC_APIKEY}&hash=${hash}`;
		const baseUrl = BASE_URL || "http://localhost:3000";
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
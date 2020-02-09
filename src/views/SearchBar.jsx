import axios from "axios";
import crypto from "crypto-js";
import React, { useState } from "react";

import {MyConsumer} from '../MyContext';
import {MarvelLogo, SearchBarContainer, SearchInput, StyledForm} from "../styles/SearchBarStyles"

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState("");
	
	const PUBLIC_APIKEY = "f1e0fad14a51aa5012fe77652993a1b5"
	const PRIVATE_APIKEY = "5880a69ada84766a9985e06d0b6315cf6a9f7171" 
	const timeStamp = "1";
	const hash = crypto.MD5(timeStamp + PRIVATE_APIKEY + PUBLIC_APIKEY)

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
		.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith	=${searchInput}&ts=${timeStamp}&apikey=${PUBLIC_APIKEY}&hash=${hash}`)
		.then((res) => {
			return res.data;
		})
		.then((character) => console.log(character))
		.catch((err) => {
			return err;
		});
	}

	const handleChange = (event, context) => {
		setSearchInput(event.target.value)
		axios
		.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith	=${event.target.value}&ts=${timeStamp}&apikey=${PUBLIC_APIKEY}&hash=${hash}`)
		.then((res) => {
			return res.data;
		})
		.then((characters) => {
			context.setCharacters(characters.data.results);
			console.log(context.characters);
		})
		.catch((err) => {
			return err;
		});
	}

	return (
		<MyConsumer> 
			{context =>
				<SearchBarContainer>
					<MarvelLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"/>
					<StyledForm onSubmit={handleSubmit}>
						<SearchInput type="text" placeholder="Buscar" value={searchInput} onChange={(event)=>handleChange(event, context)}/>	
					</StyledForm>
				</SearchBarContainer>
			}
		</MyConsumer>
		
	);
}
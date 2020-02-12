import React from "react";
import {Link} from "react-router-dom"

import MyContext from '../store/store';
import {CardContainer, CardImage, CharactersContainer} from "../styles/CharactersStyles"

export default function Characters() {

	const [ state ] = React.useContext(MyContext)
	const { characters } = state;
	return (
		characters.length?
		<CharactersContainer>
			{characters.map(character => 
				<Link to={`/characters/${character.id}`} key={character.id}>
					<CardContainer>
						<CardImage src={`https${character.thumbnail.path.slice(4)}.${character.thumbnail.extension}`} alt={character.name}/>
						<span>{character.name}</span>
					</CardContainer>
				</Link>
			)}
		</CharactersContainer>
		:""		
	);
}

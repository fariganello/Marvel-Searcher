import React from "react";

import {MyConsumer} from '../MyContext';
import {CardContainer, CardImage, CharactersContainer} from "../styles/CharactersStyles"

export default function Characters() {
	return (
		<MyConsumer>
			{context =>
				<CharactersContainer>
					{context.characters.map(character => 
						<CardContainer key={character.id}>
							<CardImage src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
							<span>{character.name}</span>
						</CardContainer>
					)}
				</CharactersContainer>		
			}
		</MyConsumer>
	);
}
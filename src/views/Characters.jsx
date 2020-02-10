import React from "react";
import {Link} from "react-router-dom"

import {MyConsumer} from '../MyContext';
import {CardContainer, CardImage, CharactersContainer} from "../styles/CharactersStyles"

export default function Characters() {
	return (
		<MyConsumer>
			{context =>
				<CharactersContainer>
					{context.characters.map(character => 
						<Link to={`/characters/${character.id}`} key={character.id}>
							<CardContainer>
								<CardImage src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
								<span>{character.name}</span>
							</CardContainer>
						</Link>
					)}
				</CharactersContainer>		
			}
		</MyConsumer>
	);
}

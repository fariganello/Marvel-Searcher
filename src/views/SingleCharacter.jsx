import axios from "axios";
import crypto from "crypto-js";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom"

import MyContext, {MyConsumer} from "../MyContext";
import {CharacterImage, DetailCharacterSpan, InfoCharacterContainer, SingleCharacterContainer} from "../styles/SingleCharacterStyles"

export default function SingleCharacter() {
    
    const PUBLIC_APIKEY = "f1e0fad14a51aa5012fe77652993a1b5"
	const PRIVATE_APIKEY = "5880a69ada84766a9985e06d0b6315cf6a9f7171" 
	const timeStamp = "1";
	const hash = crypto.MD5(timeStamp + PRIVATE_APIKEY + PUBLIC_APIKEY)

    const {characterId} = useParams();
    const {singleCharacter, setSingleCharacter} = React.useContext(MyContext)

console.log(singleCharacter)

    useEffect(()=>{
        axios
		.get(`http://gateway.marvel.com/v1/public/characters/${characterId}?ts=${timeStamp}&apikey=${PUBLIC_APIKEY}&hash=${hash}`)
		.then((res) => {
			return res.data;
		})
		.then((character) => {
            console.log(character)
			setSingleCharacter(character.data.results[0]);
		})
		.catch((err) => {
			return err;
		});
    },[])
    
    return (
		singleCharacter.name?
        <SingleCharacterContainer>
            <CharacterImage src={`${singleCharacter.thumbnail.path}.${singleCharacter.thumbnail.extension}`} alt={singleCharacter.name}/>
            <InfoCharacterContainer>
                <DetailCharacterSpan><strong>Name: </strong>{singleCharacter.name}</DetailCharacterSpan>
                <DetailCharacterSpan><strong>Description: </strong>{singleCharacter.description}</DetailCharacterSpan> 
            </InfoCharacterContainer>
            
        </SingleCharacterContainer>	
        :""
	);
}

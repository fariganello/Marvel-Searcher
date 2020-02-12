import crypto from "crypto-js";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom"

import { fetchComics, fetchSingleCharacter } from "../api"
import MyContext from "../store/store";
import {    CharacterImage,
            CharacterImageContainer,
            ComicCard,
            ComicDesc,
            ComicImage,
            Comics,
            ComicsContainer,
            ComicsTitle,
            DetailCharacterSpan,
            InfoCharacterContainer,
            SingleCharacterContainer
        } from "../styles/SingleCharacterStyles"

export default function SingleCharacter() {
    
    const PUBLIC_APIKEY = "f1e0fad14a51aa5012fe77652993a1b5"
	const PRIVATE_APIKEY = "5880a69ada84766a9985e06d0b6315cf6a9f7171" 
	const timeStamp = "1";
	const hash = crypto.MD5(timeStamp + PRIVATE_APIKEY + PUBLIC_APIKEY)

    const {characterId} = useParams();
    const [ state, dispatch ] = React.useContext(MyContext)
    const {comics, singleCharacter} = state

    useEffect(()=>{
        const urlSingleCharacter = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${timeStamp}&apikey=${PUBLIC_APIKEY}&hash=${hash}`;
        const urlComics = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=${timeStamp}&apikey=${PUBLIC_APIKEY}&hash=${hash}`;
        const baseUrl = "https://radiant-eyrie-53028.herokuapp.com/";
        
        fetchSingleCharacter(urlSingleCharacter, baseUrl, dispatch);
        fetchComics(urlComics, baseUrl, dispatch);
    },[])

    return (
        <div>
            {singleCharacter.id?
            <SingleCharacterContainer>
                <CharacterImageContainer>
                    <CharacterImage src={`https${singleCharacter.thumbnail.path.slice(4)}.${singleCharacter.thumbnail.extension}`} alt={singleCharacter.name}/>
                </CharacterImageContainer>
                <InfoCharacterContainer>
                    <DetailCharacterSpan><strong>Name: </strong>{singleCharacter.name}</DetailCharacterSpan>
                    <DetailCharacterSpan><strong>Description: </strong>{singleCharacter.description}</DetailCharacterSpan> 
                </InfoCharacterContainer>      
            </SingleCharacterContainer>	
            :""}
            {comics.length?
            <ComicsContainer>
                <ComicsTitle>Comics</ComicsTitle>
                <Comics>
                    {comics.map(comic => 
                        <ComicCard key={comic.id}>
                            <ComicImage src={`https${comic.thumbnail.path.slice(4)}.${comic.thumbnail.extension}`} alt={comic.title}/>
                            <ComicDesc>{comic.title}</ComicDesc>
                        </ComicCard>
                    )}
                </Comics>
            </ComicsContainer>
            :""}
        </div>
	);
}

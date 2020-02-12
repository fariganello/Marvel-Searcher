import axios from "axios";
import crypto from "crypto-js";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom"

import MyContext from "../store/store";
import {    CharacterImage,
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

    // const {singleCharacter, setSingleCharacter, comics, setComics} = React.useContext(MyContext)

console.log(state, "SINGLE CHAR")
console.log(singleCharacter, comics, "MOSTRAR")


    useEffect(()=>{
        axios({
			method:"get",
            url:`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${timeStamp}&apikey=${PUBLIC_APIKEY}&hash=${hash}`,
            baseURL: "https://radiant-eyrie-53028.herokuapp.com/"
        })
		.then((res) => {
			return res.data;
		})
		.then((res) => {
            const singleCharacter = res.data.results[0]
			dispatch({
				type: 'SET_SINGLE_CHARACTER',
				singleCharacter
			});
		})
		.catch((err) => {
			return err;
        });

        axios({
			method:"get",
            url:`https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=${timeStamp}&apikey=${PUBLIC_APIKEY}&hash=${hash}`,
            baseURL: "https://radiant-eyrie-53028.herokuapp.com/"
        })
		.then((res) => {
			return res.data;
		})
		.then((res) => {

            const comics = res.data.results
			dispatch({
				type: 'SET_COMICS',
				comics
			});
		})
		.catch((err) => {
			return err;
        });
    },[])

    return (
        <div>
            {singleCharacter.id?
            <SingleCharacterContainer>
                <CharacterImage src={`'https'+${singleCharacter.thumbnail.path.slice(4)}.${singleCharacter.thumbnail.extension}`} alt={singleCharacter.name}/>
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
                            <ComicImage src={`"https"+${comic.thumbnail.path.slice(4)}.${comic.thumbnail.extension}`} alt={comic.title}/>
                            <ComicDesc>{comic.title}</ComicDesc>
                        </ComicCard>
                    )}
                </Comics>
            </ComicsContainer>
            :""}
        </div>
	);
}

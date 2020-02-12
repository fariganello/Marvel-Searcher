import axios from "axios";

export const fetchCharacters = (url, baseUrl, dispatch, history) => {
    axios({
        method:"get",
        url:url,
        baseURL: baseUrl
    })
    .then((res) => {
        return res.data;
    })
    .then((res) => {
        const characters = res.data.results
        dispatch({
            type: 'SET_CHARACTERS',
            characters
        });

        history.push("/")
    })
    .catch((err) => {
        const characters = []
        dispatch({
            type: 'SET_CHARACTERS',
            characters
        });	
        return err;
    });
}

export const fetchSingleCharacter = (url, baseUrl, dispatch) => {
    axios({
        method:"get",
        url:url,
        baseURL: baseUrl
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
}

export const fetchComics = (url, baseUrl, dispatch) => {
    axios({
        method:"get",
        url:url,
        baseURL: baseUrl
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
}
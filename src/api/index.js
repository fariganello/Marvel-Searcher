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

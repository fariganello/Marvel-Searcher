import axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import MyContext from '../store/store';

const [state, dispatch ] = useContext(MyContext)
let history = useHistory();

export const fetchCharacters = (url, baseUrl) => {
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

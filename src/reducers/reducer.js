export const initialState = {
    characters: [],
    comics: [],
    singleCharacter: {}
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return {
                ...state, characters: action.characters
            };
        case 'SET_SINGLE_CHARACTER':
            return {
                ...state, singleCharacter: action.singleCharacter
            };
        case 'SET_COMICS':
            return {
                ...state, comics: action.comics
            };
        default:
            return state;
    }
};
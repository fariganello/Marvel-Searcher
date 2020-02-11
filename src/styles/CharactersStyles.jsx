import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 20px;
    font-weight: bold;
`;

export const CardImage = styled.img`
    width: 300px;
    object-fit: cover
`;

export const CharactersContainer = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;
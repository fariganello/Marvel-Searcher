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
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`;
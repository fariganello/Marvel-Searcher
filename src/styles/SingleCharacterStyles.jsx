import styled from "styled-components";

export const CharacterImageContainer = styled.div`
    text-align: center;
`;

export const CharacterImage = styled.img`
    width: 300px;
    margin: 30px;
    object-fit: cover;
`;

export const ComicCard = styled.div`
    display:flex;
    flex-direction: column;
    width: 80px;
    margin: 5px;
`;

export const ComicDesc = styled.div`
    font-size: 0.7em;
    margin: 0,auto;
`;

export const ComicImage = styled.img`
    width: 80px;
    object-fit: cover
`;

export const Comics = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ComicsContainer = styled.div`

`;

export const ComicsTitle = styled.div`
    font-weight: bold;
`;

export const DetailCharacterSpan = styled.span`
    margin: 5px;
`;

export const InfoCharacterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SingleCharacterContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`;
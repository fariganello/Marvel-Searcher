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
    object-fit: cover;
`;

export const Comics = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ComicsContainer = styled.div`
    margin: 10px;
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
    width: 50%;
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        margin: 10px;
    }
`;

export const SingleCharacterContainer = styled.div`
    margin: 10px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`;
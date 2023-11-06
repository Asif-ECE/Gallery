import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: #E7E4E3;
    min-height: 100vh;
`

export const Container = styled.div`
    width: 75vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
`;

export const Topbar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid #E7E4E3;
`;

export const Title = styled.div`
    height: 20px;
    margin: 40px;
`;

export const ImageContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(5, minmax(200px, 1fr));
`;

export const ImageItem = styled.div`
    height: 200px;
    width: 200px;
    box-sizing: border-box;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    grid-row: auto;
`;

export const LargeImageItem = styled(ImageItem)`
    height: 420px;
    width: 420px;
    grid-column: span 2;
    grid-row: span 2;
`;

export const DeleteButton = styled.button`
    height: 30px;
    width: 90px;
    margin: 40px;
    border: none;
    border-radius: 10px;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
    height: 15px;
    width: 15px;
    margin: 10px;
`;
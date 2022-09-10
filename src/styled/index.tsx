import styled, { css } from "styled-components";

export const Font = css `
    @font-face {
        font-weight: normal;
        font-style: normal;
        src: url('get-schwifty.ttf') format('truetype');
    }
`;

export const TitlePage = styled.h1 `
    color: red;
    font-size: 50px;
    font-family: ${Font};
`;

export const Container = styled.div `
    position: fixed;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    left: 30%;
`;

export const List = styled.ul `
    list-style: none;
`;

export const Item = styled.li `
    list-style: none;
`;

export const Image = styled.img `
    width: 100px;
`;

export const Header = styled.div `
    display: flex;
    justify-content: center;
`;
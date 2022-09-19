import styled, { css } from "styled-components";
/*
Paleta de Cores:
#3D373C - Marrom Escuro
#2f9331 - Verde
#477385 - Azul Fechado
#926f44 - Marrom Claro
#afdc29 - Verde Claro
#c19978 - Bege
#00b4cb - Azul Claro
#e5d29f - Amarelo Claro
#e7e0bd - Bege Claro
*/
export const TitlePage = styled.h1 `
    color: red;
    font-size: 50px;
    font-family: CustomFont;
    color: #00b4cb;
    font-weight: bold;
    text-shadow: 1px 3px #afdc29;
    -webkit-text-stroke-width: 0.001px;
    -webkit-text-stroke-color: black;
`;

export const Container = styled.div `
    display: flex;
    justify-content: center;
`;

export const Card = styled.div `
    padding: 50px;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    margin-top: 100px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
`;

export const List = styled.ul `
    list-style: none;
`;

export const Item = styled.li `
    list-style: none;
`;

export const Image = styled.img `
    width: 100px;
    border-radius: 5px;
    box-shadow: 0 0 10px #477385;
    cursor: pointer;
`;

export const Header = styled.div `
    display: flex;
    justify-content: center;
`;

export const Footer = styled.div `
    background-image: linear-gradient(to left, #00b4cb, #e5d29f);
    text-align: center;
    padding: 10px;
    font-size: 13px;
    font-family: CustomFontTwo;
    color: black;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 5vh;

    ul {
        display: flex;
        justify-content: center;
            li {
                list-style: none;
                img {
                    width: 10px;
                    margin-left: 10px;
                }
            }
       }
`;
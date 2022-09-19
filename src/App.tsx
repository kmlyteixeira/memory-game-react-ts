import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import INFO_CHARACTER from './querys';
import { Container, Item, List, TitlePage, Image, Header, Card, Footer } from './styled';
import './App.css';

function App() {

  function Shuffle(params: any) {
    var m = params.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = params[m];
      params[m] = params[i];
      params[i] = t;
    }
    setResult(params);
  }

  const [characters, setCharacters] = useState<any>([]);
  const [result, setResult] = useState<any>([]);

  const { data } = useQuery(INFO_CHARACTER, { variables: { ListIds: [1, 2, 3, 4, 5, 14, 15, 20, 18, 17] } });

  useEffect(() => {
    const fetchData = async () => {
      const result = await data;
      return result;
    }

    const char = fetchData()
    char.then((res) => {
      setCharacters(res.charactersByIds);
    });
  }, []);

  useEffect(() => {
    if (characters) {
      Shuffle([...characters, ...characters]);
    }
  }, [characters]);

  const cards = new Array(20);
  var temp = 0;

  for (let i = 0; i < 20; i++) {
    temp = temp + 1;
    cards[i] = { id: temp, image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg' };

    if (temp == 10) {
      temp = 0;
    }
  }

  const handleClick = (id: any) => {
    cards[id - 1].image = result[id - 1].image;
    /*console.log("Imagem de id: " + id + " foi alterada");*/
  }

  return (
    <Container>
      <Header>
        <TitlePage>Memory Game</TitlePage>
      </Header>
      <Card>
        {cards.map((character: any) => (
          <List key={character.id}>
            <Item>
              <Image id= {character.id} onClick={handleClick} src={character.image} alt={character.name} />
            </Item>
          </List>
        ))}
      </Card>
      <Footer>
        <ul>
          <li>Reach me On:
            <a href="https://github.com/kmlyteixeira"><img src="../images/github.png"></img></a>
            <a href="https://www.linkedin.com/in/kemily-teixeira/"><img src="../images/linkedin.png"></img></a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default App;

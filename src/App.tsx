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

  const [characters, setCharacters] = useState([]);
  const [doubleCharacters, setDoubleCharacters] = useState([]);
  const [result, setResult] = useState([]);

  const { data } = useQuery(INFO_CHARACTER, { variables: { ListIds: [1, 2, 3, 4, 5, 14, 15, 20, 18, 17] } });

  useEffect(() => {
      setCharacters(data.charactersByIds);
  }, [data]);

  useEffect(() => {
    setDoubleCharacters([...characters, ...characters]);
    Shuffle(doubleCharacters);
  }, [characters]);

  console.log(characters);

  return (
    <Container>
      <Header>
        <TitlePage>Memory Game</TitlePage>
      </Header>
      <Card>
        {result.map((character: any) => (
          <List key={character.id}>
            <Item>
              <Image src={character.image} alt={character.name} />
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

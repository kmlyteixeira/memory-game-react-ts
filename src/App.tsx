import { useQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
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
  }, [data]);

  useEffect(() => {
    if (characters) {
      Shuffle([...characters, ...characters]);
    }
  }, [characters]);

  const cardBackClassName = ['card-back'];
  const cardFrontClassName = ['card-front'];

  const [selected, setSelected] = useState(0);
  
  const handleClick = (event: any) => {
    cardBackClassName.push('card-back__flip');  //continue here
    cardFrontClassName.push('card-front__flip');
    const newSelected = event.target.id;
    setSelected(newSelected);
    
    if (selected === newSelected) { //test if the same card is clicked twice
      console.log('acertou');
      console.log('newSelected: ' + newSelected);
      console.log('selected: ' + selected);
      setSelected(0);
    } else if (selected !== newSelected && selected != 0) {
      console.log('errou');
      console.log('newSelected: ' + newSelected);
      console.log('selected: ' + selected);
      setSelected(0);
    }
  }
  
  return (
    <Container>
      <Header>
        <TitlePage>Memory Game</TitlePage>
      </Header>
      <Card>
        {result.map((character: any, index: any) => (
          <List key={index}>
            <Item>
              <div className={cardBackClassName.join(' ')}><Image id= {character.id} onClick={handleClick} src="../images/tag.jpeg" alt={character.name} /></div>
              <div className={cardFrontClassName.join(' ')}><Image id= {character.id} onClick={handleClick} src={character.image} alt={character.name} /></div>
            </Item>
          </List>
        ))}
      </Card>
      <Footer>
        <ul>
          <li>
            <a href="https://github.com/kmlyteixeira"><img src="../images/github.png"></img></a>
            <a href="https://www.linkedin.com/in/kemily-teixeira/"><img src="../images/linkedin.png"></img></a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default App;

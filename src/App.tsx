import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import INFO_CHARACTER from './querys';
import client from './services';
import { Container, Item, List, TitlePage, Image, Header } from './styled';

function App() {

  const [characters, setCharacters] = useState([]);

  const { data } = useQuery(INFO_CHARACTER, { client: client });

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data]);

  return (
    <>
      <Header>
        <TitlePage>Memory Game</TitlePage>
      </Header><Container>
        {characters.map((character: any) => (
          <List key={character.id}>
            <Item>
              <Image src={character.image} alt={character.name} />
            </Item>
          </List>
        ))}
      </Container>
    </>
  );
}

export default App;

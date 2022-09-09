import { useQuery } from '@apollo/client';
import React from 'react';
import INFO_CHARACTER from './querys';
import client from './services';
import { Container, Item, List, TitlePage, Image} from './styled';

function App() {

  const { data } = useQuery(INFO_CHARACTER, {client: client});

  return (
    <Container>
      <TitlePage>Memory Game</TitlePage>
      {data.characters.results.map((character: any) => (
        <List key={character.id}>
          <Item>
            <Image src={character.image} alt={character.name} />
          </Item>
        </List>
      ))}
    </Container>
  );
}

export default App;

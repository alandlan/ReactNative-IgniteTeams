import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/groupcard';
import {Container} from './styles';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Grupo A', 'Grupo B', 'Grupo C']);

  return (
    <Container>
      <Header />
      <Highlight title="Grupos" subTitle="Conheça os grupos disponíveis" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
      
    </Container>
  );
}

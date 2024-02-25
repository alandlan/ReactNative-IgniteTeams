import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/groupcard';
import {Container} from './styles';
import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/listempyt';
import { Button } from '@components/button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups(props: any) {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleCreateGroup() {
    navigation.navigate('newgroup');
  }

  async function fetchGroups() {
    try {
      const groups = await groupsGetAll();
      setGroups(groups);
    }catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />
      <Highlight title="Grupos" subTitle="Conheça os grupos disponíveis" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => <ListEmpty message="Nenhum grupo encontrado" />}
      />

      <Button title="Criar grupo" onPress={handleCreateGroup} />
      
    </Container>
  );
}

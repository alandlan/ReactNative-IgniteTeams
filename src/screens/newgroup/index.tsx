import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNewGroup() {
    try {

      if(!group || group.trim().length === 0){
        throw new AppError('Nome do grupo é obrigatório');
      }

      await groupCreate(group);

      navigation.navigate('players', {group });
    }catch (error) {

      if(error instanceof AppError) {
        Alert.alert('Erro', error.message);
      }else{
        Alert.alert('Erro', 'Erro ao criar grupo');
        console.log(error);
      }

    }
  }

  return (
    <Container>
        <Header showBackButton/>

        <Content>
            <Icon />
            <Highlight
                title="Novo grupo"
                subTitle="Crie um novo grupo para conversar com seus amigos"
            />

            <Input placeholder="Nome do grupo" onChangeText={setGroup} />

            <Button title="Criar"  style={{marginTop:20}} onPress={handleNewGroup}/>
        </Content>
    </Container>
  );
}
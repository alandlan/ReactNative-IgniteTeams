import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('players', {group });
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
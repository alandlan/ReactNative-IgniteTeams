import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('players', {group: 'newgroupplayers'});
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

            <Input placeholder="Nome do grupo" />

            <Button title="Criar"  style={{marginTop:20}} onPress={handleNewGroup}/>
        </Content>
    </Container>
  );
}
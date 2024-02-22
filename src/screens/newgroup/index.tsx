import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";

export function NewGroup() {
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

            <Button title="Criar"  style={{marginTop:20}}/>
        </Content>
    </Container>
  );
}
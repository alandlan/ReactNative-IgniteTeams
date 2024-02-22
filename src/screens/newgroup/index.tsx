import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";

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

            <Button title="Criar" />
        </Content>
    </Container>
  );
}
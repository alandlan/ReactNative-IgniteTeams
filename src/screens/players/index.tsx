import { Header } from "@components/header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/buttonicon";
import { Input } from "@components/input";

export function Players() {
    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title="Jogadores"
                subTitle="Aqui você encontra todos os jogadores cadastrados"
            />

            <Form>
                <Input placeholder="Buscar jogadores" autoCorrect={false} />
                <ButtonIcon icon="add" type="PRIMARY" />

            </Form>

        </Container>
    );
}
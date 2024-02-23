import { Header } from "@components/header";
import { Container } from "./styles";
import { Highlight } from "@components/highlight";

export function Players() {
    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title="Jogadores"
                subTitle="Aqui você encontra todos os jogadores cadastrados"
            />
        </Container>
    );
}
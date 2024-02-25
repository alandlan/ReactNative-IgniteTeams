import { Header } from "@components/header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/buttonicon";
import { Input } from "@components/input";
import { Filter } from "@components/filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/playercard";
import { ListEmpty } from "@components/listempyt";
import { Button } from "@components/button";

export function Players() {
    const[team, setTeam ] = useState("Time A");
    const[players, setPlayers] = useState([]);

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

            <HeaderList>
                <FlatList 
                    data={["Time A", "Time B"]}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Filter title={item} active={item === team} onPress={() => setTeam(item)}/>
                    )}
                    horizontal
                />

                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>

            <FlatList 
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <PlayerCard name={item} onRemove={() => {}}/>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => ( <ListEmpty message="Nenhum jogador encontrado."/>)}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    !players.length && {flex: 1}
                ]}
            />
            
            <Button title="Remover time" type="SECONDARY" />

        </Container>
    );
}
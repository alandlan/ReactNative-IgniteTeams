import { Header } from "@components/header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/buttonicon";
import { Input } from "@components/input";
import { Filter } from "@components/filter";
import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PlayerCard } from "@components/playercard";
import { ListEmpty } from "@components/listempyt";
import { Button } from "@components/button";
import { useRoute } from "@react-navigation/native";
import { PlayerStorageDTO } from "@storage/player/playerStorageDTO";
import { err } from "react-native-svg";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";

type RouteParams = {
    group: string;
}

export function Players() {
    const[playerName, setPlayerName] = useState("");
    const[team, setTeam ] = useState("Time A");
    const[players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    async function handleAddPlayer() {
        if(playerName.trim().length === 0) {
            return Alert.alert("Nome do jogador é obrigatório");
        }

        const player: PlayerStorageDTO = {
            name: playerName,
            team: team
        }

        try {

            await playerAddByGroup(player, group);
            fetchPlayerByTeam();
            
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert(error.message);
            }else{
                console.log(error);
            }
        }
    }

    async function fetchPlayerByTeam() {
        try {
            const players = await playerGetByGroupAndTeam(group,team);
            setPlayers(players);
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert(error.message);
            }else{
                console.log(error);
            }
        }
    }

    useEffect(() => {
        fetchPlayerByTeam();
    }, [team]);

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title={group}
                subTitle="Aqui você encontra todos os jogadores cadastrados"
            />

            <Form>
                <Input onChangeText={setPlayerName} placeholder="Buscar jogadores" autoCorrect={false} />
                <ButtonIcon icon="add" type="PRIMARY" onPress={handleAddPlayer} />
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
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <PlayerCard name={item.name} onRemove={() => {}}/>
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
import { Header } from "@components/header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/buttonicon";
import { Input } from "@components/input";
import { Filter } from "@components/filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { PlayerCard } from "@components/playercard";
import { ListEmpty } from "@components/listempyt";
import { Button } from "@components/button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PlayerStorageDTO } from "@storage/player/playerStorageDTO";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

type RouteParams = {
    group: string;
}

export function Players() {
    const[playerName, setPlayerName] = useState("");
    const[team, setTeam ] = useState("Time A");
    const[players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    const playerNameRef = useRef<TextInput>(null);

    const navigation = useNavigation();

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
            setPlayerName("");
            playerNameRef.current?.blur();
            
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

    async function handleRemovePlayer(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group);
            fetchPlayerByTeam();
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert(error.message);
            }else{
                console.log(error);
            }
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group);
            navigation.navigate("groups");
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert(error.message);
            }else{
                console.log(error);
            }
        }
    }

    async function handleRemoveGroup() {
        Alert.alert(
            "Remover time",
            "Deseja realmente remover o time?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Remover",
                    onPress: () => {
                        groupRemove();
                    }
                }
            ]
        );
    
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
                <Input 
                    inputRef={playerNameRef}
                    onChangeText={setPlayerName} 
                    placeholder="Buscar jogadores"
                    value={playerName} 
                    autoCorrect={false} 
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"/>
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
                    <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)}/>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => ( <ListEmpty message="Nenhum jogador encontrado."/>)}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    !players.length && {flex: 1}
                ]}
            />
            
            <Button title="Remover time" type="SECONDARY" onPress={handleRemoveGroup} />

        </Container>
    );
}
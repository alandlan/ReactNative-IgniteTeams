import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./playerStorageDTO";

export async function playerAddByGroup(player: PlayerStorageDTO, group: string): Promise<void> {
    try {
        const storedPlayers = await playersGetByGroup(group);

        const playerExists = storedPlayers.filter((p) => p.name === player.name);

        if (playerExists.length > 0) {
            throw new AppError('Player already exists');
        }
        
        const players = JSON.stringify([...storedPlayers, player]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
    } catch (error) {
        throw (error);
    }
}
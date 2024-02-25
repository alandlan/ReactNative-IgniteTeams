import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(group: string) {
    try {
        const groups = await groupsGetAll();

        const groupExists = groups.includes(group);

        if (groupExists) {
            throw new AppError('Grupo já existe!');
        }

        const storage = JSON.stringify([...groups, group]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    }catch (error) {
        throw error
    }
}
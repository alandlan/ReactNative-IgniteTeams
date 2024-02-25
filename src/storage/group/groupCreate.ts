import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(group: string) {
    try {
        const groups = await groupsGetAll();
        const storage = JSON.stringify([...groups, group]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    }catch (error) {
        throw error
    }
}
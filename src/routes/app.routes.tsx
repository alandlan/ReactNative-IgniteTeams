import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "@screens/groups";
import { NewGroup } from "@screens/newgroup";
import { Players } from "@screens/players";

const {Navigator,Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator>
            <Screen name="groups" component={Groups}/>
            <Screen name="newgroup" component={NewGroup}/>
            <Screen name="players" component={Players}/>
        </Navigator>
    )
}
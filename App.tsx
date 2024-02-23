import { useFonts,Roboto_400Regular,Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";

import theme from "src/theme";
import { Groups } from "@screens/groups";
import { Loading } from "@components/loading";
import { NewGroup } from "@screens/newgroup";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });


  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent />
      { fontsLoaded ? <Groups /> : <Loading/> }
      {/* { fontsLoaded ? <NewGroup /> : <Loading/> } */}
    </ThemeProvider>
  );
}
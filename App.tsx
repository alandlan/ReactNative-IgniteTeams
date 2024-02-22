import { useFonts,Roboto_400Regular,Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";

import theme from "src/theme";
import { Groups } from "@screens/groups";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });


  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups /> : <ActivityIndicator/> }
    </ThemeProvider>
  );
}
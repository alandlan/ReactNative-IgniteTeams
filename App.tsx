import { useFonts,Roboto_400Regular,Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";

import theme from "src/theme";
import { Loading } from "@components/loading";

import { Routes } from "@routes/index";

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
      {/* { fontsLoaded ? <Groups /> : <Loading/> } */}
      {/* { fontsLoaded ? <NewGroup /> : <Loading/> } */}
      {/* { fontsLoaded ? <Players /> : <Loading/> } */}
      { fontsLoaded ? <Routes /> : <Loading/> }
    </ThemeProvider>
  );
}
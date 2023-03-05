import { StatusBar } from 'expo-status-bar';
import {Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins'
import { Loading } from './src/components/Loading';
import { NativeBaseProvider} from 'native-base';
import { theme } from './src/styles/theme';
import { Routes } from './src/routes';
import { Register } from './src/pages/Register';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })


  return (
    <NativeBaseProvider theme={theme}>
        {fontsLoaded ? 
          <Routes />
          : 
          <Loading />
        }
        <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}



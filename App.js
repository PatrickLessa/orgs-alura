import React from 'react'
import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/screens/Cesta';

import { 
  useFonts,
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat'

export default function App() {

  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!loadedFont) {
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}


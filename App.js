import React from 'react'
import { StatusBar, SafeAreaView, View } from 'react-native';

import Cesta from './src/screens/Cesta/index'
import mock from './src/mocks/cesta'

import { 
  useFonts,
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!loadedFont) {
    return <AppLoading/>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}


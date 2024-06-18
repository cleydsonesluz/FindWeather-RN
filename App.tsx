// import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native'
import React from 'react';
import { AtomText } from './src/components/atoms';
import { TextTypes } from './src/components/molecules';
import { Generic } from './src/components/templates/Generic';
import { OnboardingScreen } from './src/Screens/Onboarding';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <OnboardingScreen/>
  );
}

export default App;

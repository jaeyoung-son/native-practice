import React from 'react';
import {StatusBar} from 'react-native';
import Navigatoor from '~/Screen/Navigator';
import {RandomUserDataProvider} from '~/Context/RandomUserData';

interface Props {}

const App = ({}: Props) => {
  return (
    <RandomUserDataProvider cache={true}>
      <StatusBar barStyle="default" />
      <Navigatoor />
    </RandomUserDataProvider>
  );
};

export default App;

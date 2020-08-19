import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationState, NavigationScreenProp} from 'react-navigation';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #efefef;
  justify-content: center;
  align-items: center;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const CheckLogin = ({navigation}: Props) => {
  AsyncStorage.getItem('key')
    .then(value => {
      if (value) {
        navigation.navigate('MainTabNavigator');
      } else {
        navigation.navigate('LoginNavigator');
      }
    })
    .catch((e: Error) => {
      console.log(e);
    });

  return <Container />;
};

CheckLogin.navigationOptions = {
  header: null,
};

export default CheckLogin;

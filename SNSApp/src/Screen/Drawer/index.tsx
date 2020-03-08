import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #feffff;
`;

const Header = styled.View`
  border-bottom-width: 1px;
  border-color: #d3d3d3;
  padding: 8px 16px;
`;

const Title = styled.Text``;

const Button = styled.TouchableOpacity`
  padding: 8px 16px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.Image`
  margin-right: 8px;
`;

const Label = styled.Text`
  font-size: 16px;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 32px;
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Drawer = ({navigation}: Props) => {
  return (
    <Container>
      <Header>
        <Title>Sara Lambert</Title>
      </Header>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/Assets/Images/ic_camera.png')} />
          <Label>사진</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/Assets/Images/ic_live.png')} />
          <Label>라이브</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/Assets/Images/ic_favorite_outline.png')} />
          <Label>팔로워</Label>
        </ButtonContainer>
      </Button>
      <Footer>
        <Button
          onPress={() => {
            AsyncStorage.removeItem('key');
            navigation.navigate('CheckLogin');
          }}>
          <ButtonContainer>
            <Icon
              source={require('~/Assets/Images/Tabs/ic_profile_outline.png')}
            />
            <Title>로그아웃</Title>
          </ButtonContainer>
        </Button>
      </Footer>
    </Container>
  );
};

export default Drawer;

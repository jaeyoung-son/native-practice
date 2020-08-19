import React, {useContext} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {UserContext} from '~/Context/User';

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

const Button = styled.TouchableHighlight`
  padding: 8px 16px;
`;

const BUttonContainer = styled.View`
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

const Drawer = ({navigation}: any) => {
  const {logout} = useContext<IUserContext>(UserContext);
  return (
    <Container>
      <Header>
        <Title>zkqkzl2</Title>
      </Header>
      <Button>
        <BUttonContainer>
          <Icon source={require('~/Assets/Images/ic_camera.png')} />
          <Label>사진</Label>
        </BUttonContainer>
      </Button>
      <Button>
        <BUttonContainer>
          <Icon source={require('~/Assets/Images/ic_live.png')} />
          <Label>라이브</Label>
        </BUttonContainer>
      </Button>
      <Button>
        <BUttonContainer>
          <Icon
            source={require('~/Assets/Images/Tabs/ic_favorite_outline.png')}
          />
          <Label>팔로워</Label>
        </BUttonContainer>
      </Button>
      <Footer>
        <Button
          onPress={() => {
            logout();
          }}>
          <BUttonContainer>
            <Icon
              source={require('~/Assets/Images/Tabs/ic_profile_outline.png')}
            />
            <Title>로그아웃</Title>
          </BUttonContainer>
        </Button>
      </Footer>
    </Container>
  );
};

export default Drawer;

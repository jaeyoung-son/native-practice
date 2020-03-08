import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #feffff;
`;

const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

const Logo = styled.Text`
  color: #292929;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const PasswordReset = styled.Text`
  width: 100%;
  color: #3796ef;
  text-align: right;
  margin-bottom: 24px;
`;

const SignupText = styled.Text`
  color: #929292;
  text-align: center;
`;

const SignupLink = styled.Text`
  color: #3796ef;
`;

const Footer = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
  padding: 8px;
`;

const Copyright = styled.Text`
  color: #929292;
  text-align: center;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Login = ({navigation}: Props) => {
  return (
    <Container>
      <FormContainer>
        <Logo>SNS App</Logo>
        <Input style={{marginBotton: 16}} placeholder="이메일" />
        <Input
          style={{marginBotton: 16}}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <PasswordReset onPress={() => navigation.navigate('PasswordReset')}>
          비밀번호 재설정
        </PasswordReset>
        <Button
          label="로그인"
          style={{marginBotton: 24}}
          onPress={() => {
            AsyncStorage.setItem('key', 'JWT_KEY');
            navigation.navigate('MainNavigator');
          }}
        />
        <SignupText>
          계정이 없는가요?{''}
          <SignupLink onPress={() => navigation.navigate('Signup')}>
            가입하기.
          </SignupLink>
        </SignupText>
      </FormContainer>
      <Footer>
        <Copyright>SNSApp from dev-jaeyoung</Copyright>
      </Footer>
    </Container>
  );
};

Login.navigationOptions = {
  header: null,
};

export default Login;

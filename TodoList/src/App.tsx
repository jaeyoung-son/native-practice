import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {TodoListContextProvider} from '~/Context/TodoListContext';
import Todo from './Screens/Todo';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
  margin: 4px 16px;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
`;

const Label = styled.Text`
  flex: 1;
`;

const DeleteButton = styled.TouchableOpacity``;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

interface Props {
  text: string;
  onDelete: () => void;
}

const TodoItem = ({text, onDelete}: Props) => {
  return (
    <Container>
      <Label>{text}</Label>
      <DeleteButton onPress={onDelete}>
        <Icon source={require('~/Assets/Images/remove.png')} />
      </DeleteButton>
    </Container>
  );
};

export default TodoItem;

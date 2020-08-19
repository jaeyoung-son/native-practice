import React from 'react';
import styled from 'styled-components/native';

const StyleButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: #3796ef;
`;

const Label = styled.Text`
  color: #ffffff;
`;

interface Props {
  label: string;
  style?: Object;
  color?: string;
  onPress?: () => void;
}

const Button = ({label, style, color, onPress}: Props) => {
  return (
    <StyleButton style={style} onPress={onPress}>
      <Label style={{color: color ? color : '#ffffff'}}>{label}</Label>
    </StyleButton>
  );
};

export default Button;

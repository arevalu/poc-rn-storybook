import React, { FunctionComponent } from 'react';
import { PressableProps } from 'react-native';
import styled from 'styled-components/native';

export interface ButtonProps extends PressableProps {
  label: string
}

const ButtonWrapper = styled.Pressable`
  background-color: blueviolet;
  height: 40px;
  width: 100px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 24px;
`;

export const Button: FunctionComponent<ButtonProps> = ({ label, ...props }) => {
  return (
    <ButtonWrapper
      {...props}
    >
      <ButtonText>{label}</ButtonText>
    </ButtonWrapper>
  );
};


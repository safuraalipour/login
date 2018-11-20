import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, Text} from 'react-native';
import {blue, gray} from "./variables";

export const TextInput = styled.TextInput `
    padding-vertical: 5px;
`;

export const FormControl = styled.View`
    margin-bottom: 24px;
`;

const ButtonWrapper = styled.View`
    padding-vertical: 20px;
    flex-direction:column;
    align-items: center;
    border-radius: 100px;
    background-color: ${blue};
`;

const ButtonText = styled.Text`
    color: white;
    
`;
export const Button = ({title, onPress, ...rest}) => (
    <TouchableOpacity onPress={onPress}>
        <ButtonWrapper {...rest}>
            <ButtonText>{title}</ButtonText>
        </ButtonWrapper>
    </TouchableOpacity>
);

export const Seperator = styled.View`
    height: 1px;
    border-top-width: 1px;
    border-top-color: ${gray};
    
    margin-top: 16px;
    margin-bottom: 16px;
`;
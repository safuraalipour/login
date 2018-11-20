import React from 'react';
import {TextInput, FormControl, Button} from '../../styles';
import {Title, LoginWrapper, FormContainer} from './Login.style'


export default function Login({navigation}) {
    return (
        <LoginWrapper>
            <Title>Sign in to start</Title>
            <FormContainer>
                <FormControl>
                    <TextInput
                        placeholder={'Email address'}
                    />
                </FormControl>
                <FormControl>
                    <TextInput
                        placeholder={'password'}
                        secureTextEntry
                    />
                </FormControl>
            </FormContainer>

            <Button
                info
                title={'Login'}
                onPress={() => navigation.navigate('Blogs')}
            />

        </LoginWrapper>
    );
}


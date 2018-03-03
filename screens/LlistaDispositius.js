import React from 'react';
import { Text, View } from 'react-native'
import styled from 'styled-components';

import List from '../components/List'


export default class LlistaDispositius extends React.Component{
    static Wrapper = styled.View`
        height: 100%;
    `

    render(){
        return(
            <LlistaDispositius.Wrapper>
                <List type='dispositius'/>
            </LlistaDispositius.Wrapper>
        )
    }
}
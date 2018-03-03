import React from 'react';
import { Text, View } from 'react-native'
import styled from 'styled-components';
import List from '../components/List'

export default class LlistaFuncionsDispositiu extends React.Component{

    render(){
        return(
            <View>
                <List type='funcions' />
            </View>
        )
    }
}
import React from 'react'
import { Image, TouchableHighlight, View } from 'react-native'
import { withNavigation } from 'react-navigation';
import styled from 'styled-components'

import Icon from './Icon'
import Label from './Label'

export class ListItem extends React.Component{
    static Wrapper = TouchableHighlight

    static Content = styled.View`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
    ` 

    static IconBox = styled.View`
        width: 60px;
        height: 60px;

        margin-right: 16px; 

        background-color: #8A5AED;
        border-radius: 3px;
    `

    render(){
        const { title, subtitle, navigation } = this.props
        return(
            <ListItem.Wrapper onPress={() => navigation.navigate('LlistaFuncionsDispositiu', {
                id: title.toLowerCase(),
              })} >
                <ListItem.Content>
                    <ListItem.IconBox>
                        <Icon gliph={title.toLowerCase()}/>
                    </ListItem.IconBox>
                    <View>
                        <Label>{title}</Label>
                        <Label secondary>{subtitle}</Label>
                    </View>
                </ListItem.Content>
            </ListItem.Wrapper >
        )
    }
}

export default withNavigation(ListItem)

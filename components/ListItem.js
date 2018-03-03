import React from 'react'
import { Image, TouchableHighlight, View } from 'react-native'
import { withNavigation } from 'react-navigation';
import styled from 'styled-components'

import ItemInfo from './ItemInfo'
import Icon from './Icon'

export class ListItem extends React.Component{
    static Wrapper = TouchableHighlight

    static Content = styled.View`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
    `

    static Info = ItemInfo

    static IconBox = styled.View`
        width: 60px;
        height: 60px;

        margin-right: 16px; 

        background-color: palevioletred;
        border-radius: 3px;
    `

    render(){
        const { title, subtitle, navigation } = this.props
        return(
            <ListItem.Wrapper onPress={() => navigation.navigate('LlistaFuncionsDispositiu')} >
                <ListItem.Content>
                        <ListItem.IconBox />
                        <ListItem.Info 
                            title={title}
                            subtitle={subtitle}    
                        />
                </ListItem.Content>
            </ListItem.Wrapper >
        )
    }
}

export default withNavigation(ListItem)

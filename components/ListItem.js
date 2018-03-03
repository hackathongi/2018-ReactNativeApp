import React from 'react'
import { Image, TouchableHighlight, View } from 'react-native'
import { withNavigation } from 'react-navigation';
import styled from 'styled-components'

import ItemInfo from './ItemInfo'
import Icon from './Icon'

export class ListItem extends React.Component{
    static Wrapper = styled.View`
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

    static TouchableArea = TouchableHighlight

    render(){
        return(
            <ListItem.Wrapper>
                <ListItem.TouchableArea onPress={() => this.props.navigation.navigate('LlistaFuncionsDispositiu', {
                        itemId: this.props.value.id,
                        type: this.props.value.type,
                    })} 
                >
                    <ListItem.IconBox></ListItem.IconBox>
                    <ListItem.Info 
                        title={this.props.value.title}
                        subtitle={this.props.value.subtitle}    
                    />
                </ListItem.TouchableArea >
            </ListItem.Wrapper>
        )
    }
}

export default withNavigation(ListItem)

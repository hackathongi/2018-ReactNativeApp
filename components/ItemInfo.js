import React from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'
import Icon from './Icon'

const BlackView = styled.View`
    background-color:red;
`

export default class ItemInfo extends React.Component{

    render(){
        return(
            <BlackView >
                <Icon/>
                <Text>{this.props.title}</Text>
                <Text>{this.props.subtitle}</Text>
            </BlackView>
        )
    }
}

import React from 'react'
import { Image, Text,TouchableHighlight, View } from 'react-native'
import styled from 'styled-components'
import Icon from './Icon'

import Label from './Label'

export default class ItemInfo extends React.Component{

    render(){
        return(
            <View>
                <Label>{this.props.title}</Label>
                <Label secondary>{this.props.subtitle}</Label>
            </View>
        )
    }
}

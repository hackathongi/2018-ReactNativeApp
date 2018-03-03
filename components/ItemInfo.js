import React from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'



export default class ItemInfo extends React.Component{

    render(){
        return(
            <View>
                {/**<Image />*/}
                <Text>{this.props.title}</Text>
                <Text>{this.props.subtitle}</Text>
            </View>
        )
    }
}

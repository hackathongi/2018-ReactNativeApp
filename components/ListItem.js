import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import ItemInfo from './ItemInfo'

export default class ListItem extends React.Component{

    render(){
        return(
            <View>
                <ItemInfo 
                    title={this.props.value.title}
                    subtitle={this.props.value.subtitle}    
                />
                {/**<Image />*/}
            </View>
        )
    }
}

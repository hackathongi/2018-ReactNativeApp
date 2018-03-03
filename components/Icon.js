import React from 'react'
import { View,Image } from 'react-native'
import styled from 'styled-components'

import SvgUri from 'react-native-svg-uri'

const availableIcons = {
    'persiana': require(`../assets/icons/persiana.svg`),
    'muffin_shot': require(`../assets/icons/muffin_shot.svg`)
}

export default class Icon extends React.Component{
    render(){
        const { gliph } = this.props
        return(
            <View>
                {availableIcons[gliph] &&
                    <SvgUri
                        width="60"
                        height="60"
                        source={availableIcons[gliph]}
                    />
                }
            </View>
        )
    }
}
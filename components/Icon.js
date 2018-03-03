import React from 'react'
import { View,Image } from 'react-native'
import styled from 'styled-components'

export default class Icon extends React.Component{

    render(){
        return(
            <Image
                width='60'
                height='60'
                source={require('../img/persiana.png')}
            />
        )
    }
}
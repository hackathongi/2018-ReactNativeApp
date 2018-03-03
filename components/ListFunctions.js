import React from 'react'
import { Image, TouchableHighlight, View } from 'react-native'
import { withNavigation } from 'react-navigation';
import styled from 'styled-components'
import ItemInfo from './ItemInfo'

export class ListFunctions extends React.Component{

    render(){
        return(
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('LlistaFuncionsDispositiu')} >
                    <ItemInfo 
                        title={this.props.value.id}
                        subtitle={this.props.value.type}    
                    />
                </TouchableHighlight >
            </View>
        )
    }
}

export default withNavigation(ListFunctions)
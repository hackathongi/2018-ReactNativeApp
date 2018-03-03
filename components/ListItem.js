import React from 'react'
import { Image, TouchableHighlight, View } from 'react-native'
import { withNavigation } from 'react-navigation';
import styled from 'styled-components'
import ItemInfo from './ItemInfo'
import Icon from './Icon'

export class ListItem extends React.Component{

    render(){
        return(
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('LlistaFuncionsDispositiu', {
                    itemId: this.props.value.id,
                    type: this.props.value.type,
                    })} 
                >
                    <ItemInfo 
                        title={this.props.value.id}
                        subtitle={this.props.value.type}    
                    />
                </TouchableHighlight >
            </View>
        )
    }
}

export default withNavigation(ListItem)

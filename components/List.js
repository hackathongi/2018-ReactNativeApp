import React from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components'
import ListItem from './ListItem'

export default class List extends React.Component{

    render(){
        return(
            <View>
                <FlatList
                    data={{"id": 1},{"id": 2}, { "id": 31}}
                    //keyExtractor= {this._keyExtractor}
                    renderItem={({item}) => {
                        return(
                            <ListItem  />
                        )
                    }
                }
                />
          </View>
        )
    }

}
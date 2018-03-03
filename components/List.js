import React from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components'
import ListItem from './ListItem'

export default class List extends React.Component{
    state = {
        dispositius: {key:'aaa'}
    }

    componentWillMount(){
        this._getDispositius()
    }

    _keyExtractor = (item, index) => item.id;

    render(){
        return(
            <View>
                <FlatList
                    data={this.state.dispositius}
                    keyExtractor= {this._keyExtractor}
                    renderItem={({item}) => {
                        return(
                            <ListItem value={item}/>
                        )
                    }
                }
                />
          </View>
        )
    }

    _getDispositius = () => {
        this.setState({
            dispositius:[{
                "id": 1,
                "title": "persiana",
                "subtitle": "01:02:03:04"
            },
            {
                "id": 2,
                "title": "disparador",
                "subtitle": "01:02:03:05"
            },
            {
                "id": 3,
                "title": "sorpresa",
                "subtitle": "01:02:03:06"
            }]
        });
        
      }

}
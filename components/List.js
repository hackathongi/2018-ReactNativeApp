import React from 'react'
import { FlatList,TouchableHighlight, View } from 'react-native'
import styled from 'styled-components'
import ListItem from './ListItem'
import ListFuncions from './ListFunctions'

export default class List extends React.Component{
    state = {
        dispositius: {key:'aaa'}
    }

    componentWillMount(){
        if(this.props.type=='dispositius') this._getDispositiusAPI()
        else this._getDispositius()
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

    _getDispositiusAPI = () =>{
    try{
        (async () => {
            const res = await fetch(`http://84.89.60.4/v2/entities`)
            const responseJson = await res.json()
            
            dispositius_json = JSON.parse(JSON.stringify(responseJson))
            this.setState({
                dispositius:dispositius_json
            });
        })()
        }
        catch(error){
            console.log('Error' . error) 
        }
    }

}
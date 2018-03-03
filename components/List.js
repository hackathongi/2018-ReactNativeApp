import React from 'react'
import { FlatList,TouchableHighlight, View } from 'react-native'
import styled from 'styled-components'

import ListItem from './ListItem'
import ListFuncions from './ListFunctions'

export default class List extends React.Component{
    static Wrapper = styled.View`
        height: 100%;

        background-color: white;
    `
    
    static Items = FlatList

    static ItemWrapper = styled.View`
        position: relative;
    `

    static Line = styled.View`
        position: absolute;

        bottom: 0;
        right: 16px;
        left: 16px;

        height: 1px;

        background-color: #EBEBEB;
    `

    static Item = ListItem

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
            <List.Wrapper>
                <List.Items
                    data={this.state.dispositius}
                    keyExtractor= {this._keyExtractor}
                    renderItem={({item}) => {
                        return(
                            <List.ItemWrapper>
                                <List.Item value={item}/>
                                <List.Line />
                            </List.ItemWrapper>                            
                        )
                    }
                }
                />
            </List.Wrapper>
        )
    }

    _getDispositius = () => {
        this.setState({
            dispositius:[{
                "id": 1,
                "title": "Persianes",
                "subtitle": "80:93:A3:27:34"
            },
            {
                "id": 2,
                "title": "disparador",
                "subtitle": "80:93:A3:27:34"
            },
            {
                "id": 3,
                "title": "sorpresa",
                "subtitle": "80:93:A3:27:34"
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
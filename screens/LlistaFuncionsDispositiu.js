import React from 'react';
import { Text, View } from 'react-native'
import styled from 'styled-components';


import capitalize from 'capitalize'
import { parse } from 'url';

import List from '../components/List'

import ItemAction from '../components/ItemAction'

export default class LlistaFuncionsDispositius extends React.Component{
    constructor (props) {
        super(props)

        this.state = {
            actions: []
        }
    }
    componentWillMount(){
        this._getActions()
    }
    render(){
        return(
            <View>
                <List
                    data={actions}
                    keyExtractor={action => action.id}
                    renderItem={(action) => (
                        <ItemAction {...action}/>
                    )}
                />
            </View>
        )
    }

    async _getActions(){
        try{
            const res = await fetch(`http://192.192.193.155:5000/hub/`)
            const responseJson = await res.json()
            
            const actions = responseJson.map((actionData[this.props.navigation.state.id]['actions'], index) => {
                return {
                    id: index,
                    label: capitalize(actionData.id),
                    actionName: Object.keys(actionData[props.id]["actions"].id),
                    onAction: () =>{
                        try{
                            const res = await fetch(`http://192.192.193.155:5000/` + props.id + `/` + actionData.id)            
                        }
                        catch(error){
                            console.log('Error' . error) 
                        }
                    }
                }
            })

            this.setState({
                actions
            })
        }
        catch(error){
            console.log('Error' . error) 
        }

    }
}

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
        const {actions} = this.state
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

            const { actions: cunrrentActions } = responseJson[this.props.navigation.state.params.id]

            let actions = []
            let index = 0

            for (let action in cunrrentActions) {
                actions.push({
                    id: index,
                    label: capitalize(action),
                    actionName: 'Envia',
                    onAction: async () =>{
                        try{
                            const res = await fetch(`http://192.192.193.155:5000/fiware/${this.props.navigation.state.params.id}/${action}`)            
                        }
                        catch(error){
                            console.log('Error' . error) 
                        }
                    }
                })

                index++
            }
            console.log(actions)
            this.setState({
                actions
            })

        }
        catch(error){
            console.log('Error' . error) 
        }

    }
}

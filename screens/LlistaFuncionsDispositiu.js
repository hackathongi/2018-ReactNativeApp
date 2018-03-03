import React from 'react';
import { Text, View } from 'react-native'
import styled from 'styled-components';

import capitalize from 'capitalize'
import { parse } from 'url';

import List from '../components/List'
import ListItem from '../components/ListItem'

export default class LlistaFuncionsDispositius extends React.Component{
    static Wrapper = styled.View`
        height: 100%;
    `

    constructor (props) {
        super(props)

        this.state = {
            actions: []
        }
    }

    componentWillMount () {
        this._getDispositiuAPI()
    }

    render(){
        const { actions } = this.state
        return(
            <LlistaFuncionsDispositius.Wrapper>
                <List
                    data={actions}
                    keyExtractor={action => action.id}
                    renderItem={(action) => (
                        <ListItem {...action}/>
                    )}
                />
            </LlistaFuncionsDispositius.Wrapper>
        )
    }

    async _getDispositiuAPI () {
        try{
            const res = await fetch(`http://84.89.60.4/v2/entities`)
            const responseJson = await res.json()
            
            const actions = responseJson.map((actionData, index) => {
                return {
                    id: index,
                    title: capitalize(actionData.id),
                    subtitle: actionData.description.value
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
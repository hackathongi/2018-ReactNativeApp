import React from 'react';
import { Text, View } from 'react-native'
import styled from 'styled-components';

import capitalize from 'capitalize'
import { parse } from 'url';

import List from '../components/List'
import ListItem from '../components/ListItem'

export default class LlistaDispositius extends React.Component{
    static Wrapper = styled.View`
        height: 100%;
    `

    constructor (props) {
        super(props)

        this.state = {
            devices: []
        }
    }

    componentWillMount () {
        this._getDispositiusAPI()
    }

    render(){
        const { devices } = this.state
        return(
            <LlistaDispositius.Wrapper>
                <List
                    data={devices}
                    keyExtractor={device => device.id}
                    renderItem={(device) => (
                        <ListItem {...device}/>
                    )}
                />
            </LlistaDispositius.Wrapper>
        )
    }

    async _getDispositiusAPI () {
        try{
            const res = await fetch(`http://84.89.60.4/v2/entities`)
            const responseJson = await res.json()
            
            const devices = responseJson.map((deviceData, index) => {
                return {
                    id: index,
                    title: capitalize(deviceData.id),
                    subtitle: deviceData.description.value
                }
            })

            this.setState({
                devices
            })
        }
        catch(error){
            console.log('Error' . error) 
        }
    }
}
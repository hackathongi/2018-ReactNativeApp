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
            devices: [],
            sensorsData: null
        }
    }

    componentWillMount () {
        this._getDispositiusAPI()
    }

    render(){
        const { devices, sensorsData } = this.state
        return(
            <LlistaDispositius.Wrapper>
                <View>
                    <View>
                        <Text>Llum:</Text>
                        <Text>{sensorsData.fotoresistencia.value}</Text>
                    </View>
                    <View>
                        <Text>Temperatura:</Text>
                        <Text>{sensorsData.temperatura.value}</Text>
                    </View>
                    <View>
                        <Text>Distància:</Text>
                        <Text>{sensorsData.distancia.value}</Text>
                    </View>
                    <View>
                        <Text>Sò:</Text>
                        <Text>{sensorsData.so.value}</Text>
                    </View>
                    <View>
                        <Text>Estat porta:</Text>
                        <Text>{sensorsData.estatPorta.value}</Text>
                    </View>
                </View>
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

            const sesorsData = null
            
            const devices = responseJson.map((deviceData, index) => {
                if (deviceData.id === 'sensors') {
                    sesorsData = deviceData
                }

                return {
                    id: index,
                    title: capitalize(deviceData.id),
                    subtitle: deviceData.description.value
                }
            })

            this.setState({
                devices,
                sensorsData
            })
        }
        catch(error){
            console.log('Error' . error) 
        }
    }
}
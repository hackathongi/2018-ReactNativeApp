import React from 'react';
import { Text, View } from 'react-native'
import styled from 'styled-components';

import capitalize from 'capitalize'
import { parse } from 'url';

import List from '../components/List'
import ListItem from '../components/ListItem'

const SensorWrapper = styled.View`
    display: flex;
    flex-direction: column;
`

const SensorData = styled.View`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`

export default class LlistaDispositius extends React.Component{
    static Wrapper = styled.View`
        height: 100%;
    `

    constructor (props) {
        super(props)

        this.state = {
            devices: [],
            sensorsData: {
                "distancia": {
                    "type": "Integer",
                    "value": 124,
                    "metadata": {}
                    },
                    "estatPorta": {
                    "type": "Integer",
                    "value": 1,
                    "metadata": {}
                    },
                    "fotoresistencia": {
                    "type": "Float",
                    "value": 149,
                    "metadata": {}
                    },
                    "so": {
                    "type": "Integer",
                    "value": 0,
                    "metadata": {}
                    },
                    "temperatura": {
                    "type": "Float",
                    "value": 35,
                    "metadata": {}
                    }
            }
        }
    }

    componentWillMount () {
        this._getDispositiusAPI()
    }

    render(){
        const { devices, sensorsData } = this.state
        return(
            <LlistaDispositius.Wrapper>
                <SensorWrapper>
                    <SensorData>
                        <Text>Llum:</Text>
                        <Text>{sensorsData.fotoresistencia.value}</Text>
                    </SensorData>
                    <SensorData>
                        <Text>Temperatura:</Text>
                        <Text>{sensorsData.temperatura.value}</Text>
                    </SensorData>
                    <SensorData>
                        <Text>Distància:</Text>
                        <Text>{sensorsData.distancia.value}</Text>
                    </SensorData>
                    <SensorData>
                        <Text>Sò:</Text>
                        <Text>{sensorsData.so.value}</Text>
                    </SensorData>
                    <SensorData>
                        <Text>Estat porta:</Text>
                        <Text>{sensorsData.estatPorta.value}</Text>
                    </SensorData>
                </SensorWrapper>
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
                    sensorsData = deviceData
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
import React from 'react';
import { Text, View } from 'react-native'
import styled from 'styled-components';

import List from '../components/List'

import ItemAction from '../components/ItemAction'

export default class LlistaFuncionsDispositius extends React.Component{
    render(){
        return(
            <View>
                <List
                    data={[
                        {
                            id: 0,
                            label: 'Llum',
                            actionName: 'Envia',
                            onAction: () => {
                                console.log('Iluminant!')
                            }
                        },
                        {
                            id: 1,
                            label: 'Foc',
                            actionName: 'Envia',
                            onAction: () => {
                                console.log('Cremant!')
                            }
                        },
                        {
                            id: 2,
                            label: 'Destrucció',
                            actionName: 'Envia',
                            onAction: () => {
                                console.log('Destruint!')
                            }
                        }
                    ]}
                    keyExtractor={device => device.id}
                    renderItem={(device) => (
                        <ItemAction {...device}/>
                    )}
                />
            </View>
        )
    }
}

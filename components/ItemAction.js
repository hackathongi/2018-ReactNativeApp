import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import Button from './Button'
import Label from './Label'

class ItemAction extends React.Component {
    static Wrapper = styled.View`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 8px 16px;

        width: 100%;
    `

    static Button = Button

    static Label = Label

    render () {
        const { label, actionName, onAction } = this.props
        return (
            <ItemAction.Wrapper>
                <ItemAction.Label>{label}</ItemAction.Label>
                <ItemAction.Button 
                    text={actionName}
                    onPress={onAction}
                />
            </ItemAction.Wrapper>
        )
    }
}

export default ItemAction
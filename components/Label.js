import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const Label = styled.Text`
    font-family: Helvetica;
    font-size: 18;
    font-weight: 400;

    color: #000;

    ${({ secondary }) => secondary && `
        color: #B0B0B0;
        font-size: 14;
        font-weight: 300;
    `}
`

export default Label
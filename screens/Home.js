import React from 'react';
import { Text, View } from 'react-native'
import styled from 'styled-components';

const StyledView = styled.View`
  position: absolute;
  height:0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
export default class Home extends React.Component{

    render(){
        return(
            <StyledView>
                <Text>Home</Text>
                <Text>Home</Text>
            </StyledView>
        )
    }
}
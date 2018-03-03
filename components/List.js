import React from 'react'
import { FlatList, View } from 'react-native'

import styled from 'styled-components'

class List extends React.Component{
    static Wrapper = styled.View`
        height: 100%;

        background-color: white;
    `
    
    static Items = FlatList

    static ItemWrapper = styled.View`
        position: relative;
    `

    static Line = styled.View`
        position: absolute;

        bottom: 0;
        right: 16px;
        left: 16px;

        height: 1px;

        background-color: #EBEBEB;
    `

    render(){
        const { data, keyExtractor,  renderItem } = this.props
        return(
            <List.Wrapper>
                <List.Items
                    data={data}
                    keyExtractor= {keyExtractor}
                    renderItem={({ item }) => {
                        return(
                            <List.ItemWrapper>
                                {renderItem(item)}
                                <List.Line />
                            </List.ItemWrapper>                
                        )
                    }
                }
                />
            </List.Wrapper>
        )
    }
}

export default List

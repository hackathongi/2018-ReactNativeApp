import React from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components'

export default class List extends React.Components{

    render(){
        return(
            <View>
                <FlatList
                data={this.state.events}
                //keyExtractor= {this._keyExtractor}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('EventScan')}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.date}</Text>
                        </TouchableOpacity >
                    )
                    }
                }
                />
          </View>
        )
    }

}
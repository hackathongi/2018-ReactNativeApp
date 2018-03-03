import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styled from 'styled-components'

class Button extends React.Component {
    static Wrapper = styled.TouchableHighlight`
        display: flex;
        align-items: center;
        padding: 8px 16px;
        background-color: ${({ isPressed }) => isPressed ? 'black' : '#007AFF'};
        border-radius: 8px;
    `

    static Text = styled.Text`
        font-size: 14px;
        font-weight: 300;
        color: #fff;
    `

    constructor (props) {
        super (props)
        this.state = {
            isPressed: false
        }
    }

    handleButtonPressIn () {
        this.setState({
            isPressed: true
        })

        this.props.onPressIn instanceof Function &&
            this.props.onPressIn()
    }

    handleButtonPress () {
        this.props.onPress instanceof Function &&
            this.props.onPress()
    }

    handleButtonPressOut () {
        this.setState({
            isPressed: false
        })

        this.props.onPressOut instanceof Function &&
            this.props.onPressOut()
    }

    render () {
        const { text } = this.props
        const { isPressed } = this.state
        return (
            <Button.Wrapper
                isPressed={isPressed}
                onPressIn={() => this.handleButtonPressIn()}
                onPress={() => this.handleButtonPress()}                
                onPressOut={() => this.handleButtonPressOut()}
            >
                <Button.Text>{text}</Button.Text>
            </Button.Wrapper>
        )
    }
}

export default Button
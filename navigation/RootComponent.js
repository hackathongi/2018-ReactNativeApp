import React from 'react';
import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Control  from '../screens/Control'
import Statistics  from '../screens/Statistics'

export const Index = StackNavigator(
    {
      Home: {
        screen: Home,
      },
      Control:{
        screen: Control,
      },
      Statistics:{
        screen: Statistics
      },
    },
    {
      initialRouteName: 'Control'
    }
);
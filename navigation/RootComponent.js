import React from 'react';
import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import LlistaDispositius  from '../screens/LlistaDispositius'
import Dispositiu  from '../screens/Dispositiu'

export const Index = StackNavigator(
    {
      Home: {
        screen: Home,
      },
      LlistaDispositius:{
        screen: LlistaDispositius,
      },
      Dispositiu:{
        screen: Dispositiu,
      },
    },
    {
      initialRouteName: 'LlistaDispositius'
    }
);
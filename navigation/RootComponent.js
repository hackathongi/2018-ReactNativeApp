import React from 'react';
import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import LlistaDispositius  from '../screens/LlistaDispositius'
import LlistaFuncionsDispositiu  from '../screens/LlistaFuncionsDispositiu'

export const Index = StackNavigator(
    {
      Home: {
        screen: Home,
      },
      LlistaDispositius:{
        screen: LlistaDispositius,
      },
      LlistaFuncionsDispositiu:{
        screen: LlistaFuncionsDispositiu,
      },
    },
    {
      initialRouteName: 'LlistaDispositius'
    }
);
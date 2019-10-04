import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from "react-native";

import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const AddItems = createSwitchNavigator({
    Home: { screen: Tab1 },
    Settings: { screen: Tab2 },
});

const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
    }
});

export default createAppContainer(AddItems);
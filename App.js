/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from './components/NavigationService';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';

const TopLevelNavigator = createSwitchNavigator({
  Tab1: { screen: Tab1 },
  Tab2: { screen: Tab2 },
  Tab3: { screen: Tab3 },
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'rgb(0,0,0)',
  },
  tabbedView: {
    borderRadius: 3
  },
  tabbedView_header: {
    padding: 10,
    flexDirection: 'row'
  },
  textBack: {
    paddingLeft: 10,
    fontSize: 15
  },
  textAdd: {
    fontSize: 15,
    color: '#000',
    paddingLeft: 80
  },
  tabbedSection: {
    marginTop: 20,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  tabbedViewButton: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  greyColor: {
    color: '#999'
  },
  active: {
    color: '#000',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  tabbedViewBox: {
    padding: 20
  }
});

const buttonPress = (btn) => {
  // this.props.navigation.navigate(btn);
  NavigationService.navigate(btn, { userName: 'Lucy' });
}

const AppContainer = createAppContainer(TopLevelNavigator);

export default class App extends React.Component {
  // ...

  render() {
    return (

      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <View style={styles.tabbedView}>
              <View style={styles.tabbedView_header}>
                <Text style={styles.textBack}> &#60; BACK</Text>
                <Text style={styles.textAdd}> Add New Item </Text>
              </View>
              <View style={styles.tabbedSection}>
                <View style={styles.tabbedViewButton}>
                  <Text onPress={() => buttonPress('Tab1')} >DETAILS*</Text>
                </View>
                <View style={styles.tabbedViewButton}>
                  <Text onPress={() => {
                    buttonPress('Tab2')
                  }} style={styles.greyColor}>MORE DETAILS</Text>
                </View>
                <View style={styles.tabbedViewButton}>
                  <Text onPress={() => {
                    buttonPress('Tab3')
                  }} style={styles.greyColor}>BARCODE</Text>
                </View>
              </View>
              <View style={styles.tabbedViewBox}>
                <AppContainer
                  ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                  }}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>



    );
  }
}
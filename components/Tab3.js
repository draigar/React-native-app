import React, { Component } from "react";

import Textarea from 'react-native-textarea';

import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from "react-native";

export default class Tab3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.NotBox}>
                    <Text>Enter Barcode digits</Text>
                </View>
                <Text style={{padding: 90,textAlign: 'center',fontSize: 30}}>Or</Text>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <Image source={require('../public/img/Group2.png')} />
                    <Button title="SCAN BARCODE" color="pink" style={{padding: 20}}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
    },
    container: {
        padding: 10,
    },
    NotBox: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        padding: 20,
    }
    
});
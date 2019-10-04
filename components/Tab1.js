import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Picker
} from "react-native";

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

export default class Tab1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            state: 'Java'
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <TextInput style={styles.inputBox} />
                <TextInput style={styles.inputBox} />
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({ language: lang })}>
                    <Picker.Item label="Enter Price" value="" />
                    <Picker.Item label="9000" value="9000" />
                    <Picker.Item label="2000" value="2000" />
                    <Picker.Item label="3000" value="3000" />
                </Picker>
                <View style={styles.seperator}></View>
                <Text style={{ color: '#999', paddingLeft: 10 }}>UNIT PRICE</Text>
                <View style={{flexDirection: 'row',marginTop: 25,}}>
                    <View style={styles.inputGroup}>
                        <TextInput style={styles.inputBox2} placeholder="Unit Price" />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput style={styles.inputBox2} placeholder="Unit Quantity" />
                    </View>
                </View>
                <View style={{flexDirection: 'row',marginTop: 25,}}>
                    <View style={{flexGrow: 8}}>
                        <TextInput style={styles.inputBox2} placeholder="Unit Limit" />
                    </View>
                </View>
                <View style={{padding: 7}}></View>
                <Text style={{ color: '#999', paddingLeft: 10 }}>PARK PRICE </Text>
                <View style={{flexDirection: 'row',marginTop: 25,}}>
                    <View style={styles.inputGroup}>
                        <TextInput style={styles.inputBox2} placeholder="Park Price" />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput style={styles.inputBox2} placeholder="Park Quantity" />
                    </View>
                </View>
                <View style={{flexDirection: 'row',marginTop: 25,}}>
                    <View style={styles.inputGroup}>
                        <TextInput style={styles.inputBox2} placeholder="Units Per Park" />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput style={styles.inputBox2} placeholder="Park Limit" />
                    </View>
                </View>
                <View style={styles.button}>
                    <Button title="Continue" color="#000" ></Button>
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
        padding: 10
    },
    inputBox: {
        backgroundColor: '#ddd',
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15
    },
    inputBox2: {
        backgroundColor: '#ddd',
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5
    },
    seperator: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    inputGroup: {
        flexGrow: 8,
        marginLeft: 5,
        marginRight: 5
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10
    }
});
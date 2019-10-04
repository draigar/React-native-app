import React, { Component } from "react";

import Textarea from 'react-native-textarea';

import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Picker,
    Switch
} from "react-native";

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

export default class Tab2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            state: 'Java',
            switchValue: false
        },
            this.toggleSwitch = (value) => {
                //onValueChange of the switch this function will be called
                this.setState({ switchValue: value })
                //state changes according to switch
                //which will result in re-render the text
            }
    }

    render() {
        return (
            <View style={styles.container} >
                <TextInput style={styles.inputBox} placeholder="Product Discount" />
                <TextInput style={styles.inputBox} placeholder="Product Tax" />
                <TextInput style={styles.inputBox} placeholder="Product Weight" />
                <Textarea
                    containerStyle={styles.textareaContainer}
                    style={styles.textarea}
                    onChangeText={this.onChange}
                    defaultValue={this.state.text}
                    maxLength={120}
                    placeholder={'Product Description'}
                    underlineColorAndroid={'transparent'}
                />
                <View style={{ padding: 7 }}></View>
                <View style={{ backgroundColor: '#eee', paddingTop: 6, paddingBottom: 6, paddingLeft: 5, paddingRight: 5, flexDirection: 'row' }}>
                    <Text>ADD COLORS</Text>
                    <Switch
                        style={{ flex: 1 }}
                        onValueChange={this.toggleSwitch}
                        value={this.state.switchValue} />
                </View>
                {
                    this.state.switchValue &&
                    <View style={styles.outPost}>
                        <TextInput style={styles.inputBox} placeholder="" />
                        <TextInput style={styles.inputBox} placeholder="" />
                        <TextInput style={styles.inputBox} placeholder="" />
                        <View style={styles.button}>
                            <Button title="Done" color="#bbb" ></Button>
                        </View>
                    </View>
                }
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
    },
    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#ddd',
        borderRadius: 4,
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#444',
    },
    outPost: {
        shadowColor: 'black',
        shadowOpacity: 4,
        marginTop: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        borderRadius: 4
    }
});
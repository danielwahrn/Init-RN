import React, {Component} from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Settings extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return{
            title: 'Settings',
            headerStyle: {
                height: 30
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: 'black',
                fontSize: 18,
            }
        }
    };

    constructor() {
        super();

        this.state={
           
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1       
    },
}
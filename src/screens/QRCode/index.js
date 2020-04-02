import React, {Component} from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class QRCode extends React.Component {
    constructor() {
        super();

        this.state={
           
        }
    }

    componentDidMount() {
        console.log('qrcode')
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
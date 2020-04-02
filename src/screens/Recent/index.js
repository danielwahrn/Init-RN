import React, {Component} from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Recent extends React.Component {
    constructor() {
        super();

        this.state={
           
        }
    }

    componentDidMount() {
        console.log('herer')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: 'black'}}>Hello</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
}
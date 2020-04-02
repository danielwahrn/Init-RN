import React, {Component} from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../components/Icons/colors'

export default class Receipts extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
          title: ' ',
          headerStyle:{
            elevation: 0
          },
          headerRight: () =>
            <TouchableOpacity
              style={styles.edittouch}
            //   onPress={()=>{navigation.goBack()}}
            >
                <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          
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
        flex: 1,
        backgroundColor: 'white'
    },
    edittouch: {
        marginLeft: 10, 
        paddingVertical: 3, 
        paddingHorizontal: 10, 
        borderRadius: 30,
    },
    edit: {
        color: colors.BLUE
    }
}
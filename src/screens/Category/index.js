import React, {Component} from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import * as Icons from '../../components/Icons/Icons';
import {colors} from '../../components/Icons/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Category extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return{
          title: ' ',
          headerStyle: {
              elevation: 0,
              height: 30
          },
          headerLeft: () =>
            <TouchableOpacity
              style={styles.edittouch}
              onPress={()=>{navigation.goBack()}}
            >
                <View style={styles.leftview}>
                <Icons.LeftBack color={colors.BLUE}/>
                <Text style={styles.edit}>Categories</Text>
                </View>
            </TouchableOpacity>
          ,
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
    },
    leftview: {
        flexDirection: 'row'
    }
}
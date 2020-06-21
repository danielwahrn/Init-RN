import React from 'react';

import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {StyleSheet, View, Text} from 'react-native';
import {RecentPage, ReceiptPage, QRCodePage, CategoryPage, SettingsPage} from './screens/index';
import HamburgerMenu from './components/HamburgerMenu'
// import TabBarIcon from './components/Icons/ImageIcons';
import * as Icons from './components/Icons/Icons';

import {colors} from './components/Icons/colors'

const RecentStackNavigator = createStackNavigator({
    Recent: {
        screen:RecentPage
    }
}, {
    initialRouteName: 'Recent',
    navigationOptions: ({focused, navigation, screenProps}) => ({
        tabBarLabel: '',
        tabBarIcon: ({focused, tintColor}) => (
            <Icons.ClockCircle color={tintColor}/>
        ),
      }),
    
    defaultNavigationOptions: {
        headerStyle: {
            elevation: 0
        },
        headerTitleStyle: {
            color: 'black',
            fontSize: 18,
        }
    }
})

const ReceipsStackNavigator = createStackNavigator({
    Receipt: {
        screen: ReceiptPage
    }
}, {
    navigationOptions: ({focused, navigation, screenProps}) => ({
        tabBarLabel: '',
        tabBarIcon: ({focused, tintColor}) => (
            <Icons.Bars color={tintColor}/>
        ),
      }),
    
})

const QRcodeStackNavigator = createStackNavigator({
    QRCode: {
        screen: QRCodePage
    }
}, {
    navigationOptions: ({focused, navigation, screenProps}) => ({
        tabBarLabel: ' ',
        tabBarIcon: ({focused, tintColor}) => (
            <View style={styles.circle}>
                <Icons.QRCode style={styles.qrcode}/>
            </View>
        ),
      }),
})

const CategoryStackNavigator = createStackNavigator({
    Category: {
        screen:CategoryPage
    }
}, {
    navigationOptions: ({focused, navigation, screenProps}) => ({
        tabBarLabel: '',
        tabBarIcon: ({focused, tintColor}) => (
            <Icons.Appstore color={tintColor}/>
        ),
      }),
})

const SettingsDrawerNavigator = createDrawerNavigator({
    Settings: {
        screen: SettingsPage
    }
},{
    drawerWidth: 160,
    contentComponent: HamburgerMenu
})

const TabNavigator = createBottomTabNavigator({
    Recent: {
        screen: RecentStackNavigator,
    },
    Receipts: {
        screen: ReceipsStackNavigator
    },
    QRCode: {
        screen: QRcodeStackNavigator
    },
    Category: {
        screen: CategoryStackNavigator
    },
    Settings: {
        screen: SettingsDrawerNavigator,
        navigationOptions: ({focused, navigation, screenProps}) => ({
            tabBarLabel: '',
            tabBarIcon: ({focused, tintColor}) => (
                <Icons.Settings color={tintColor}/>
            ),
        }),
    }
},{
    initialRouteName: 'Recent',
    tabBarOptions: {
        activeTintColor: colors.BLUE,
        inactiveTintColor: '#585858',
        style: {
          padding: 2,
          backgroundColor: 'transparent'
        },
      },
    },
)

export default createAppContainer(
    createSwitchNavigator({
        TabNavigator: TabNavigator  
    })
)


const styles = StyleSheet.create({
    circle: {
        backgroundColor: colors.BLUE,
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
})
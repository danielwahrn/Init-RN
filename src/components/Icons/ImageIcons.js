import React from 'react';

import { View, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const recent_icon_img = require('./assets/images/icon/recent_icon.png');
const receipts_icon_img = require('./assets/images/icon/receipts_icon.png');
const qrcode_icon_img = require('./assets/images/icon/qrcode_icon.png');
const category_icon_img = require('./assets/images/icon/category_icon.png');
const settings_icon_img = require('./assets/images/icon/settings_icon.png');


const recent_icon_active_img = require('./assets/images/icon/recent_icon_active.png');
const receipts_icon_active_img = require('./assets/images/icon/receipts_icon_active.png');
const qrcode_icon_active_img = require('./assets/images/icon/qrcode_icon_active.png');
const category_icon_active_img = require('./assets/images/icon/category_icon_active.png');
const settings_icon_active_img = require('./assets/images/icon/settings_icon_active.png');

const TAB_ICON_SIZE = 20;

export default class TabBarIcon extends React.Component {
  render() {
    var img = '';

    switch(this.props.name) {
      case 'recent':
        img = this.props.focused ? recent_icon_active_img : recent_icon_img;
        break;
      case 'receipts':
        img = this.props.focused ? receipts_icon_active_img : receipts_icon_img;
        break;
      case 'qrcode':
        img = this.props.focused ? qrcode_icon_active_img : qrcode_icon_img;
        break;
      case 'category':
        img = this.props.focused ? category_icon_active_img : category_icon_img;
        break;
      case 'settings':
        img = this.props.focused ? settings_icon_active_img : settings_icon_img;
        break;
    }
    
    return (
      <View>
        <Image source={img} style={{width: TAB_ICON_SIZE, height: TAB_ICON_SIZE}}/>
      </View>
      
      // <Icon
      //   name={this.props.name}
      //   size={TAB_ICON_SIZE}
      //   style={{ marginBottom: -3 }}
      //   color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      // />
    );
  }
}
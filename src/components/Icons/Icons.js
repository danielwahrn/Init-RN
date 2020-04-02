import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from './colors';

export function QRCode(props) {
	const { color } = props
	return <AntDesign name="qrcode" size={25} color={color ? color : colors.WHITE} />;
}
export function Bars(props) {
	const { color } = props
	return <AntDesign name="bars" size={25} color={color ? color : colors.DARK} />;
}
export function ClockCircle(props) {
	const { color } = props
	return <AntDesign name="clockcircle" size={25} color={color ? color : colors.DARK} />;
}
export function Appstore(props) {
	const { color } = props
	return <AntDesign name="appstore1" size={25} color={color ? color : colors.DARK} />;
}

export function Home(props) {
	const { color } = props
	return <MaterialIcons name="home" size={25} color={color ? color : colors.WHITE} />;
}
export function Info(props) {
	const { color } = props
	return <MaterialIcons name="info" size={35} color={color ? color : colors.WHITE} />;
}

export function Settings(props) {
	const { color } = props
	return <MaterialIcons name="settings" size={25} color={color ? color : colors.DARK} />;
}
export function Download(props) {
	const { color } = props
	return <MaterialIcons name="file-download" size={25} color={color ? color : colors.WHITE} />;
}
export function More(props) {
	const { color } = props
	return <MaterialIcons name="view-headline" size={25} color={color ? color : colors.WHITE} />;
}
export function Favorite(props) {
	const { color } = props
	return <MaterialIcons name="favorite" size={35} color={color ? color : 'white'} />;
}
export function Mic() {
	return <MaterialIcons name="mic" size={27} style={{ marginHorizontal: 10 }} color={'#B2B2B2'}/>;
}
export function Wifi() {
	return <MaterialIcons name="wifi" size={27} style={{ marginHorizontal: 10 }} color={'#B2B2B2'}/>;
}
export function RoundADD() {
	return (
		<MaterialIcons name="add-circle-outline" size={45} color={'#B2B2B2'} style={{ marginRight: 4}}/>
	);
}


export function Search(props) {
	const { small, color } = props;
	return <Feather name="search" size={25} color={small ? '#b2b2b2' : (color ? color: colors.WHITE)} style={{ marginHorizontal: 10}}/>;
}
export function Coming(props) {
	const { color } = props
	return <Feather name="youtube" size={25} color={color ? color : colors.WHITE} />;
}
export function File() {
	return <Feather name="file-text" size={27} style={{ marginHorizontal: 10 }} color={'#B2B2B2'}/>;
}
export function Out() {
	return <Feather name="log-out" size={27} style={{ flex: 1, textAlign: 'right' }} color={'#B2B2B2'}/>;
}
export function Back(props) {
	const {color} = props;
	return <Feather name="arrow-left" size={27} style={{ flex: 1}} color={color ? color : colors.WHITE}/>;
}


export function Heart() {
	return <MaterialCommunityIcons name="heart" size={45} color={'#b71c1c'} style={{ marginRight: 6 }} />;
}
export function Alarm() {
	return <MaterialCommunityIcons name="bell-ring" size={27} style={{ marginHorizontal: 10 }} color={'#B2B2B2'}/>;
}

export function RoundHeart() {
	return (
		<View style={styles.roundHeart}>
			<MaterialCommunityIcons name="heart" size={32} color={'#b71c1c'} />
		</View>
	);
}
export function NearMe() {
	return <MaterialCommunityIcons name="near-me" size={35} style={{ marginHorizontal: 10 }} color={'white'}/>;
}
export function BookmarkRemove() {
	return <MaterialCommunityIcons name="bookmark-remove" size={35} style={{ marginHorizontal: 10 }} color={'white'}/>;
}


export function Thumb() {
	return <FontAwesome name="thumbs-o-up" size={45} style={{ marginRight: 6 }} color={'#B2B2B2'}/>;
}
export function SwitchOn() {
	return <FontAwesome name="toggle-on" size={35} style={{ flex: 1, textAlign: 'right' }} color={'#B2B2B2'}/>;
}
export function SwitchOff() {
	return <FontAwesome name="toggle-off" size={35} style={{ flex: 1, textAlign: 'right' }} color={'#B2B2B2'}/>;
}



export function Emoji() {
	return <Entypo name="emoji-happy" size={45} color={colors.WHITE} style={{ marginRight: 6 }} />;
}
export function Share() {
	return <Entypo name="share" size={35} style={{ flex: 1, textAlign: 'right' }} color={'white'}/>;
}
export function LeftBack(props) {
	const {color} = props
	return <Entypo name="chevron-left" size={24} color={color ? color : colors.DARK} />
}

const styles = StyleSheet.create({
	roundHeart: {
		position: 'absolute',
		top: 195,
		right: 12,
		backgroundColor: '#fff',
		borderRadius: 20,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../../styles/colors';
import { hp } from '../responsive';

type IStyle = {
	backgroundColor?: string;
	fontSize?: number;
	color?: string;
	fontFamily?: string;
	fontWeight?: string;
	margin?: number;
	marginTop?: number;
	marginBottom?: number;
	marginLeft?: number;
	marginRight?: number;
	marginHorizontal?: number;
	marginVertical?: number;
	padding?: number;
	paddingTop?: number;
	paddingBottom?: number;
	paddingLeft?: number;
	paddingRight?: number;
	paddingHorizontal?: number;
	paddingVertical?: number;
	borderRadius?: number;
	borderWidth?: number;
	borderColor?: string;
	width?: number;
	height?: number;
};

type IPrimaryButton = {
	title?: string;
	onPress?: Function;
	loading?: boolean;
	style?: IStyle;
	backgroundColor?: string
};


export const PrimaryButton = (props: IPrimaryButton): JSX.Element => {
	const { title, onPress, loading, backgroundColor } = props;

	return (
		<TouchableOpacity
			onPress={() => {
				!!onPress ? onPress() : {};
			}}
			activeOpacity={0.7}
			style={[styles.container, { ...props.style, backgroundColor: backgroundColor, }]}>
			<Text style={styles.title}>{title}</Text>
			{!!loading && <ActivityIndicator
				color={Colors.white} size="small" style={styles.loading} />}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: hp("6.5%"),
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		borderRadius: hp('1.2%'),
	},
	title: {
		fontSize: hp("1.8%"),
		color: Colors.white,
	},
	loading: {
		marginLeft: hp('1%'),
	},
});

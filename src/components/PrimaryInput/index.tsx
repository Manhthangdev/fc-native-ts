import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput, KeyboardTypeOptions } from 'react-native';
import { hp } from '../responsive';
import { Icon } from '../Icon';
import { Colors } from '../../styles/colors';

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

type PrimaryInputProps = {
	title?: string;
	value?: string;
	onChange?: (text: string) => void;
	placeholder?: string;
	required?: boolean;
	type?: KeyboardTypeOptions | undefined;
	password?: boolean;
	textCenter?: boolean;
	onEndEditing?: () => void;
	error?: string;
	style?: IStyle;
	stylesInput?: any;
	backgroundColor?: string,
}

export const PrimaryInput = (props: PrimaryInputProps) => {
	const {
		title,
		value,
		onChange,
		placeholder,
		required,
		type,
		password,
		textCenter,
		onEndEditing,
		error,
		backgroundColor
	} = props
	const [focusing, setFocusing] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);

	return (
		<View style={[styles.container, , { ...props.style }]}>
			{!!textCenter ? (
				<Text style={styles.titleCenter}>
					{title || ''}
					{!!required ? <Text style={styles.required}> *</Text> : ''}
				</Text>
			) : (
				<Text style={styles.title}>
					{title || ''}
					{!!required ? <Text style={styles.required}> *</Text> : ''}
				</Text>
			)}
			<View style={[styles.main, {
				borderWidth: focusing || !!error ? 1 : 0,
				borderColor: !!error ? Colors.red : backgroundColor,
				...props.stylesInput
			}]}>
				<TextInput
					autoCapitalize="none"
					value={value}
					onFocus={() => setFocusing(true)}
					onBlur={() => setFocusing(false)}
					onChangeText={onChange}
					placeholder={placeholder}
					placeholderTextColor={Colors.placeholder}
					onEndEditing={onEndEditing}
					style={[styles.input,]}
					keyboardType={!!type ? type : 'default'}
					secureTextEntry={!!password ? !show : false}
				/>
				{!!password && (
					<TouchableOpacity activeOpacity={0.5} onPress={() => setShow(!show)}>
						<Icon
							type="Ionicons" name={show ? 'eye' : 'eye-off'}
							size={hp("2%")}
							color={Colors.placeholder}
						/>
					</TouchableOpacity>
				)}
			</View>
			{!!error && <Text style={styles.textError}>{error}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	title: {
		marginBottom: hp("2%"),
		fontSize: hp("1.8%"),
		color: Colors.black,
	},
	titleCenter: {
		fontSize: hp("1.8%"),
		color: Colors.black,
		textAlign: 'center'
	},
	main: {
		backgroundColor: Colors.input,
		borderRadius: hp('1.2%'),
		width: '100%',
		height: hp("6.5%"),
		paddingHorizontal: hp('1.8%'),
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		margin: 0,
		padding: 0,
		flex: 1,
		width: '100%',
		fontSize: hp("1.8%"),
		color: Colors.black,
	},
	required: {
		color: Colors.red,
	},
	textError: {
		color: Colors.red,
		fontSize: hp("1.6%"),
		textAlign: 'left',
		marginTop: 5,
	}
});

import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TextInput, Alert,Pressable} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'; 
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useState } from 'react';
const RegisterScreen = ({navigation}) => {

    const db = useSQLiteContext();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //function to handle registration logic
    const handleRegister = async() => {
        if  (userName.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            Alert.alert('Attention!', 'Please enter all the fields.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Password do not match');
            return;
        }
        try {
            const existingUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [userName]);
            if (existingUser) {
                Alert.alert('Error', 'Username already exists.');
                return;
            }

            await db.runAsync('INSERT INTO users (username, password) VALUES (?, ?)', [userName, password]);
            Alert.alert('Success', 'Registration successful!');
            navigation.navigate('Login');
        } catch (error) {
            console.log('Error during registration : ', error);
        }
    }

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View >
					<LinearGradient 
						start={{x:1, y:-0}}
						end={{x:1, y:1}}
						colors={["#FFFFFF", "#65C611"]}
						style={styles.column}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image}
						/>
						<Text style={styles.text}>
							{"REGISTER"}
						</Text>
						<Text style={styles.text2}>
							{"Create your account"}
						</Text>
						<View style={styles.view}>
							<TextInput 
							style={styles.text3}
							placeholder='Username'
                value={userName}
                onChangeText={setUserName}
				/>
						</View>
						<View style={styles.view}>
							<TextInput style={styles.text3}
							placeholder='Password'
							secureTextEntry
                			value={password}
                			onChangeText={setPassword}
							/>
						</View>
						<View style={styles.view2}>
							<TextInput style={styles.text3}
							placeholder='Confirm password'
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
						/>
						</View>
						<Pressable style={styles.button} onPress={handleRegister}>
						<View style={styles.view3}>
							<Text style={styles.text4}>
								{"Register"}
							</Text>
						</View>
						</Pressable>
					</LinearGradient>
					<View style={styles.absoluteView}>
						<View style={styles.view4}>
							<View style={styles.box}>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	absoluteView: {
		position: "absolute",
		bottom: -3,
		right: 0,
		left: 0,
		height: 208,
		backgroundColor: "#FFFFFF",
		borderColor: "#5E27FD",
		borderWidth: 1,
	},
	box: {
		height: 105,
		backgroundColor: "#3ADC5D",
		borderColor: "#5E27FD",
		borderWidth: 1,
		marginTop: 54,
	},
	column: {
		paddingTop: 19,
		paddingBottom: 340,
	},
	image: {
		width: 50,
		height: 50,
		marginBottom: 116,
		marginHorizontal: 21,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	text: {
		color: "#000000",
		fontSize: 24,
		marginBottom: 27,
		marginLeft: 150,
	},
	text2: {
		color: "#000000",
		fontSize: 20,
		marginBottom: 21,
		marginLeft: 17,
	},
	text3: {
		color: "#7F6F6F",
		fontSize: 20,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 32,
	},
	view: {
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 19,
		paddingHorizontal: 17,
		marginBottom: 23,
		marginHorizontal: 16,
	},
	view2: {
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		padding: 17,
		marginBottom: 23,
		marginHorizontal: 16,
	},
	view3: {
		alignItems: "center",
		backgroundColor: "#5DAFE9",
		borderRadius: 12,
		paddingVertical: 19,
		marginHorizontal: 16,
	},
	view4: {
		backgroundColor: "#32ED19A3",
		borderColor: "#5E27FD",
		borderWidth: 1,
		marginTop: 47,
	},
});
export default RegisterScreen;
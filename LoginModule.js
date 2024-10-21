import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, Pressable, TextInput,Alert} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'; 
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { useState } from 'react';

	const LoginModule = ({navigation}) => {

		const db = useSQLiteContext();
		const [userName, setUserName] = useState('');
		const [password, setPassword] = useState('');
		//function to handle login logic
		const handleLogin = async() => {
			if(userName.length === 0 || password.length === 0) {
				Alert.alert('Attention','Please enter both username and password');
				return;
			}
			try {
				const user = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [userName]);
				if (!user) {
					Alert.alert('Error', 'Username does not exist !');
					return;
				}
				const validUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ? AND password = ?', [userName, password]);
				if(validUser) {
					Alert.alert('Success', 'Login successful');
					navigation.navigate('Home', {user:userName});
					setUserName('');
					setPassword('');
				} else {
					Alert.alert('Error', 'Incorrect password');
				}
			} catch (error) {
				console.log('Error during login : ', error);
			}
		}
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View >
					<LinearGradient 
						start={{x:0, y:-0}}
						end={{x:0, y:1}}
						colors={["#FFFFFF", "#65C611"]}
						style={styles.column}>
						<Image
							source={require('./assets/hydroponic.png')}style={styles.image}
						
						
						/>
						<Text style={styles.text}>
							{"AEROCARE"}
						</Text>
						<Text style={styles.text2}>
							{"Log in to your account"}
						</Text>
						<View style={styles.row}>
							<Image
								source = {require('./assets/user.png')} 
								resizeMode = {"stretch"}
								style={styles.image2}
							/>
							<TextInput 
                style={styles.input}
                placeholder='Username'
                value={userName}
                onChangeText={setUserName}
            />
			
            <TextInput ></TextInput>
						</View>
						<View style={styles.row2}>
							<Image
								source = {require('./assets/padlock.png')} 

								style={styles.image3}
							/>
							<TextInput 
                style={styles.input}
                placeholder='Password'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
						</View>
						<Pressable style={styles.button} onPress={handleLogin}>
						<View style={styles.view}>
							<Text style={styles.text4}>
								{"Login"}
							</Text>
						</View>
						</Pressable>
						<Pressable style={styles.link} onPress={() => navigation.navigate('Register')}>
						<Text style={styles.text5}>
							{"Don’t have an account? Register"}
						</Text>
						</Pressable>
					</LinearGradient>
					<View style={styles.absoluteView}>
						<View style={styles.view2}>
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
		borderColor: "#5E27FD",
		borderWidth: 1,
		paddingTop: 41,
		paddingBottom: 314,
	},
	image: {
		alignContent: "stretch",
    justifyContent: 'center',
      width: 70,
      height: 70,  
      top: 0,
      left: 150,
	},
	image2: {
		width: 33,
		height: 33,
		marginRight: 10,
	},
	image3: {
		width: 33,
		height: 33,
		marginRight: 11,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginBottom: 23,
		marginHorizontal: 16,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 9,
		paddingHorizontal: 15,
		marginBottom: 23,
		marginHorizontal: 16,
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
		marginBottom: 32,
		marginLeft: 140,
	},
	text2: {
		color: "#000000",
		fontSize: 20,
		marginBottom: 22,
		marginLeft: 24,
	},
	text3: {
		color: "#7F6F6F",
		fontSize: 20,
		flex: 1,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 32,
	},
	text5: {
		color: "#1812BB",
		fontSize: 20,
		marginLeft: 51,
	},
	view: {
		alignItems: "center",
		backgroundColor: "#5DAFE9",
		borderRadius: 12,
		paddingVertical: 19,
		marginBottom: 27,
		marginHorizontal: 16,
	},
	view2: {
		backgroundColor: "#32ED19A3",
		borderColor: "#5E27FD",
		borderWidth: 1,
		marginTop: 47,
	},

});

export default LoginModule;
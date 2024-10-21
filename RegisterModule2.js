import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet,Pressable,Alert,TextInput } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'; 
import { useState } from 'react';
export default (props) => {
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
							<Text style={styles.text3}>
                            {"Create your account"}
							</Text>
						</View>
						<View style={styles.view2}>
							<Text style={styles.text3}>
								{"Last Name"}
							</Text>
						</View>
						<View style={styles.view3}>
							<Text style={styles.text4}>
								{"Next"}
							</Text>
						</View>
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
		paddingBottom: 380,
	},
	image: {
		width: 50,
		height: 50,
		marginBottom: 157,
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
		marginBottom: 26,
		marginLeft: 150,
	},
	text2: {
		color: "#000000",
		fontSize: 20,
		marginBottom: 21,
		marginLeft: 22,
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
		paddingVertical: 18,
		paddingHorizontal: 17,
		marginBottom: 19,
		marginHorizontal: 16,
	},
	view2: {
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 17,
		marginBottom: 26,
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
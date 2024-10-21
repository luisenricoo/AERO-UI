import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, Pressable} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'; 
import { NavigationContainer } from '@react-navigation/native';
const HomeScreen = ({navigation, route}) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View>
				<LinearGradient 
						start={{x:0, y:-0}}
						end={{x:0, y:1}}
						colors={["#FFFFFF", "#65C611"]}
						style={styles.column}>
				</View>	
				<View style={styles.row}>
					
					<View style={styles.row2}>
						<Pressable></Pressable>
						<Image
							source = {require('./assets/user.png')}  
							resizeMode = {"stretch"}
							style={styles.image}
						/>
						<Text style={styles.text}>
							{"Welcome, User!"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
				</View>
				<Text style={styles.text2}>
					{"AeroCare Management"}
				</Text>
				<View style={styles.row3}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<Text style={styles.text3}>
						{"Water Management "}
					</Text>
					<View style={styles.box}>
					</View>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
				</View>
				<View style={styles.row4}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"Nutrient Management "}
					</Text>
					<View style={styles.box}>
					</View>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
				</View>
				<View style={styles.row5}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
					<Text style={styles.text3}>
						{"Data History"}
					</Text>
					<View style={styles.box}>
					</View>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
				</View>
				<View style={styles.row6}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image7}
					/>
					<Text style={styles.text3}>
						{"Logout"}
					</Text>
					<View style={styles.box}>
					</View>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
				</View>
				</LinearGradient>
				<View style={styles.view2}>
					<View style={styles.view3}>
						<View style={styles.box2}>
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
	box: {
		flex: 1,
		alignSelf: "stretch",
	},
	box2: {
		height: 105,
		backgroundColor: "#3ADC5D",
		borderColor: "#5E27FD",
		borderWidth: 1,
		marginTop: 54,
	},
	image: {
		width: 33,
		height: 33,
		marginRight: 7,
	},
	image2: {
		width: 50,
		height: 50,
	},
	image3: {
		width: 41,
		height: 40,
		marginRight: 9,
	},
	image4: {
		height: 8,
		marginTop: 5,
	},
	image5: {
		width: 41,
		height: 40,
		marginRight: 12,
	},
	image6: {
		width: 41,
		height: 40,
		marginRight: 8,
	},
	image7: {
		width: 41,
		height: 40,
		marginRight: 11,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 149,
		marginHorizontal: 18,
	},
	row2: {
		width: 204,
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#70DC11",
		borderRadius: 18,
		paddingVertical: 14,
		paddingHorizontal: 13,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 13,
		marginBottom: 21,
		marginHorizontal: 15,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 9,
		marginBottom: 21,
		marginHorizontal: 13,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 9,
		paddingHorizontal: 15,
		marginBottom: 21,
		marginHorizontal: 15,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 9,
		paddingHorizontal: 14,
		marginBottom: 156,
		marginHorizontal: 15,
	},
	scrollView: {
		flex: 1,
		paddingTop: 19,
	},
	text: {
		color: "#000000",
		fontSize: 15,
		flex: 1,
	},
	text2: {
		color: "#000000",
		fontSize: 20,
		marginBottom: 21,
		marginLeft: 25,
	},
	text3: {
		color: "#7F6F6F",
		fontSize: 16,
	},
	view: {
		width: 18,
		backgroundColor: "#F5F5F5",
		paddingHorizontal: 8,
	},
	view2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#5E27FD",
		borderWidth: 1,
	},
	view3: {
		backgroundColor: "#32ED19A3",
		borderColor: "#5E27FD",
		borderWidth: 1,
		marginTop: 47,
	},
});

export default HomeScreen;
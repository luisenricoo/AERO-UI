import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text}>
						{"Nutrient Management "}
					</Text>
				</View>
				<View style={styles.view}>
					<Text style={styles.text2}>
						{"PH LEVEL"}
					</Text>
				</View>
				<View style={styles.view2}>
					<Text style={styles.text2}>
						{"TDS"}
					</Text>
				</View>
				<View style={styles.view3}>
					<View style={styles.view4}>
						<View style={styles.box}>
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
		height: 105,
		backgroundColor: "#3ADC5D",
		borderColor: "#5E27FD",
		borderWidth: 1,
		marginTop: 54,
	},
	image: {
		width: 50,
		height: 50,
	},
	image2: {
		width: 41,
		height: 40,
		marginRight: 14,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 123,
		marginHorizontal: 16,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 9,
		marginBottom: 35,
		marginHorizontal: 73,
	},
	scrollView: {
		flex: 1,
		paddingTop: 19,
	},
	text: {
		color: "#7F6F6F",
		fontSize: 16,
		flex: 1,
	},
	text2: {
		color: "#000000",
		fontSize: 16,
	},
	view: {
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 41,
		marginBottom: 37,
		marginHorizontal: 16,
	},
	view2: {
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 37,
		paddingHorizontal: 164,
		marginBottom: 198,
		marginHorizontal: 16,
	},
	view3: {
		backgroundColor: "#FFFFFF",
		borderColor: "#5E27FD",
		borderWidth: 1,
	},
	view4: {
		backgroundColor: "#32ED19A3",
		borderColor: "#5E27FD",
		borderWidth: 1,
		marginTop: 47,
	},
});
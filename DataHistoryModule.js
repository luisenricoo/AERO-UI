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
						{"Data History"}
					</Text>
				</View>
				<View style={styles.row3}>
					<Text style={styles.text2}>
						{"Water Temperature"}
					</Text>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
				</View>
				<View style={styles.row4}>
					<Text style={styles.text2}>
						{"PH Level"}
					</Text>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
				</View>
				<View style={styles.row5}>
					<Text style={styles.text2}>
						{"TDS"}
					</Text>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
				</View>
				<View style={styles.view2}>
					<View style={styles.view3}>
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
		marginRight: 8,
	},
	image3: {
		height: 8,
		marginTop: 5,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 148,
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
		marginBottom: 36,
		marginHorizontal: 76,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 19,
		paddingHorizontal: 23,
		marginBottom: 21,
		marginHorizontal: 16,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 24,
		marginBottom: 21,
		marginHorizontal: 16,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 23,
		marginBottom: 193,
		marginHorizontal: 16,
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
		color: "#7F6F6F",
		fontSize: 16,
		marginRight: 4,
		flex: 1,
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
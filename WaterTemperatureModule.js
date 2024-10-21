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
				<View style={styles.view}>
					<Text style={styles.text}>
						{"Water Temperature"}
					</Text>
				</View>
				<View style={styles.view2}>
					<View style={styles.column}>
						<View style={styles.row2}>
							<View style={styles.box}>
							</View>
							<View style={styles.column2}>
								<View style={styles.view3}>
									<Text style={styles.text2}>
										{"20"}
									</Text>
								</View>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={styles.absoluteImage}
								/>
							</View>
							<View style={styles.box2}>
							</View>
							<View style={styles.box3}>
							</View>
						</View>
						<View style={styles.row3}>
							<View style={styles.box4}>
							</View>
							<View style={styles.column3}>
								<View style={styles.view4}>
									<Text style={styles.text2}>
										{"10"}
									</Text>
								</View>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={styles.absoluteImage}
								/>
							</View>
							<View style={styles.box5}>
							</View>
							<View style={styles.view5}>
								<View style={styles.column4}>
									<View style={styles.box6}>
									</View>
									<View style={styles.box7}>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.row4}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image2}
							/>
							<View style={styles.column5}>
								<View style={styles.view4}>
									<Text style={styles.text2}>
										{"0"}
									</Text>
								</View>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={styles.absoluteImage2}
								/>
							</View>
							<View style={styles.box2}>
							</View>
							<View style={styles.box3}>
							</View>
						</View>
						<View style={styles.row5}>
							<Text style={styles.text2}>
								{"Mon"}
							</Text>
							<Text style={styles.text2}>
								{"Tue"}
							</Text>
							<Text style={styles.text2}>
								{"Wed"}
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.view6}>
					<View style={styles.view7}>
						<View style={styles.box8}>
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
	absoluteImage: {
		position: "absolute",
		bottom: 7,
		right: -16,
		width: 16,
		height: 1,
	},
	absoluteImage2: {
		position: "absolute",
		bottom: 7,
		left: 12,
		width: 16,
		height: 1,
	},
	box: {
		width: 1,
		height: 1,
	},
	box2: {
		flex: 1,
		alignSelf: "stretch",
	},
	box3: {
		width: 251,
		height: 1,
	},
	box4: {
		width: 2,
		height: 1,
		marginTop: 42,
	},
	box5: {
		flex: 1,
	},
	box6: {
		width: 236,
		height: 108,
		borderColor: "#5E27FD",
		borderWidth: 1,
	},
	box7: {
		height: 1,
	},
	box8: {
		height: 105,
		backgroundColor: "#3ADC5D",
		borderColor: "#5E27FD",
		borderWidth: 1,
		marginTop: 54,
	},
	column: {
		backgroundColor: "#FFFFFF",
		marginTop: 16,
	},
	column2: {
		width: 19,
	},
	column3: {
		width: 18,
		alignSelf: "flex-start",
		marginTop: 34,
	},
	column4: {
		flex: 1,
		paddingBottom: 65,
	},
	column5: {
		width: 12,
	},
	image: {
		width: 50,
		height: 50,
	},
	image2: {
		width: 8,
		height: 1,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 153,
		marginHorizontal: 17,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 48,
	},
	row3: {
		flexDirection: "row",
		marginBottom: 24,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 11,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 6,
	},
	scrollView: {
		flex: 1,
		paddingTop: 19,
	},
	text: {
		color: "#7F6F6F",
		fontSize: 16,
	},
	text2: {
		color: "#9D9DA5",
		fontSize: 12,
	},
	view: {
		alignItems: "center",
		backgroundColor: "#F6F3F3",
		borderColor: "#080808",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 24,
		marginBottom: 29,
		marginHorizontal: 85,
	},
	view2: {
		backgroundColor: "#FFFFFF",
		borderRadius: 8,
		paddingHorizontal: 16,
		marginBottom: 137,
		marginHorizontal: 43,
	},
	view3: {
		alignItems: "center",
		backgroundColor: "#1F1F25",
		paddingVertical: 4,
	},
	view4: {
		alignItems: "center",
		backgroundColor: "#1F1F25",
		paddingVertical: 3,
	},
	view5: {
		width: 251,
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
	},
	view6: {
		backgroundColor: "#FFFFFF",
		borderColor: "#5E27FD",
		borderWidth: 1,
	},
	view7: {
		backgroundColor: "#32ED19A3",
		borderColor: "#5E27FD",
		borderWidth: 1,
		marginTop: 47,
	},
});
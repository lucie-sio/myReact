import { useEffect, useState } from "react";
import {
	Text,
	View,
	Image,
	Button,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { api } from "../services/api";

export function ImageApi() {
	const [url, setUrl] = useState("");

	const onPressDownload = () => {
		console.error(url);
	};

	const newImage = () => {
		setUrl("");
		api().then((result) => {
			if (result) {
				setUrl(result);
			}
		});
	};

	useEffect(() => {
		api().then((result) => {
			if (result) {
				setUrl(result);
			}
		});
	}, []);

	return (
		<View style={styles.container}>
			{url === "" ? (
				<View>
					<ActivityIndicator size="large" />
				</View>
			) : (
				<View>
					<Image
						style={styles.imageApi}
						source={{ uri: url }}
					></Image>
					<Text style={styles.btns}>
						<Button
							title="Télécharger"
							color="#fe9695"
							onPress={onPressDownload}
						/>
						<Icon
							name="refresh"
							color="#fe9695"
							size={38}
							onPress={newImage}
						/>
					</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 5,
		paddingTop: 5,
		borderRadius: 20,
		borderColor: "#fe9695",
		borderWidth: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	imageApi: {
		width: 160,
		height: 160,
	},
	btns: {
		paddingTop: 5,
	},
});

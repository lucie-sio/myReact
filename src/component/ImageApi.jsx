import { useEffect, useState } from "react";
import {
	View,
	Image,
	Button,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import { api } from "../services/api";

export function ImageApi() {
	const onPressDownload = () => {
		console.error(url);
	};

	const [url, setUrl] = useState("");

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
					<Button
						title="Télécharger"
						color="#fe9695"
						onPress={onPressDownload}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 5,
		borderRadius: 10,
		borderColor: "#fe9695",
		borderWidth: 2,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		columnGap: 50,
	},
	imageApi: {
		width: 150,
		height: 150,
	},
});

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
// import * as MediaLibrary from "expo-media-library";
// import * as FileSystem from "expo-file-system";
// import * as Permissions from "expo-permissions";

export function ImageApi() {
    const [url, setUrl] = useState("");

    const onPressDownload = () => {
        console.log(url);
        // const uri = url;
        // let fileUri = FileSystem.documentDirectory + "test.jpg";
        // FileSystem.downloadAsync(uri, fileUri)
        //     .then(({ uri }) => {
        //         this.saveFile(uri);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    };
    saveFile = async (fileUri) => {
        // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        // if (status === "granted") {
        //     const asset = await MediaLibrary.createAssetAsync(fileUri);
        //     await MediaLibrary.createAlbumAsync("Download", asset, false);
        // }
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

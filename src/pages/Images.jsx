import { View, Text, StyleSheet } from "react-native";
import { ImageApi } from "../component/ImageApi";

export function Images() {
    return (
        <View style={styles.container}>
            <View style={styles.imgRow}>
                <View style={styles.imgColumn}>
                    <ImageApi />
                </View>
                <View style={styles.imgColumn}>
                    <ImageApi />
                </View>
            </View>
            <View style={styles.imgRow}>
                <View style={styles.imgColumn}>
                    <ImageApi />
                </View>
                <View style={styles.imgColumn}>
                    <ImageApi />
                </View>
            </View>
            <View style={styles.imgRow}>
                <View style={styles.imgColumn}>
                    <ImageApi />
                </View>
                <View style={styles.imgColumn}>
                    <ImageApi />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        flex: 1,
        flexDirection: "column",
    },
    imgRow: {
        flex: 2,
        flexDirection: "row",
    },
    imgColumn: {
        flex: 3,
    },
});

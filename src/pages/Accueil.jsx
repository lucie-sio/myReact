import { View, Text, Image, StyleSheet } from "react-native";
import imgLogo from "../../assets/cat-paw.png";

export function Accueil() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chat GPT</Text>
            <Text style={styles.subtitle}>
                Generateur de Photos Trop-Mignonnes
            </Text>
            <Image style={styles.image} source={imgLogo}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 80,
        color: "#fe9695",
        fontFamily: "Little-Paws",
    },
    subtitle: {
        fontSize: 22,
        color: "#999999",
        fontFamily: "Baby-Girl",
        marginTop: 10,
        marginBottom: 30,
    },
    image: {
        width: 300,
        height: 300,
    },
});

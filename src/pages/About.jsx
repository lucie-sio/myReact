import { useState } from "react";
import { View, Text, Button, StyleSheet, Linking } from "react-native";
import { api } from "../services/api";

export function About() {
    const [apiResult, setApiResult] = useState("");

    const newTest = () => {
        setApiResult("");
        api().then((result) => {
            if (result) {
                setApiResult(result);
            } else {
                setApiResult("Impossible de récupérer une image depuis l'API.");
            }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.text}>
                Chat GPT (Générateur de Photos Trop-Mignonnes) à été développé
                par Lucie Roulier.
            </Text>
            <Text
                style={styles.link}
                onPress={() =>
                    Linking.openURL("mailto:roulier.lucie@outlook.fr")
                }
            >
                roulier.lucie@outlook.fr
            </Text>

            <Text style={styles.title}>Api TheCatApi</Text>
            <Text style={styles.text}>
                Cette API vous renvoi des photos de chats trop mignons !!
            </Text>
            <Text
                style={styles.link}
                onPress={() => Linking.openURL("https://thecatapi.com/")}
            >
                https://thecatapi.com/
            </Text>
            <View style={styles.btnTest}>
                <Button title="Test" onPress={newTest} color="#fe9695">
                    Test API
                </Button>
            </View>
            <Text>{apiResult}</Text>
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
        fontSize: 30,
        color: "#fe9695",
        fontFamily: "Baby-Girl",
        padding: 10,
    },
    text: {
        fontSize: 15,
        fontFamily: "Baby-Girl",
    },
    link: {
        textDecorationLine: "underline",
        color: "blue",
        fontSize: 15,
        fontFamily: "Baby-Girl",
    },
    btnTest: {
        paddingTop: 30,
        fontSize: 30,
    },
});

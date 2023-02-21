import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/navigation/TabBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Little-Paws": require("./assets/fonts/Little-Paws.otf"),
        "Baby-Girl": require("./assets/fonts/Baby-Girl.otf"),
    });

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

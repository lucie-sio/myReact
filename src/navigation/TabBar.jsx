import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
// Pages
import { Accueil } from "../pages/Accueil";
import { Images } from "../pages/Images";
import { About } from "../pages/About";
// Icônes
import HomeIcon from "../../assets/home.svg";
import CatIcon from "../../assets/cat.svg";
import InfoIcon from "../../assets/info.svg";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#fe9695",
                tabBarInactiveTintColor: "black",
                headerShown: false,
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
                            }}
                        />
                    ),
                }}
                name="Accueil"
                component={Accueil}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/739/739249.png",
                            }}
                        />
                    ),
                }}
                name="Images"
                component={Images}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Image
                            style={{ width: 24, height: 24, color: "red" }}
                            source={InfoIcon}
                        />
                    ),
                }}
                name="About"
                component={About}
            />
        </Tab.Navigator>
    );
}

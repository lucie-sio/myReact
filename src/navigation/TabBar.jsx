import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
// Pages
import { Accueil } from "../pages/Accueil";
import { Images } from "../pages/Images";
import { About } from "../pages/About";
// Icônes
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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
					tabBarIcon: ({ focused }) => (
						<Icon
							name="home-outline"
							color={focused ? "#fe9695" : "black"}
							size={30}
						/>
					),
				}}
				name="Accueil"
				component={Accueil}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name="cat"
							color={focused ? "#fe9695" : "black"}
							size={30}
						/>
					),
				}}
				name="Images"
				component={Images}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name="information-outline"
							color={focused ? "#fe9695" : "black"}
							size={30}
						/>
					),
				}}
				name="About"
				component={About}
			/>
		</Tab.Navigator>
	);
}

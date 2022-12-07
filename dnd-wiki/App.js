import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// THEME
import { ThemeProvider } from "@rneui/themed";
import { monstersTheme } from "./themes/monstersTheme";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faHouse,
    faDragon,
    faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

// Expo Google Fonts
import { useFonts } from "expo-font";

// POPPINS
import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_900Black,
} from "@expo-google-fonts/poppins";

// ROBOTO CONDENSED
import { RobotoCondensed_700Bold } from "@expo-google-fonts/roboto-condensed";

// Importing Onboarding screens
import OBScreen01 from "./screens/onboarding/OBScreen01";
import OBScreen02 from "./screens/onboarding/OBScreen02";
import OBScreen03 from "./screens/onboarding/OBScreen03";

// Importing Main Navigational Screens
import HomeScreen from "./screens/HomeScreen";
import MonsterListScreen from "./screens/MonsterListScreen";
import CreateMonsterScreen from "./screens/CreateMonsterScreen";

import MonsterDetailScreen from "./screens/MonsterDetailScreen";

// Navigation Constant variables
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// NESTED BOTTOM TAB NAVIGATOR
export function Home() {
    return (
        <Tab.Navigator
            initialRouteName="HomeMain"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#0A0A0A",
                    borderTopColor: "#9E0B0F",
                    borderTopWidth: 5,
                    padding: 10,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#DC7474",
                tabBarInactiveTintColor: "#fff",
            }}
        >
            <Tab.Screen
                name="HomeMain"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                            icon={faHouse}
                            color={color}
                            size={32}
                        />
                    ),
                    tabBarActiveTintColor: "#DC7474",
                    tabBarShowLabel: false,
                }}
            />

            <Tab.Screen
                name="MonsterList"
                component={MonsterListScreen}
                options={{
                    title: "HOMEBREW",
                    headerStyle: {
                        backgroundColor: "#28282B",
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 26,
                        color: "#F7F2D6",
                    },
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                            icon={faDragon}
                            color={color}
                            size={32}
                        />
                    ),
                    tabBarActiveTintColor: "#DC7474",
                    tabBarShowLabel: false,
                }}
            />

            <Tab.Screen
                name="CreateMonster"
                component={CreateMonsterScreen}
                options={{
                    title: "CREATE MONSTER",
                    headerStyle: {
                        backgroundColor: "#28282B",
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 26,
                        color: "#F7F2D6",
                    },
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                            icon={faSquarePlus}
                            color={color}
                            size={32}
                        />
                    ),
                    tabBarActiveTintColor: "#DC7474",
                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    );
}

// STACK NAVIGATOR
export default function App() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_900Black,
        RobotoCondensed_700Bold,
        "RobotoCondensed-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    });

    if (!fontsLoaded) {
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#9E0B0F" />
        </View>;
    }

    return (
        <SafeAreaProvider>
            <ThemeProvider theme={monstersTheme}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="OBS01"
                            component={OBScreen01}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="OBS02"
                            component={OBScreen02}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="OBS03"
                            component={OBScreen03}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="MonsterDetails"
                            component={MonsterDetailScreen}
                            options={{
                                title: "MONSTER DETAILS",
                                headerStyle: {
                                    backgroundColor: "#28282B",
                                },
                                headerTitleStyle: {
                                    fontWeight: "bold",
                                    fontSize: 26,
                                    color: "#F7F2D6",
                                },
                                headerTintColor: "#F7F2D6",
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
});


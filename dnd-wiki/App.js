import * as React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// THEME
import { ThemeProvider } from '@rneui/themed';
import { monstersTheme } from './themes/monstersTheme';
// import { splashTheme } from './themes/splashTheme';

// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faDragon, faSquarePlus  } from '@fortawesome/free-solid-svg-icons';

// Expo Google Fonts
import { useFonts } from 'expo-font';

// POPPINS
import { Poppins_100Thin, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/poppins';

// ROBOTO CONDENSED
import { RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed'

// Importing Onboarding screens
// import OBScreen01 from './screens/onboarding/OBScreen01';
// import OBScreen02 from './screens/onboarding/OBScreen02';
// import OBScreen03 from './screens/onboarding/OBScreen03';

// Importing Main Navigational Screens
import HomeScreen from './screens/HomeScreen';
import MonsterListScreen from './screens/MonsterListScreen';
// import MonsterDetailScreen from './screens/MonsterDetailScreen'; // Stack Screen (can't be selected from the menu, only when clicking on a list item)
import CreateMonsterScreen from './screens/CreateMonsterScreen';

// Navigation Constant variables
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Onboarding Screens + Detail Screen
// export default function getStarted() {
//   <Stack.Navigator>
//     <Stack.Screen 
//       name="OBS01"
//       component={OBScreen01}
//       options={{ title: 'Getting Started'}}
//     />
    
//     <Stack.Screen 
//       name="OBS02"
//       component={OBScreen02}
//       options={{ title: 'Getting Started'}}
//     />

//     <Stack.Screen 
//       name="OBS03"
//       component={OBScreen03}
//       options={{ title: 'Getting Started' }}
//     />
//   </Stack.Navigator>
// }

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={monstersTheme}>
        <NavigationContainer>
          <Tab.Navigator 
            initialRouteName='OBS01'
            screenOptions={{
              tabBarStyle: {backgroundColor: '#0A0A0A'},
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#DC7474',
              tabBarInactiveTintColor: '#fff'
            }}
          >
            <Tab.Screen 
              name="Home"
              // FontAwesomeIcon={faHouse}
              component={HomeScreen}
              options={{ 
                // title: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faHouse} color={color} size={32}/>
                ),
                tabBarActiveTintColor: '#DC7474',
                tabBarShowLabel: false
              }}
            />

            <Tab.Screen 
              name="MonsterList"
              component={MonsterListScreen}
              options={{ 
                title: 'List of Monsters',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faDragon} color={color} size={32}/>
                ),
                tabBarActiveTintColor: '#DC7474',
                tabBarShowLabel: false
              }}
            />

            <Tab.Screen 
              name="CreateMonster"
              component={CreateMonsterScreen}
              options={{ 
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faSquarePlus} color={color} size={32}/>
                ),
                tabBarActiveTintColor: '#DC7474',
                tabBarShowLabel: false
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
    
  );
}

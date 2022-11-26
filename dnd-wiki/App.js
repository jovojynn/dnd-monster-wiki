import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing Onboarding screens
import OBScreen01 from './screens/onboarding/OBScreen01';
import OBScreen02 from './screens/onboarding/OBScreen02';
import OBScreen03 from './screens/onboarding/OBScreen03';

// Importing Main Navigational Screens
import HomeScreen from './screens/HomeScreen';
import MonsterListScreen from './screens/MonsterListScreen';
// import MonsterDetailScreen from './screens/MonsterDetailScreen'; // Stack Screen (can't be selected from the menu, only when clicking on a list item)
import CreateMonsterScreen from './screens/CreateMonsterScreen';

// Navigation Constant variables
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Onboarding Screens + Detail Screen
export default function tabNavigation() {
  <Tab.Navigator>
    <Tab.Screen 
      name="Home"
      component={HomeScreen}
      options={{ title: 'Home'}}
    />

    <Tab.Screen 
      name="MonsterList"
      component={MonsterListScreen}
      options={{ title: 'List of Monsters'}}
    />

    <Tab.Screen 
      name="CreateMonster"
      component={CreateMonsterScreen}
      options={{ title: 'Create A Monster'}}
    />
  </Tab.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="OBS01"
          component={OBScreen01}
          options={{ title: 'Getting Started'}}
        />
        
        <Stack.Screen 
          name="OBS02"
          component={OBScreen02}
          options={{ title: 'Getting Started'}}
        />

        <Stack.Screen 
          name="OBS03"
          component={OBScreen03}
          options={{ title: 'Getting Started' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './src/screens/Home';
import ProductDetails from './src/screens/ProductDetails';
import Basket from './src/screens/Basket';
import Categories from './src/screens/Categories';
import CategoryProducts from './src/screens/CategoryProducts';
import { CartProvider } from './src/context/CartContext';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const CategoryStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
  </HomeStack.Navigator>
);

const CategoryStackScreen = () => (
  <CategoryStack.Navigator>
    <CategoryStack.Screen name="Categories" component={Categories} />
    <CategoryStack.Screen name="CategoryProducts" component={CategoryProducts} />
  </CategoryStack.Navigator>
);
export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Hide headers for all screens
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // MaterialCommunityIcons
            } else if (route.name === 'Details') {
              iconName = 'eye'; // Feather
            } else if (route.name === 'Basket') {
              iconName = 'basket'; // Ionicons
            }
            else if (route.name === 'Categories') {
              iconName = 'format-list-bulleted'; // Ionicons
            }

            // Return the appropriate icon component based on route name
            return (
              <View style={{ flexDirection: 'row' }}>
                {iconName && (
                  <MaterialCommunityIcons name={iconName} size={size} color={color} />
                )}
              </View>
            );
          },
        })}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='Categories' component={CategoryStackScreen}    ></Tab.Screen>
        <Tab.Screen name='Basket' component={Basket} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

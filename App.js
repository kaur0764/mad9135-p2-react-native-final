import { StatusBar } from 'expo-status-bar';
import { NewsProvider } from './context/newsContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './navigation/HomeNavigation';
import ArticlesNavigation from './navigation/ArticlesNavigation';
import BlogsNavigation from './navigation/BlogsNavigation';
import * as MediaLibrary from 'expo-media-library';
import { useEffect } from 'react';
import SearchNavigation from './navigation/SearchNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <NewsProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'lightgrey',
            tabBarStyle: {
              backgroundColor: '#333',
              borderTopWidth: 0,
              paddingTop: 10,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeNavigation}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Articles"
            component={ArticlesNavigation}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'newspaper' : 'newspaper-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Blogs"
            component={BlogsNavigation}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'reader' : 'reader-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchNavigation}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'search' : 'search-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </NewsProvider>
  );
}

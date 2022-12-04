import { StatusBar } from 'expo-status-bar';
import { NewsProvider } from './context/newsContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './navigation/HomeNavigation';
import ArticlesNavigation from './navigation/ArticlesNavigation';
import BlogsNavigation from './navigation/BlogsNavigation';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NewsProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeNavigation}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Articles"
            component={ArticlesNavigation}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Blogs"
            component={BlogsNavigation}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </NewsProvider>
  );
}

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';
import WebViewScreen from '../components/WebViewScreen';

const Stack = createStackNavigator();

export default function BlogsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#333',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleContainerStyle: { paddingBottom: 6 },
        headerTitleStyle: { color: '#fff', fontSize: 26 },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Space News" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="News Reader" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

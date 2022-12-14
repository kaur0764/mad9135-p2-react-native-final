import { createStackNavigator } from '@react-navigation/stack';
import BlogsScreen from '../components/BlogsScreen';
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
      <Stack.Screen name="Blogs List" component={BlogsScreen} />
      <Stack.Screen name="Blog Details" component={DetailsScreen} />
      <Stack.Screen name="Blog Reader" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

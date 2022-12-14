import { createStackNavigator } from '@react-navigation/stack';
import ArticlesScreen from '../components/ArticlesScreen';
import DetailsScreen from '../components/DetailsScreen';
import WebViewScreen from '../components/WebViewScreen';

const Stack = createStackNavigator();

export default function ArticlesNavigation() {
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
      <Stack.Screen name="Articles List" component={ArticlesScreen} />
      <Stack.Screen name="Article Details" component={DetailsScreen} />
      <Stack.Screen name="Article Reader" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

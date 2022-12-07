import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';
import WebViewScreen from '../components/WebViewScreen';

const Stack = createStackNavigator();

export default function BlogsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Space News" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="News Reader" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

import { createStackNavigator } from '@react-navigation/stack';
import ArticlesScreen from '../components/ArticlesScreen';
import DetailsScreen from '../components/DetailsScreen';
import WebViewScreen from '../components/WebViewScreen';

const Stack = createStackNavigator();

export default function ArticlesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Articles" component={ArticlesScreen} />
      <Stack.Screen name="Article Details" component={DetailsScreen} />
      <Stack.Screen name="Article Reader" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../components/SearchScreen';
import DetailsScreen from '../components/DetailsScreen';
import WebViewScreen from '../components/WebViewScreen';

const Stack = createStackNavigator();

export default function SearchNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search News" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="News Reader" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

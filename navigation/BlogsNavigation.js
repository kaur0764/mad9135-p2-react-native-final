import { createStackNavigator } from '@react-navigation/stack';
import BlogsScreen from '../components/BlogsScreen';
import DetailsScreen from '../components/DetailsScreen';
import WebViewScreen from '../components/WebViewScreen';

const Stack = createStackNavigator();

export default function BlogsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Blogs List" component={BlogsScreen} />
      <Stack.Screen name="Blog Details" component={DetailsScreen} />
      <Stack.Screen name="Blog Reader" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

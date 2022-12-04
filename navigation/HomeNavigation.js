import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

const Stack = createStackNavigator();

export default function BlogsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

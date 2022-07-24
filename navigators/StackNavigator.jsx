import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../screens/Details";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

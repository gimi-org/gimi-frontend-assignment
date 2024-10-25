import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@/app/screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { UserDetailsScreen } from "@/app/screens/UserDetailsScreen";

export type RootStackParamList = {
  Home: undefined;
  UserDetails: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
      </Stack.Navigator>
    </Provider>
  );
}

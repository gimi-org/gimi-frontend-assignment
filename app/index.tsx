import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@/app/screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </Provider>
  );
}

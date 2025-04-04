import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { RootStackParamList } from "./app/navigation/types";
import { HomeEquipaments } from "./app/pages/HomeEquipaments/HomeEquipaments";
import HomeMessages from "./app/pages/HomeMessages/HomeMessages";
import HomeTeste from "./app/pages/HomeTeste/HomeTeste";
import NewEquipament from "./app/pages/NewEquipament/NewEquipament";
import Register from "./app/pages/Register/Register";
import ResetPassword from "./app/pages/ResetPassword/ResetPassword";
import Welcome from "./app/pages/Welcome/Welcome";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Reset">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reset"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewEquipament"
              component={NewEquipament}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeMessages"
              component={HomeMessages}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="HomeEquipaments"
              component={HomeEquipaments}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeTeste"
              component={HomeTeste}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </GestureHandlerRootView>
      <Toast />
    </>
  );
}

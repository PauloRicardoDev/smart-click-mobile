import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Welcome from './app/pages/Welcome/Welcome';
import Register from "./app/pages/Register/Register";
import {RootStackParamList} from "./app/navigation/types";
import ResetPassword from './app/pages/ResetPassword/ResetPassword';
import NewEquipament from './app/pages/NewEquipament/NewEquipament'
import HomeMessages from './app/pages/HomeMessages/HomeMessages'

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
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
                </Stack.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

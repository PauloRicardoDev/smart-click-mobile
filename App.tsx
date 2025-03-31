import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from "./app/pages/Welcome/Welcome";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Welcome/>
          <StatusBar style="auto" />
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

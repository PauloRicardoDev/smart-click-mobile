import { ActivityIndicator, StyleSheet, View } from "react-native";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#FFFFFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "transparent",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

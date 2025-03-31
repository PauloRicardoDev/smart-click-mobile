import React from "react";
import { TouchableOpacity, StyleSheet, GestureResponderEvent } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

interface ReturnButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  size?: number;
  color?: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({
  onPress,
  size = 24,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <AntDesign name="leftcircle" size={size} color="#1C5790" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  }
});


export default ReturnButton;

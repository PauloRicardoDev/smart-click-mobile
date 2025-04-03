import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Loading } from "../Loading/Loading";

interface SendButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({
  title,
  style,
  isLoading = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, isLoading && styles.disabledButton]}
      disabled={isLoading} //Desabilita o botão se isLoading for true
      {...props}
    >
      {isLoading ? <Loading /> : <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#1C5790",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "semibold",
    color: "#fff",
    fontSize: 20,
  },
  disabledButton: {
    opacity: 0.8,
  },
});

export default SendButton;

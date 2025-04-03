import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";

import { Loading } from "../Loading/Loading";

// Definindo os tipos de variantes de botão atuais
export type ButtonVariant = "blue" | "blueTransparent" | "greenTransparent";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  isLoading?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant, // Define o tipo de variante do botão
  isLoading = false,
  buttonStyle,
  textStyle,
  style,
  ...props
}) => {
  const getButtonStyles = () => {
    switch (variant) {
      // Define os estilos para cada variante do botão
      case "blue":
        return {
          button: {
            backgroundColor: "#1C5790",
            borderWidth: 0,
          },
          text: {
            color: "#fff",
            fontSize: 20,
          },
        };
      case "blueTransparent":
        return {
          button: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#1C5790",
          },
          text: {
            color: "#1C5790",
            fontSize: 17,
          },
        };
      case "greenTransparent":
        return {
          button: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#96B562",
          },
          text: {
            color: "#96B562",
            fontSize: 17,
          },
        };
      default:
        return {
          button: {},
          text: {},
        };
    }
  };

  const variantStyles = getButtonStyles();

  return (
    <TouchableOpacity
      style={[
        styles.baseButton,
        variantStyles.button,
        isLoading && styles.disabledButton,
        buttonStyle,
        style,
      ]}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Text style={[styles.baseText, variantStyles.text, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    alignItems: "center",
  },
  baseText: {
    fontFamily: "Roboto",
    fontWeight: "semibold",
  },
  disabledButton: {
    opacity: 0.8,
  },
});

export default CustomButton;

import { StyleSheet, TextInput, View, TouchableOpacity, TextInputProps } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

// Extenda a interface TextInputProps para incluir suas props personalizadas
interface InputComponentProps extends TextInputProps {
  // Adicionamos apenas a prop style como opcional porque já existe em TextInputProps
  // mas com um tipo diferente que queremos sobrescrever para qualquer
  style?: any;
}

export default function InputComponent({
  placeholder,
  keyboardType,
  secureTextEntry,
  maxLength = 100,
  value,
  onChangeText,
  style,
  ...restProps // Captura todas as outras props do TextInput
}: InputComponentProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.inputContainer_input,
          isFocused && styles.focusedInput,
          secureTextEntry && { paddingRight: 40 },
          style,
        ]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && !showPassword}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
        {...restProps} // Passa todas as outras props para o TextInput
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <MaterialIcons
            name={showPassword ? "visibility" : "visibility-off"}
            size={24}
            color="#1C5790"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  inputContainer_input: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 50,
    padding: 15,
    fontSize: 15,
    width: 320,
    backgroundColor: '#F1F4FF',
  },
  focusedInput: {
    borderColor: '#1C5790',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});
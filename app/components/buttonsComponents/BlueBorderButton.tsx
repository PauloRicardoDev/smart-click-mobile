import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface SendButtonProps extends TouchableOpacityProps {
  title: string;
}

const SendButton: React.FC<SendButtonProps> = ({ title, style, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#1C5790',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    fontWeight: 'semibold',
    color: '#1C5790',
    fontSize: 17,
  }
});

export default SendButton;

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
    backgroundColor: '#1C5790',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    fontWeight: 'semibold',
    color: '#fff',
    fontSize: 20,
  }
});

export default SendButton;

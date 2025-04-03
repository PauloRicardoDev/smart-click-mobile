import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Definindo os tipos para as propriedades do componente
type StatusIconProps = {
  status: 'error' | 'success'; // Pode ser "error" ou "success"
  size?: number; // Tamanho do ícone, padrão é 24
};

const StatusIcon: React.FC<StatusIconProps> = ({ status, size = 24 }) => {
  return (
    <View
      style={[
        styles.statusIcon,
        { backgroundColor: status === 'error' ? '#FFE9E9' : '#E9FFE9' }
      ]}
    >
      <FontAwesome
        name="circle-o"
        size={size}
        color={status === 'error' ? '#FF0000' : '#00FF00'}
      />
    </View>
  );
};

// Estilos para o ícone
const styles = StyleSheet.create({
  statusIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatusIcon;

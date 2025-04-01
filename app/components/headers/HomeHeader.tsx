import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserPhoto } from "../UserComponents/UserPhoto";
import { useState } from "react";
import { UserDTO } from "../../dtos/userDto";

export function HomeHeader() {
  // User mock => TODO: Remover ao integrar com o backend
  const [user, setUser] = useState<UserDTO>({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://example.com/avatar.png',
    role: 'Administrador',
  })
  
  return (
    <View style={styles.container}>

      {/* Foto de perfil do Usuário */}
      <UserPhoto
        style={styles.userPhoto}
        source={require('../../../assets/images/profile/photo-test.png')}
      />
      
      {/* Nome e cargo do usuário */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>
          {user.name}
        </Text>
        <Text style={styles.role}>
          {user.role}
        </Text>
      </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', // Add this to center items vertically
    padding: 20,
  },
  userPhoto:{
    marginRight: 20,
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 35,
  },
  userInfo: {
    justifyContent: 'center', // Center content vertically
  },
  userName:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  role:{
    fontSize: 12,
    color: '#8C8C8C',
  }
})
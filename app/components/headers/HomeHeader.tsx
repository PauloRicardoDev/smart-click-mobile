import { View, StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { UserPhoto } from "../UserComponents/UserPhoto";
import { useState } from "react";
import { UserDTO } from "../../dtos/userDto";
import { Notification, Edit } from 'iconsax-react-native';

// Interface para as props do componente
interface HomeHeaderProps {
  showProfileButton?: boolean; // Propriedade booleana opcional
}

export function HomeHeader({ showProfileButton = true }: HomeHeaderProps) {
  // User mock => TODO: Remover ao integrar com o backend
  const [user, setUser] = useState<UserDTO>({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://example.com/avatar.png',
    role: 'Administrador',
  })

   // Estilos dinâmicos baseados na prop showProfileButton
   const dynamicStyles = {
    container: {
      ...styles.container,
      padding: showProfileButton ? 20 : 15,
    } as ViewStyle,
    topRightContainer: {
      ...styles.topRightContainer,
      marginBottom: showProfileButton ? 15 : 0,
    } as ViewStyle,
    rightContainer: {
      ...styles.rightContainer,
      justifyContent: showProfileButton ? 'space-between' : 'center',
    } as ViewStyle,
    userPhoto: {
      ...styles.userPhoto,
      width: showProfileButton ? 100 : 80,
      height: showProfileButton ? 105 : 85,
    } as ImageStyle,
    userName: {
      ...styles.userName,
      fontSize: showProfileButton ? 22 : 18,
    } as TextStyle,
    role: {
      ...styles.role,
      fontSize: showProfileButton ? 14 : 12,
    } as TextStyle,
    notificationButton: {
      ...styles.notificationButton,
      width: showProfileButton ? 48 : 40,
      height: showProfileButton ? 48 : 40,
      borderRadius: showProfileButton ? 24 : 20,
    } as ViewStyle
  };

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.contentContainer}>
        {/* Lado esquerdo - apenas a foto */}
        <View style={styles.leftContainer}>
          <UserPhoto
            style={dynamicStyles.userPhoto}
            source={require('../../../assets/images/profile/photo-test.png')}
          />
        </View>
        
        {/* Lado direito - nome, cargo, notificação e botão de perfil */}
        <View style={dynamicStyles.rightContainer}>
          <View style={dynamicStyles.topRightContainer}>
            {/* Nome e cargo do usuário */}
            <View style={styles.userInfo}>
              <Text style={dynamicStyles.userName}>
                {user.name}
              </Text>
              <Text style={dynamicStyles.role}>
                {user.role}
              </Text>
            </View>
            
            {/* Botão de notificação */}
            <TouchableOpacity style={dynamicStyles.notificationButton}>
              <Notification
                size={showProfileButton ? 24 : 20}
                color="#2C2C2C"
                variant="TwoTone"
              />
            </TouchableOpacity>
          </View>
          
          {/* Botão Meu perfil - exibido condicionalmente */}
          {showProfileButton && (
            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileButtonText}>Meu perfil</Text>
              <Edit size="20" color="#1C5790" variant="TwoTone" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    margin: 10,
    elevation: 3,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    marginRight: 15,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  userPhoto: {
    width: 100,
    height: 105,
    borderRadius: 20,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#8C8C8C',
  },
  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButton: {
    flexDirection: 'row',
    height: 45,
    borderRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#a5a3a3',
  },
  profileButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C5790',
  }
})



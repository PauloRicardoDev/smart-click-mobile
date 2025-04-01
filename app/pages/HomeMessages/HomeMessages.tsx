import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Notification } from 'iconsax-react-native';
import { Setting4 } from 'iconsax-react-native';
import { SearchNormal1 } from 'iconsax-react-native';


export default function HomeMessages() {
    return (
        <>
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <Image 
                        source={require('../../../assets/images/profile.png')}
                        style={styles.profileImage}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Fulano</Text>
                        <Text style={styles.profileRole}>Administrador</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.notificationButton}>
    <Notification size="32" color="#000000" />
</TouchableOpacity>

            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <SearchNormal1 size={23} color="#AEAEAE" style={styles.searchIcon} />
                    <TextInput 
                        placeholder="Buscar..."
                        style={styles.searchInput}
                    />
                </View>
                <TouchableOpacity style={styles.filterButton}>
                <Setting4 size="25" color="#FFFFFF"/>
                </TouchableOpacity>
            </View>

            {/* Recent Messages Title */}
            <Text style={styles.sectionTitle}>Mensagens recentes</Text>

            {/* Messages List */}
            <ScrollView style={styles.messagesList}>
                <MessageItem 
                    title="Uso mensal"
                    subtitle="Sua unidade consumidora ultrapassou 300 reais"
                    time="1h"
                />
                <MessageItem 
                    title="Beltrano"
                    subtitle="Assunto: ..."
                    time="3h"
                />
                <MessageItem 
                    title="Uso mensal"
                    subtitle="Sua unidade consumidora ultrapassou 300 reais"
                    time="1h"
                />
                <MessageItem 
                    title="Beltrano"
                    subtitle="Assunto: ..."
                    time="3h"
                />
            </ScrollView>
        </View>
        </>
    );
}

// Message Item Component
const MessageItem = ({ title, subtitle, time }: { title: string; subtitle: string; time: string }) => (
    <TouchableOpacity style={styles.messageItem}>
        <Image 
            source={require('../../../assets/images/notificaSmart.png')}
            style={styles.messageIcon}
        />
        <View style={styles.messageContent}>
            <Text style={styles.messageTitle}>{title}</Text>
            <Text style={styles.messageSubtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.messageTime}>{time}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#fff',
        marginRight: 12,
    },
    profileInfo: {
        marginLeft: 10,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    profileRole: {
        fontSize: 12,
        color: '#666',
        fontWeight: 'normal',
        marginBottom: 7,
    },
    notificationButton: {
        padding: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        gap: 10,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',  // Torna o fundo transparente
        borderRadius: 10,  // Bordas arredondadas
        paddingHorizontal: 15,  // Espaçamento horizontal
        borderWidth: 2,  // Adiciona a espessura da borda
        borderColor: '#fff',  // Define a cor da borda (branco no caso)
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    filterButton: {
        backgroundColor: '#1B3B72',
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 15,
        color: '#03314B',
    },
    messagesList: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    messageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFFFFF',  // Fundo branco
        borderRadius: 12,  // Bordas arredondadas
        marginBottom: 10,
        fontSize: 14,
        fontWeight: 'semibold',
    
        // Sombra para criar o efeito de "salto" 3D
        shadowColor: '#000',  // Cor da sombra (preta)
        shadowOffset: {
            width: 0,
            height: 4,  // A sombra será projetada para baixo (ajuste conforme necessário)
        },
        shadowOpacity: 0.1,  // Opacidade da sombra (ajuste para um efeito sutil)
        shadowRadius: 8,  // Raio da sombra para o desfoque (quanto maior, mais difusa)
        elevation: 5,  // Efeito de sombra no Android (para o efeito 3D)
    },
    messageIcon: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
        backgroundColor: '#FCFCFC', // Cor de fundo da área dentro do ícone
        shadowColor: 'rgba(0, 0, 0, 0.7)',  // Cor da sombra com 30% de opacidade (ajuste o valor de 0 a 1)
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1, // Opacidade da sombra (100% de visibilidade)
        shadowRadius: 4,  // Raio da sombra, ajusta o "desfoque"
        elevation: 10,     // Efeito de sombra no Android (3D)
    },
    messageContent: {
        flex: 1,
    },
    messageTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1B3B72',
        marginBottom: 4,
    },
    messageSubtitle: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    messageTime: {
        fontSize: 14,
        color: '#03314B',
        fontWeight: '600',
        marginLeft: 10,
    },
});
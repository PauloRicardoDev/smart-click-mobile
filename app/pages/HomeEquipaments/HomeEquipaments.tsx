import { Notification, Setting4, SearchNormal1, Add, AddSquare } from 'iconsax-react-native';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useState } from 'react';
import MenuComponent from '../../components/menuComponent/MenuComponent';
import { HomeHeader } from '../../components/headers/HomeHeader';
import { FontAwesome } from '@expo/vector-icons';
import IconComponent from '../../components/IconComponent/IconComponent';


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function HomeEquipaments() {
    const navigation = useNavigation<NavigationProp>();

    const [expandedItems, setExpandedItems] = useState({
        'Equipamento de teste': false,
        'Placa de teste': false,
    });

    const toggleExpand = (name: string) => {
        setExpandedItems(prevState => ({
            ...prevState,
            [name]: !prevState[name as keyof typeof prevState],
        }));
    };

    return (
        <>
            <View style={styles.container}>
                {/* Header */}

                <HomeHeader showProfileButton={false} />
                {/* Equipment List Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.sectionTitle}>Todos os equipamentos (2)</Text>
                </View>

                {/* Equipment List */}
                <ScrollView style={styles.equipmentList}>
                    <EquipmentItem
                        name="Equipamento de teste"
                        description="Placa com 3 fases"
                        status="error"
                        isExpanded={expandedItems['Equipamento de teste']}
                        onChange={() => toggleExpand('Equipamento de teste')}
                        mac="O que eu coloco aqui ??"
                        unit="Falta mudar aqui também"
                    />
                    <EquipmentItem
                        name="Placa de teste"
                        description="Placa com 3 fases"
                        status="success"
                        isExpanded={expandedItems['Placa de teste']}
                        onChange={() => toggleExpand('Placa de teste')}
                        mac="cc:50:e3:be:f0:b8"
                        unit="14675041"
                    />
                </ScrollView>

                {/* Add Button */}
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('NewEquipament')}
                >
                    <Add size={24} color="#FFF" />
                </TouchableOpacity>

                <MenuComponent />
            </View>
        </>
    );
}

// Equipment Item Component
const EquipmentItem = ({
    name,
    description,
    status,
    isExpanded,
    mac,
    unit,
    onChange
}: {
    name: string;
    description: string;
    status: 'error' | 'success';
    isExpanded: boolean;
    mac?: string;
    unit?: string;
    onChange?: () => void;
}) => (
    <TouchableOpacity style={styles.equipmentItem} onPress={onChange}>
        <View style={[
            styles.statusIcon,
            { backgroundColor: status === 'error' ? '#FFE9E9' : '#E9FFE9' }
        ]}>
            <IconComponent status={status} size={24} />
        </View>
        <View style={styles.equipmentContent}>
            <Text style={styles.equipmentName}>{name}</Text>
            <Text style={styles.equipmentDescription}>{description}</Text>
            {isExpanded && mac && unit && (
                <>
                    <Text style={styles.equipmentDetails}>MAC: {mac}</Text>
                    <Text style={styles.equipmentDetails}>Unidade Consumidora: {unit}</Text>
                </>
            )}
        </View>
        <FontAwesome
            name={isExpanded ? "angle-up" : "angle-down"}
            size={24}
            color="#000"
        />
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
    titleContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#03314B',
    },
    equipmentList: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    equipmentItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    statusIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    equipmentContent: {
        flex: 1,
    },
    equipmentName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
    },
    equipmentDescription: {
        fontSize: 14,
        color: '#666',
    },
    addButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#1B4274',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    equipmentDetails: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },
});

import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Home2, Buildings, House, ForwardItem } from "iconsax-react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/types";
import {useNavigation} from "@react-navigation/native";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList
>;

interface MenuProps {
    title?: string;
}

const MenuComponent: React.FC<MenuProps> = ({ ...props }) => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuContainerItem}
                                  onPress={() => navigation.navigate("Home")}>
                    <Home2 size="32" color="#1C5790" variant="TwoTone" />
                    <Text style={styles.menuContainerItemText}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContainerItem}
                                  onPress={() => navigation.navigate("Unidades")}>
                    <Buildings size="32" color="#1C5790" variant="TwoTone" />
                    <Text style={styles.menuContainerItemText}>Unidades</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContainerItem}
                                  onPress={() => navigation.navigate("HomeEquipaments")}>
                    <ForwardItem size="32" color="#1C5790" variant="TwoTone" />
                    <Text style={styles.menuContainerItemText}>Equipa...</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        position: 'absolute',
        bottom: 0
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.05)',
    },
    menuContainerItem: {
        alignItems: 'center'
    },
    menuContainerItemText: {
        fontSize: 12,
        color: '#1C5790',
    }
});

export default MenuComponent;
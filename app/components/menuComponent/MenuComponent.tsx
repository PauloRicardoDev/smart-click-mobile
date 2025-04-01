import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Home2, Buildings, House, ForwardItem } from "iconsax-react-native";

interface MenuProps {
    title?: string;
}

const MenuComponent: React.FC<MenuProps> = ({ ...props }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuContainerItem}>
                    <Home2 size="32" color="#1C5790" variant="TwoTone" />
                    <Text style={styles.menuContainerItemText}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContainerItem}>
                    <Buildings size="32" color="#1C5790" variant="TwoTone" />
                    <Text style={styles.menuContainerItemText}>Unidades</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContainerItem}>
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
        backgroundColor: 'rgb(247, 247, 247)',
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
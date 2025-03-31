import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {MaterialIcons} from "@expo/vector-icons";

interface MenuProps {
    title: string;
}

const MenuComponent: React.FC<MenuProps> = ({ ...props }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Conteúdo principal da página viria aqui */}
            <View style={{ flex: 1 }}></View>

            {/* Rodapé fixo */}
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#fff',
                borderTopWidth: 1,
                borderTopColor: '#ccc'
            }}>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <MaterialIcons
                        name={"home"}
                        size={24}
                        color="#1C5790"
                    />
                    <Text>dddddddd</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <MaterialIcons
                        name={"home"}
                        size={24}
                        color="#1C5790"
                    />
                    <Text>dddddddd</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <MaterialIcons
                        name={"visibility"}
                        size={24}
                        color="#1C5790"
                    />
                    <Text>dddddddd</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default MenuComponent;
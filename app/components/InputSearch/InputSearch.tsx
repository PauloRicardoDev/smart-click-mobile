import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { SearchNormal1 } from 'iconsax-react-native';
import { Setting4 } from 'iconsax-react-native';

export default function InputSearch() {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
                <SearchNormal1 size={23} color="#d8d8d8" style={styles.searchIcon} />
                <TextInput
                    placeholder="Buscar..."
                    style={styles.searchInput}
                    maxLength={100}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        gap: 10,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: '#f8f8f8',
        width: 350
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
});
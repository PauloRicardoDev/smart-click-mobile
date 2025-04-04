import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const CardMsgsComponent = ({ title, subtitle, time }: { title: string; subtitle: string; time: string }) => (
    <TouchableOpacity style={styles.messageItem}>
        <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.messageIcon}
        />
        <View style={styles.messageContent}>
            <Text style={styles.messageTitle}>{title}</Text>
            <Text style={styles.messageSubtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.messageTime}>{time}</Text>
    </TouchableOpacity>
);

export default CardMsgsComponent;

const styles = StyleSheet.create({
    messageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginBottom: 10,
        fontSize: 14,
        fontWeight: 'semibold',

        // Sombra para criar o efeito de "salto" 3D
        shadowColor: '#b3b3b3',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    messageIcon: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
        backgroundColor: '#FCFCFC',

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
})

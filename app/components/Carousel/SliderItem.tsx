import { FlatList, Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from 'react';
import { ImageSliderType } from "./Carousel";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";


type Props = {
    item: ImageSliderType;
    index: number;
}

export default function SliderItem ({item, index}: Props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.itemText} >{item.title}</Text>
            <Text style={styles.itemSubText} >{item.description}</Text>
            </View>
            <Image source={item.image} style={{width: 385, height: 124}} />
        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        width: 403,
        height: 178,
        // justifyContent: "center",
        // alignItems: "center",
        gap: 20,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 10,             
        flexDirection: "column", 
    },

    textContainer: {
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center",
    },


    itemText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    itemSubText: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 10,
    },
})
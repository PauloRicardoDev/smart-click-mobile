import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react';
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import SliderItem from "./SliderItem";
import { ImageSliderType } from "./Carousel";


const { width } = Dimensions.get("screen");

type Props = {
    items: ImageSliderType[];
    paginationIndex: number;
    scrollX: SharedValue<number>;
}

export default function Pagination ({items, paginationIndex, scrollX}: Props) {
    return (
        <View style={styles.container}>
        {items.map((_, index) =>{
            const pgAnimationStyle = useAnimatedStyle(() => {
                const dotWidth = interpolate(
                    scrollX.value,
                    [(index - 1) * width, index * width, (index + 1) * width],
                    [8, 20, 8]
                );

                return {
                    width: dotWidth,
                }
            })
            return (
                <Animated.View key={index} style={[styles.dot, {backgroundColor: paginationIndex === index ? '#1C5790' : '#aaa' }]} />
            )
        })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },

    dot:{
        backgroundColor: '#aaa',
        height: 8,
        width: 8,
        marginHorizontal: 2,
        borderRadius: 8,
    }
})
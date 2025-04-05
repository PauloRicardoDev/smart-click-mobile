import { FlatList, StyleSheet, Text, View, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import React, { useRef } from 'react';
import { ImageSourcePropType } from "react-native";
import SliderItem from "./SliderItem";
import Pagination from "./Pagination";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
    title: "Consumo (KWh)",
    image: require("../../../assets/images/graphic1.png"),
    description: "De 02/10/2024 00:00 a 02/10/2024 23:59"
    },
    {
    title: "Teste2",
    image: require("../../../assets/images/graphic1.png"),
    description: "Teste2"
    },
    {
    title: "Teste2",
    image: require("../../../assets/images/graphic1.png"),
    description: "Teste2"
    },
];

type Props = {
    itemList: ImageSliderType[];
}

export default function Carousel ({itemList}: Props) {
    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = React.useState(0);

    const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems.length > 0 && viewableItems[0]?.index !== undefined) {
            const index = viewableItems[0].index;
            if (typeof index === 'number') { 
                setPaginationIndex(index);
            }
        }
    };

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
        waitForInteraction: true,
        minimumViewTime: 1000,
    };

    const viewabilityConfigCallbackPairs = useRef([
        {viewabilityConfig, onViewableItemsChanged}
    ]);

    return (
        <View>
            <FlatList
                data={itemList}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item, index }) => <SliderItem item={item} index={index} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                // viewabilityConfig={}
                // onViewableItemsChanged={}
            />
            <Pagination items={itemList} scrollX={scrollX} paginationIndex={paginationIndex}/>
        </View>
    )
}
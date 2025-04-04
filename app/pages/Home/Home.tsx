import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import MenuComponent from "../../components/menuComponent/MenuComponent";
import {HomeHeader} from "../../components/headers/HomeHeader";
import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {SelectCountry} from 'react-native-element-dropdown';
import {AlignBottom, Buildings, MoneySend, ArrowCircleRight2} from 'iconsax-react-native';
import CardMsgsComponent from "../../components/CardMsgsComponent/CardMsgsComponent";
import Carousel from "../../components/Carousel/Carousel";
import {ImageSlider} from "../../components/Carousel/Slider";

type FormDataProps = {
    equipmentName: string;
    macAddress: string;
    consumerUnit: string;
    description: string;
    uf: string;
    city: string;
    monitoredPhase: string;
    voltage: string;
}

interface cardsProps {
    equipamentos?: number;
    potAcumulada?: number;
    usoMensal?: number;
}

export default function Home() {
    const {control, handleSubmit} = useForm<FormDataProps>({
        defaultValues: {
            equipmentName: ''
        }
    });

    const [equip, setEquip] = useState('1');

    const local_data = [
        {
            value: '1',
            lable: 'Equipamento - equipamento 1',
            image: require('../../../assets/circle/circle_on.png'),
            image_off: require('../../../assets/circle/circle_off.png')
        },
        {
            value: '2',
            lable: 'Equipamento - equipamento 2',
            image: require('../../../assets/circle/circle_on.png'),
            image_off: require('../../../assets/circle/circle_off.png')
        },
        {
            value: '3',
            lable: 'Equipamento - equipamento 3',
            image: require('../../../assets/circle/circle_on.png'),
            image_off: require('../../../assets/circle/circle_off.png')
        },
        {
            value: '4',
            lable: 'Equipamento - equipamento 4',
            image: require('../../../assets/circle/circle_on.png'),
            image_off: require('../../../assets/circle/circle_off.png')
        },
        {
            value: '5',
            lable: 'Equipamento - equipamento 5',
            image: require('../../../assets/circle/circle_on.png'),
            image_off: require('../../../assets/circle/circle_off.png')
        },
    ];

    const ImageSliderCarousel = [
        {
            title: "Consumo (KWh)",
            image: require("../../../assets/images/notificaSmart.png"),
            description: "De 02/10/2024 00:00 a 02/10/2024 23:59"
        },
        {
            title: "Teste2",
            image: require("../../../assets/images/notificaSmart.png"),
            description: "Teste2"
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader showProfileButton={true}/>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.containerInfos}>
                    <Text style={styles.containerInfosTitleSelect}>Equipamento Ativo</Text>
                    <Controller
                        name="monitoredPhase"
                        control={control}
                        render={({field: {onChange, value}}) => (
                            <SelectCountry
                                style={styles.dropdown}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderStyle={styles.placeholderStyle}
                                imageStyle={styles.imageStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                search
                                maxHeight={200}
                                value={equip}
                                data={local_data}
                                valueField="value"
                                labelField="lable"
                                imageField="image_off"
                                placeholder="Select country"
                                searchPlaceholder="Search..."
                                onChange={e => {
                                    setEquip(e.value);
                                }}
                            />
                        )}
                    />
                    <View style={styles.containerInfosCards}>
                        <Text style={styles.containerInfosCardsTitle}>Estatisticas</Text>
                        <CardsIndcators usoMensal={122} potAcumulada={1233} equipamentos={12}/>
                    </View>
                    <Carousel itemList={ImageSlider}/>
                    <View style={styles.containerInfosLastMsg}>
                        <View style={styles.containerInfosLastMsgHeader}>
                            <Text style={styles.containerInfosLastMsgHeaderTitle}>Mensagens recentes</Text>
                            <View style={styles.containerInfosLastMsgHeaderNext}>
                                <Text>ver mais</Text>
                                <TouchableOpacity>
                                    <ArrowCircleRight2 size="40" color="#1C5790" variant="TwoTone"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <CardMsgsComponent
                            title="Beltrano"
                            subtitle="Assunto: ..."
                            time="3h"
                        />
                    </View>
                </View>
            </ScrollView>
            <MenuComponent/>
        </SafeAreaView>
    );
}

const CardsIndcators: React.FC<cardsProps> = ({...props}) => {
    return (
        <View style={styles.containerCardsMain}>
            <View style={styles.containerCardA}>
                <AlignBottom size="35" color="#F6B042" variant="TwoTone"/>
                <Text style={styles.containerCardATitle}>{props.potAcumulada}</Text>
                <Text style={styles.containerCardText}>Pot. acumulada</Text>
            </View>
            <View style={styles.containerCardB}>
                <Buildings size="30" color="#96B562" variant="TwoTone"/>
                <Text style={styles.containerCardBTitle}>{props.equipamentos}</Text>
                <Text style={styles.containerCardText}>Equipamentos</Text>
            </View>
            <View style={styles.containerCardC}>
                <MoneySend size="30" color="#4F7FAD" variant="TwoTone"/>
                <Text style={styles.containerCardCTitle}>R$ {props.usoMensal}</Text>
                <Text style={styles.containerCardText}>Uso mensal</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 80,
    },
    containerInfos: {
        gap: 10,
        marginHorizontal: 13,
        paddingBottom: 20,
    },
    containerInfosTitleSelect: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#82D000'
    },

    //ContainerCards
    containerInfosCards: {
        marginVertical: 10,
        gap: 10
    },
    containerInfosCardsTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#03314B"
    },
    containerInfosLastMsgHeaderNext: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 5
    },

    //containerInfosLastMsg
    containerInfosLastMsg: {
        marginVertical: 10,
        gap: 15
    },
    containerInfosLastMsgHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    containerInfosLastMsgHeaderTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#03314B"
    },

    //Cards
    containerCardsMain: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5
    },
    containerCardA: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#F6B042',
        borderRadius: 20,
        width: 115,
        height: 110,
        gap: 2
    },
    containerCardATitle: {
        color: '#F6B042',
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerCardText: {
        fontSize: 12,
        textAlign: "center"
    },
    containerCardB: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#96B562',
        borderRadius: 20,
        width: 115,
        height: 110,
        gap: 2
    },
    containerCardBTitle: {
        color: '#96B562',
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerCardC: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#4F7FAD',
        borderRadius: 20,
        width: 115,
        height: 110,
        gap: 2
    },
    containerCardCTitle: {
        color: '#4F7FAD',
        fontSize: 20,
        fontWeight: 'bold'
    },

    //Select
    dropdown: {
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        elevation: 5,
    },
    imageStyle: {
        width: 15,
        height: 15.5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        borderRadius: 15,
    }
});
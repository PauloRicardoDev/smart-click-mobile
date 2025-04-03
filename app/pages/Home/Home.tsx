import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuComponent from "../../components/menuComponent/MenuComponent";
import { HomeHeader } from "../../components/headers/HomeHeader";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SelectCountry } from 'react-native-element-dropdown';
import { AlignBottom, Buildings, MoneySend, ArrowCircleRight2 } from 'iconsax-react-native';
import HomeMessages from "../HomeMessages/HomeMessages";

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

    const { control, handleSubmit } = useForm<FormDataProps>({
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

    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader showProfileButton={true} />
            <View style={styles.containerInfos}>
                <Text style={styles.containerInfosTitleSelect}>Equipamento Ativo</Text>
                <Controller
                    name="monitoredPhase"
                    control={control}
                    render={({ field: { onChange, value } }) => (
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
                    <View>
                        <CardsIndcators usoMensal={122} potAcumulada={1233} equipamentos={12} />
                    </View>
                </View>
                <View style={styles.containerInfosLastMsg}>
                    <View style={styles.containerInfosLastMsgHeader}>
                        <Text style={styles.containerInfosLastMsgHeaderTitle}>Mensagens recentes</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", gap: 2 }}>
                            <Text>ver mais</Text>
                            <TouchableOpacity>
                                <ArrowCircleRight2 size="50" color="#1C5790" variant="Bold" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    
                </View>
            </View>
            <MenuComponent />
        </SafeAreaView >
    );
}

const CardsIndcators: React.FC<cardsProps> = ({ ...props }) => {
    return (
        <View style={styles.containerCardsMain}>
            <View style={styles.containerCardA}>
                <AlignBottom size="35" color="#F6B042" variant="TwoTone" />
                <Text style={styles.containerCardATitle}>{props.potAcumulada}</Text>
                <Text style={styles.containerCardText}>Pot. acumulada</Text>
            </View>
            <View style={styles.containerCardB}>
                <Buildings size="30" color="#96B562" variant="TwoTone" />
                <Text style={styles.containerCardBTitle}>{props.equipamentos}</Text>
                <Text style={styles.containerCardText}>Equipamentos</Text>
            </View>
            <View style={styles.containerCardC}>
                <MoneySend size="30" color="#4F7FAD" variant="TwoTone" />
                <Text style={styles.containerCardCTitle}>{props.usoMensal}</Text>
                <Text style={styles.containerCardText}>Uso mensal</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    containerInfos: {
        gap: 10,
        marginHorizontal: 13
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

    //containerInfosLastMsg
    containerInfosLastMsg: {
        marginVertical: 10,
        gap: 10
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
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.1)",
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
    },
});

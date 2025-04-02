import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modalize } from 'react-native-modalize';
import { Calendar } from 'react-native-calendars';
import { useState, useRef } from 'react';
import { ArrowLeft2 } from 'iconsax-react-native';

import { HomeHeader } from "../../components/headers/HomeHeader";
import MenuComponent from "../../components/menuComponent/MenuComponent";
import { UserPhoto } from "../../components/UserComponents/UserPhoto";
import BlueButton from "../../components/buttonsComponents/BlueButton";

export default function HomeTeste() {
    const modalizeRef = useRef<Modalize>(null);
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [markedDates, setMarkedDates] = useState({});

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onDayPress = (day: any) => {
        if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
            // Primeiro clique ou reiniciando a seleção
            const startDate = day.dateString;
            setSelectedStartDate(startDate);
            setSelectedEndDate('');
            setMarkedDates({
                [startDate]: {
                    startingDay: true,
                    color: '#1B4274',
                    textColor: 'white'
                }
            });
        } else {
            // Segundo clique - selecionando a data final
            const endDate = day.dateString;
            if (endDate >= selectedStartDate) {
                setSelectedEndDate(endDate);
                
                // Criar objeto de datas marcadas
                const dates: any = {};
                let currentDate = new Date(selectedStartDate);
                const end = new Date(endDate);
                
                while (currentDate <= end) {
                    const dateString = currentDate.toISOString().split('T')[0];
                    
                    if (dateString === selectedStartDate) {
                        dates[dateString] = {
                            startingDay: true,
                            color: '#1B4274',
                            textColor: 'white'
                        };
                    } else if (dateString === endDate) {
                        dates[dateString] = {
                            endingDay: true,
                            color: '#1B4274',
                            textColor: 'white'
                        };
                    } else {
                        dates[dateString] = {
                            color: '#1B4274',
                            textColor: 'white'
                        };
                    }
                    
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                
                setMarkedDates(dates);
            }
        }
    };

    const formatDateRange = () => {
        if (!selectedStartDate) return '';
        if (!selectedEndDate) return selectedStartDate;
        return `${selectedStartDate} - ${selectedEndDate}`;
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <HomeHeader showProfileButton={true} />

                {/* Conteúdo principal */}
                <View style={styles.content}>
                    <BlueButton 
                        title="Gerar Relatório" 
                        onPress={onOpen}
                    />
                </View>

                {/* Menu fixo na parte inferior */}
                <MenuComponent title={"Menu"} />

                {/* Modal do Calendário */}
                <Modalize
                    ref={modalizeRef}
                    adjustToContentHeight
                    modalStyle={styles.modal}
                    HeaderComponent={
                        <View style={styles.modalHeader}>
                            <TouchableOpacity 
                                onPress={() => modalizeRef.current?.close()}
                                style={styles.closeButton}
                            >
                                <ArrowLeft2 size={24} color="#1B4274" />
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>Selecione um período{'\n'}para o relatório</Text>
                        </View>
                    }
                >
                    <View style={styles.modalContent}>
                        <Calendar
                            onDayPress={onDayPress}
                            markedDates={markedDates}
                            markingType="period"
                            theme={{
                                calendarBackground: '#fff',
                                textSectionTitleColor: '#666',
                                selectedDayBackgroundColor: '#1B4274',
                                selectedDayTextColor: '#fff',
                                todayTextColor: '#1B4274',
                                dayTextColor: '#000',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#1B4274',
                                monthTextColor: '#000',
                                textMonthFontWeight: 'bold',
                                textDayFontSize: 14,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 12,
                                'stylesheet.calendar.header': {
                                    monthText: {
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        color: '#000',
                                        marginBottom: 5
                                    },
                                    dayHeader: {
                                        color: '#666',
                                        fontSize: 12,
                                        marginBottom: 10,
                                        textTransform: 'uppercase'
                                    }
                                }
                            }}
                        />
                        <View style={styles.dateRangeContainer}>
                            <Text style={styles.dateRangeText}>{formatDateRange()}</Text>
                        </View>
                        <BlueButton 
                            title="Gerar Relatório"
                            onPress={() => {
                                modalizeRef.current?.close();
                                // Adicione aqui a lógica para gerar o relatório
                            }}
                            style={styles.generateButton}
                        />
                    </View>
                </Modalize>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    modal: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: 'hidden',
    },
    modalHeader: {
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        backgroundColor: '#fff',
    },
    closeButton: {
        position: 'absolute',
        left: 20,
        top: 25,
        zIndex: 1,
        padding: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000',
        lineHeight: 24,
    },
    modalContent: {
        padding: 20,
        backgroundColor: '#fff',
    },
    dateRangeContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#F8F9FA',
        borderRadius: 8,
        alignItems: 'center',
    },
    dateRangeText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    generateButton: {
        marginTop: 20,
        marginBottom: 10,
    },
});
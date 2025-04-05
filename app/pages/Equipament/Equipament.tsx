import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Dimensions,
    ScrollView
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Notification, ArrowLeft2 } from "iconsax-react-native";
import { Calendar } from "react-native-calendars";
import { HomeHeader } from "../../components/headers/HomeHeader";
import MenuComponent from "../../components/menuComponent/MenuComponent";
import { UserPhoto } from "../../components/UserComponents/UserPhoto";
import ReturnButton from "../../components/ReturnButtonComponents/ReturnButton";
import Carousel, { ImageSlider } from "../../components/Carousel/Carousel";
import { Modalize } from "react-native-modalize";
import { useRef, useState, useEffect } from "react";
import CustomButton from "../../components/buttonsComponents/CustomButton";
import InputComponent from "../../components/InputComponent/InputComponent";

const { width } = Dimensions.get("window");

export default function Equipaments() {
    const modalizeRef = useRef<Modalize>(null);
    const [selectedStartDate, setSelectedStartDate] = useState("");
    const [selectedEndDate, setSelectedEndDate] = useState("");
    const [markedDates, setMarkedDates] = useState({});
    const [inputValue, setInputValue] = useState("");

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onDayPress = (day: any) => {
        if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
            const startDate = day.dateString;
            setSelectedStartDate(startDate);
            setSelectedEndDate("");
            setMarkedDates({
                [startDate]: {
                    startingDay: true,
                    color: "#1B4274",
                    textColor: "white"
                }
            });
        } else {
            const endDate = day.dateString;
            if (endDate >= selectedStartDate) {
                setSelectedEndDate(endDate);
                const dates: any = {};
                let currentDate = new Date(selectedStartDate);
                const end = new Date(endDate);
                while (currentDate <= end) {
                    const dateString = currentDate.toISOString().split("T")[0];
                    if (dateString === selectedStartDate) {
                        dates[dateString] = {
                            startingDay: true,
                            color: "#1B4274",
                            textColor: "white"
                        };
                    } else if (dateString === endDate) {
                        dates[dateString] = {
                            endingDay: true,
                            color: "#1B4274",
                            textColor: "white"
                        };
                    } else {
                        dates[dateString] = {
                            color: "#1B4274",
                            textColor: "white"
                        };
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                setMarkedDates(dates);
            }
        }
    };

    const formatDateRange = () => {
        if (!selectedStartDate) return "";
        if (!selectedEndDate) return selectedStartDate;
        return `${selectedStartDate} - ${selectedEndDate}`;
    };

    useEffect(() => {
        setInputValue(formatDateRange());
    }, [selectedStartDate, selectedEndDate]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView

                contentContainerStyle={{ paddingBottom: 80 }}>
                <View style={styles.container}>
                    <View style={styles.return_notification}>
                        <ReturnButton size={45} />
                        <TouchableOpacity style={styles.notificationButton}>
                            <Notification size={24} color="#2C2C2C" variant="TwoTone" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleContainer}>
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>Equipamento de testes</Text>
                            <Text style={styles.subTitle}>
                                Concessionária: Braga S.A UC: 1467041
                            </Text>
                        </View>
                        <View style={styles.power}>
                            <FontAwesomeIcon icon={faPowerOff} size={30} color="#96B562" />
                            <Text style={styles.powerText}>Ligado</Text>
                        </View>
                    </View>
                    <ReportBar />
                    <View>
                        <PhaseBar
                            phase="A"
                            voltage="132.01"
                            current="7.98"
                            power="-0.73"
                            realPower="-765.08"
                            color="#96B562"
                        />
                        <PhaseBar
                            phase="B"
                            voltage="132.01"
                            current="7.98"
                            power="-0.73"
                            realPower="-765.08"
                        />
                        <PhaseBar
                            phase="C"
                            voltage="132.01"
                            current="7.98"
                            power="-0.73"
                            realPower="-765.08"
                            color="#F6B042"
                        />
                    </View>
                    <View style={styles.content}>
                        <InputComponent
                            value={inputValue}
                            onChangeText={setInputValue}
                            style={{ width: 230, marginRight: 10 }}
                        />
                        <CustomButton
                            title="Gerar Relatório"
                            onPress={onOpen}
                            style={{
                                width: 152,
                                backgroundColor: "#F4F6FF",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            textStyle={{ fontWeight: "bold" }}
                        />
                    </View>
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
                                <Text style={styles.modalTitle}>
                                    Selecione um período{"\n"}para o relatório
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.modalContent}>
                            <Calendar
                                onDayPress={onDayPress}
                                markedDates={markedDates}
                                markingType="period"
                                theme={{
                                    calendarBackground: "#fff",
                                    textSectionTitleColor: "#666",
                                    selectedDayBackgroundColor: "#1B4274",
                                    selectedDayTextColor: "#fff",
                                    todayTextColor: "#1B4274",
                                    dayTextColor: "#000",
                                    textDisabledColor: "#d9e1e8",
                                    dotColor: "#1B4274",
                                    monthTextColor: "#000",
                                    textMonthFontWeight: "bold",
                                    textDayFontSize: 14,
                                    textMonthFontSize: 16,
                                    textDayHeaderFontSize: 12,
                                    "stylesheet.calendar.header": {
                                        monthText: {
                                            fontSize: 16,
                                            fontWeight: "bold",
                                            color: "#000",
                                            marginBottom: 5
                                        },
                                        dayHeader: {
                                            color: "#666",
                                            fontSize: 12,
                                            marginBottom: 10,
                                            textTransform: "uppercase"
                                        }
                                    }
                                }}
                            />
                            <View style={styles.dateRangeContainer}>
                                <Text style={styles.dateRangeText}>{formatDateRange()}</Text>
                            </View>
                            <CustomButton
                                variant="blue"
                                title="Gerar Relatório"
                                onPress={() => {
                                    modalizeRef.current?.close();
                                }}
                                style={styles.generateButton}
                            />
                        </View>
                    </Modalize>
                    <Carousel itemList={ImageSlider} />
                </View>
            </ScrollView>
            <MenuComponent title={"Menu"} />
        </SafeAreaView>
    );
}

const ReportBar = () => {
    return (
        <View style={styles.reportBar}>
            <Text style={styles.reportText}>Gerar relatório</Text>
            <FontAwesomeIcon icon={faFileExport} size={30} color="#1C5790" />
        </View>
    );
};

const PhaseBar = ({
    phase,
    voltage,
    current,
    power,
    realPower,
    color = "#1C5790"
}: {
    phase?: string;
    voltage?: string;
    current?: string;
    power?: string;
    realPower?: string;
    color?: string;
}) => {
    return (
        <View style={[styles.phaseBar, { backgroundColor: color }]}>
            <Text style={styles.phaseTitle}>Fase {phase}</Text>
            <View style={styles.subTitleContainer}>
                <Text style={styles.phaseSubTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{voltage}</Text>{" "}
                    Tensão (V)
                </Text>
                <Text style={styles.phaseSubTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{power}</Text>{" "}
                    Fator Potência
                </Text>
                <Text style={styles.phaseSubTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{current}</Text>{" "}
                    Corrente (A)
                </Text>
                <Text style={styles.phaseSubTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{realPower}</Text>{" "}
                    Potência Real (W)
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd",
        borderRadius: 10
    },
    itemText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    container: {
        paddingHorizontal: 13,
        minHeight: "100%",
        backgroundColor: "#FFFFFF"
    },
    return_notification: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    notificationButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center"
    },
    returnButton: {
        marginTop: 20,
        position: "absolute",
        top: Platform.OS === "ios" ? 50 : 20,
        left: 20,
        zIndex: 10
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 13,
        marginTop: 17
    },
    title: {
        flex: 1
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left"
    },
    subTitle: {
        textAlign: "left",
        marginTop: 4,
        fontSize: 10,
        color: "gray"
    },
    power: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    powerText: {
        fontSize: 10,
        color: "#96B562",
        marginLeft: 5
    },
    reportBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        height: 57,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 50,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)"
    },
    reportText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1C5790"
    },
    phaseBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1C5790",
        height: 100,
        paddingHorizontal: 18,
        marginVertical: 10,
        borderRadius: 15,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)"
    },
    phaseTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
        flex: 1
    },
    subTitleContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        width: "79%"
    },
    phaseSubTitle: {
        width: "50%",
        fontSize: 8,
        color: "#ffffff",
        textAlign: "right"
    },
    userPhoto: {
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        borderRadius: 35
    },
    content: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    modal: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: "hidden"
    },
    modalHeader: {
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
        backgroundColor: "#fff"
    },
    closeButton: {
        position: "absolute",
        left: 20,
        top: 25,
        zIndex: 1,
        padding: 5
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        color: "#000",
        lineHeight: 24
    },
    modalContent: {
        padding: 20,
        backgroundColor: "#fff"
    },
    dateRangeContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: "#F8F9FA",
        borderRadius: 8,
        alignItems: "center"
    },
    dateRangeText: {
        fontSize: 14,
        color: "#666",
        fontWeight: "500"
    },
    generateButton: {
        marginTop: 20,
        marginBottom: 10
    }
});

import { StyleSheet, Text, View, TouchableOpacity, Platform, Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Notification, Edit } from 'iconsax-react-native';
import { HomeHeader } from "../../components/headers/HomeHeader";
import MenuComponent from "../../components/menuComponent/MenuComponent";
import { UserPhoto } from "../../components/UserComponents/UserPhoto";
import ReturnButton from "../../components/ReturnButtonComponents/ReturnButton";
import Slider from "../../components/Carousel/Slider";
import { ImageSlider } from "../../components/Carousel/Slider";

const { width } = Dimensions.get("window");

export default function Equipaments() {
    return (
        <>

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>

                    <View style={styles.return_notification}>
                    <ReturnButton size={45} />
                        <TouchableOpacity style={styles.notificationButton}>
                            <Notification
                            size={24}
                            color="#2C2C2C"
                            variant="TwoTone"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleContainer}>
                        <View style={styles.title}>
                        <Text style={styles.textTitle} >Equipamento de testes</Text>
                        <Text style={styles.subTitle} >Concessionária: Braga S.A UC: 1467041</Text>
                        </View>

                        <View style={styles.power}>
                        <FontAwesomeIcon icon={faPowerOff} size={30} color="#96B562"/>
                        <Text style={styles.powerText}>Ligado</Text>
                        </View>
                    </View>

                    <ReportBar/>

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
                    {/* <Carousel/> */}
                    
                    <Slider itemList={ImageSlider} />


                </View>
                <MenuComponent title={"Menu"} />
            </SafeAreaView>
        </>
    );
}

const ReportBar = () => {
    return (
        <View style={styles.reportBar}>
            <Text style={styles.reportText}>Gerar relatório</Text>
            <FontAwesomeIcon icon={faFileExport} size={30} color="#1C5790"/>
        </View>
    );
};

const PhaseBar = ({phase, voltage, current, power, realPower, color = '#1C5790'}: {phase?: string, voltage?: string, current?: string, power?: string, realPower?: string, color?: string}) => {
    return (
        <View style={[styles.phaseBar, { backgroundColor: color }]}>
            <Text style={styles.phaseTitle}>Fase {phase}</Text>
            <View style={styles.subTitleContainer}>
                <Text style={styles.phaseSubTitle}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>{voltage}</Text> Tensão (V)</Text>
                <Text style={styles.phaseSubTitle}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>{power}</Text> Fator Potência</Text>
                <Text style={styles.phaseSubTitle}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>{current}</Text> Corrente (A)</Text>
                <Text style={styles.phaseSubTitle}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>{realPower}</Text> Potência Real (W)</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 10,
      },
      itemText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    container: {
        paddingHorizontal: 13,
        height: '100%',
        backgroundColor: "#FFFFFF",
    },
    
    return_notification: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    notificationButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },

    returnButton: {
        marginTop: 20,
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 20,
        left: 20,
        zIndex: 10,
    },

    titleContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginHorizontal: 13,
        marginTop: 17,
    },

    title: {
        flex: 1
    },

    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'left',
    },

    subTitle: {
        textAlign: 'left',
        marginTop: 4,
        fontSize: 10,
        color: 'gray',
    },

    power: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    powerText: {
        fontSize: 10,
        color: '#96B562',
        marginLeft: 5,
    },

    reportBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 57,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 50,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)"
    },
    reportText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1C5790',
    },

    phaseBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C5790',
        height: 100,
        paddingHorizontal: 18,
        marginVertical: 10,
        borderRadius: 15,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)"
        
    },
    phaseTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        flex: 1,
        // backgroundColor: 'red',
    },

    subTitleContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        width: '79%',
        // backgroundColor: 'red'
    },

    phaseSubTitle: {
        width: '50%',
        fontSize: 8,
        color: '#ffffff',
        textAlign: 'right'
    },

    userPhoto: {
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        borderRadius: 35,
    },
});

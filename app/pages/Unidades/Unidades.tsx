import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "../../components/headers/HomeHeader";
import MenuComponent from "../../components/menuComponent/MenuComponent";
import { StyleSheet, Text, View } from "react-native";
import InputSearch from "../../components/InputSearch/InputSearch";
import { FilterSearch, Buildings } from 'iconsax-react-native';


interface CardProps {
    unidadeConsum?: number;
    Local?: string;
}

export default function Unidades() {
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader showProfileButton={false} />
            <InputSearch />
            <View style={styles.containerInfos}>
                <Text style={styles.containerInfosTitle}>Unidades consumidoras (1)</Text>
                <FilterSearch size="20" color="#c9c9c9" />
            </View>
            <CardComponent unidadeConsum={1234567} Local={'Belém - PA'} />
            <MenuComponent />
        </SafeAreaView>
    )
}

const CardComponent: React.FC<CardProps> = ({ ...props }) => {
    return (
        <View style={styles.containerCard}>
            <View style={styles.containerCardIcon}>
                <Buildings size="32" color="#1C5790" variant="TwoTone" />
            </View>
            <View style={{ flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
                <Text style={styles.containerCardUC}>{props.unidadeConsum}</Text>
                <Text style={styles.containerCardLC}>{props.Local}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#FFFFFF", gap: 5
    },
    containerInfos: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    containerInfosTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#1C5790'
    },

    //cardComponent:
    containerCard: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 5,
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.2)",
    },

    containerCardIcon: {
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    },

    containerCardUC: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#1C5790",
    },

    containerCardLC: {
        color: "#bbbbbb",
    }
});
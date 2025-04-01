import { View, Text, StyleSheet } from "react-native";
import MenuComponent from "../../components/menuComponent/MenuComponent";
import { UserPhoto } from "../../components/UserComponents/UserPhoto";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "../../components/headers/HomeHeader";

export default function HomeTeste() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                

                {/* Teste: Header */}
                <HomeHeader/>
                
                {/* <Text>HomeTeste</Text> */}

                {/* Conteúdo principal - vai ocupar todo o espaço disponível */}
                {/* <View >
                    <Text>Testando </Text>
                </View> */}

                {/* Menu fixo na parte inferior */}
                <MenuComponent title={"Menu"} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1, // Ocupa toda a tela
        height: '100%',
        backgroundColor: "F5F5F5",
    },
    userPhoto:{
        position: 'absolute',
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        borderRadius: 35,
    }

});
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HomeHeader } from "../../components/headers/HomeHeader";
import MenuComponent from "../../components/menuComponent/MenuComponent";
import { UserPhoto } from "../../components/UserComponents/UserPhoto";

export default function HomeTeste() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                

                {/* Teste: Header */}
                <HomeHeader showProfileButton={true} />
                
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
        backgroundColor: "#FFFFFF",

    },
    container: {
        height: '100%',
        backgroundColor: "#FFFFFF",
    },
    userPhoto:{
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        borderRadius: 35,
    }

});
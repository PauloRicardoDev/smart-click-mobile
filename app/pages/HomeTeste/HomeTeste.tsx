import { View, Text, StyleSheet } from "react-native";
import MenuComponent from "../../components/menuComponent/MenuComponent";

export default function HomeTeste() {
    return (
        <View style={styles.container}>
            <Text>HomeTeste</Text>

            {/* Conteúdo principal - vai ocupar todo o espaço disponível */}
            <View >
              <Text>BHSsjvkkjvkjvkjvhj</Text>
            </View>

            {/* Menu fixo na parte inferior */}
            <MenuComponent title={"Menu"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda a tela
        height: '100%',
        backgroundColor: "#ff0000",
    },

});
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRef } from "react";
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";

import CustomButton from "../../components/buttonsComponents/CustomButton";
import InputComponent from "../../components/InputComponent/InputComponent";
import { RootStackParamList } from "../../navigation/types";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

export default function Welcome() {
  // links
  const handleOpenLink = (): void => {
    const url = "https://www.smartclick.eco.br/#form";

    Linking.openURL(url).catch(() => {
      Alert.alert("Erro", "Não foi possível abrir o link.");
    });
  };
  const openCreateAccount = (): void => {};
  const openRecoverPassword = (): void => {};
  // Modalize
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const PanelContent = () => (
    <View style={styles.panelContent}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.panelContent_img}
      />
      <Text style={styles.panelContent_title}>Acesse sua conta</Text>
      <Text style={styles.panelContent_subtitle}>
        Bem-vindo de volta, uma experiência incrível te aguarda.
      </Text>
      <View style={styles.panelContent_form}>
        <InputComponent
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          maxLength={150}
        />
        <InputComponent
          placeholder="Digite sua senha"
          keyboardType="default"
          secureTextEntry={true}
          maxLength={15}
        />
        <CustomButton
          variant="blue"
          style={{ width: 320 }}
          title={"Entrar"}
          onPress={openCreateAccount}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
          <Text style={styles.panelContent_form_brnRecover}>
            Esqueci a senha!
          </Text>
        </TouchableOpacity>
        <CustomButton
          variant="greenTransparent"
          style={{ width: 320 }}
          title={"Criar Conta"}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/background_welcome_pag.png")}
          style={styles.img}
        />
        <View style={styles.container_info}>
          <Text style={styles.container_info_title}>Smart Click</Text>
          <Text style={styles.container_info_subtitle}>
            Mais controle, mais economia e mais sustentabilidade.
          </Text>
          <CustomButton
            variant="greenTransparent"
            style={{ width: 320 }}
            title={"Saiba mais"}
            onPress={handleOpenLink}
          />
          <View style={styles.container_info_btns}>
            <CustomButton
              variant="blue"
              style={{ width: 155 }}
              title={"Entrar"}
              onPress={onOpen}
            />
            <CustomButton
              variant="blueTransparent"
              style={{ width: 155 }}
              title={"Criar Conta"}
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
        <Modalize
          ref={modalizeRef}
          adjustToContentHeight={true}
          handlePosition="inside"
        >
          <PanelContent />
        </Modalize>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  container_info: {
    padding: 16,
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  container_info_title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F6B042",
  },
  container_info_subtitle: {
    fontSize: 16,
    color: "#455A64",
    textAlign: "center",
  },
  container_info_btns: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
    width: 320,
  },
  text: {
    color: "black",
    fontSize: 16,
    marginBottom: 8,
  },
  // styles do painel
  panelContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 150,
    gap: 16,
  },
  panelContent_img: {
    width: 100,
    height: 100,
    marginBottom: 25,
  },
  panelContent_title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#F6B042",
  },
  panelContent_subtitle: {
    fontSize: 16,
    color: "#1C5790",
    textAlign: "center",
    width: 300,
  },
  panelContent_form: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 16,
  },
  panelContent_form_brnRecover: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#1C5790",
  },
});

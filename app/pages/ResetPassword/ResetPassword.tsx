import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import Toast from "react-native-toast-message";

import CustomButton from "../../components/buttonsComponents/CustomButton";
import InputComponent from "../../components/InputComponent/InputComponent";
import ReturnButton from "../../components/ReturnButtonComponents/ReturnButton";
import { RootStackParamList } from "../../navigation/types";

type ResetScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Reset"
>;

type FormDataProps = {
  email: string;
};

const ResetPassword = ({}) => {
  const handlePress = () => {};
  const [showResetForm, setShowResetForm] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<FormDataProps>();

  // Deve envia para o email o código de recuperação por meio de envio de um token via email
  async function handleResetPassword(data: FormDataProps) {
    try {
      setIsLoading(true);
      console.log(data);

      const isUserExists = false; // Simulação de verificação de usuário

      if (!isUserExists) {
        throw new Error("Usuário não encontrado");
      }

      sendToken();
      Toast.show({
        type: "success",
        text1: "Código enviado com sucesso",
        text2: "Verifique seu e-mail para redefinir sua senha.",
        position: "top",
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 100,
      });
    } catch (error) {
      console.log(error);

      Toast.show({
        type: "error",
        text1: "Erro ao enviar o código",
        text2: "Usuário não encontrado!",
        position: "top",
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 100,
      });
    } finally {
      setIsLoading(false);
    }
  }

  const sendToken = () => {
    setShowResetForm(!showResetForm);
  };

  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const navigation = useNavigation<ResetScreenNavigationProp>();

  const PanelContent = () => (
    <View style={styles.panelContent}>
      <Text style={styles.redefineText}>Senha alterada com sucesso!</Text>
      <Image
        style={styles.panelContent_img}
        source={require("../../../assets/images/recoverPasswordImage.png")}
      />
      <Text style={styles.panelContentText}>
        Parabéns! Sua senha foi recuperada com sucesso. Agora você pode acessar
        sua conta com tranquilidade. Caso precise de mais alguma ajuda, estamos
        à disposição!
      </Text>
      <Image
        style={styles.panelContent_imgFooter}
        source={require("../../../assets/images/scLogoRGB.png")}
      />
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/backgroundInitialScreens.png")}
          style={styles.img}
        />
        <View style={styles.returnButton}>
          <ReturnButton
            size={45}
            onPress={() => navigation.navigate("Welcome")}
          />
        </View>
      </View>
      <View style={styles.containerRedefine}>
        <Text style={styles.redefineText}>Redefinir sua senha</Text>
        <Text style={styles.redefineSubText}>
          Preencha os campos abaixo com atenção
        </Text>

        {!showResetForm && (
          <>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange } }) => (
                <InputComponent
                  placeholder="Digite seu e-mail"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  maxLength={150}
                  onChangeText={onChange}
                />
              )}
            />
            <CustomButton
              variant="blue"
              title="Enviar"
              onPress={handleSubmit(handleResetPassword)}
              isLoading={isLoading}
              style={{ width: 320 }}
            />
          </>
        )}

        {showResetForm && (
          <>
            <Text style={styles.redefineSubTextEmail}>
              Um código foi enviado para o seu e-mail. Por favor, insira o
              código abaixo para redefinir sua senha.
            </Text>
            <InputComponent placeholder="Código de recuperação" />
            <InputComponent secureTextEntry={true} placeholder="Nova senha" />
            <InputComponent
              secureTextEntry={true}
              placeholder="Confirme a nova senha"
            />
            <CustomButton
              variant="blue"
              title="Trocar senha"
              onPress={onOpen}
              style={{ width: 320 }}
            />
          </>
        )}

        <Text style={styles.redefineSubText}>Outras opções</Text>
        <CustomButton
          variant="greenTransparent"
          title="Criar conta"
          onPress={() => navigation.navigate("Welcome")}
          style={{ width: 320 }}
        />
        <CustomButton
          variant="blueTransparent"
          title="Fazer login"
          onPress={() => navigation.navigate("Welcome")}
          style={{ width: 320 }}
        />
        <Modalize
          ref={modalizeRef}
          adjustToContentHeight={true} // Ajusta altura automaticamente
          handlePosition="inside" // Alça do modal dentro do conteúdo
        >
          <PanelContent />
        </Modalize>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  returnButton: {
    marginTop: 60,
    marginLeft: 32,
    position: "absolute",
    top: 0,
    left: 0,
  },

  container: {
    flex: 1,
    position: "relative",
  },

  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 75,
    // backgroundColor: 'red',
    gap: 16,
  },

  containerRedefine: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    gap: 16,
  },

  redefineText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F6B042",
  },

  redefineSubText: {
    fontSize: 14,
    color: "#1C5790",
    margin: 2,
  },

  redefineSubTextEmail: {
    color: "#8CA1A9",
    width: 320,
    textAlign: "center",
  },

  panelContent: {
    marginTop: 64,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },

  panelContentText: {
    color: "#1C5790",
    width: 320,
    textAlign: "center",
    fontWeight: "bold",
  },

  panelContent_img: {
    width: 284,
    height: 279,
    margin: 25,
  },

  panelContent_imgFooter: {
    marginTop: 64,
    bottom: 0,
  },
});

export default ResetPassword;

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SelectCountry } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";

import BlueButton from "../../components/buttonsComponents/BlueButton";
import InputComponent from "../../components/InputComponent/InputComponent";
import ReturnButton from "../../components/ReturnButtonComponents/ReturnButton";
import { RootStackParamList } from "../../navigation/types";

type NewEquipamentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "NewEquipament"
>;

type FormDataProps = {
  equipmentName: string;
  macAddress: string;
  consumerUnit: string;
  description: string;
  uf: string;
  city: string;
  monitoredPhase: string;
  voltage: string;
};

const UpdateUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<FormDataProps>({
    defaultValues: {
      equipmentName: "",
      macAddress: "",
      consumerUnit: "",
      description: "",
      uf: "",
      city: "",
      monitoredPhase: "",
      voltage: "",
    },
  });

  async function handleCreateEquipament(data: FormDataProps) {
    try {
      setIsLoading(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const phaseOptions = [
    { value: "1", label: "Fase 1" },
    { value: "2", label: "Fase 2" },
    { value: "3", label: "Fase 3" },
  ];

  return (
    <View style={styles.mainContainer}>
      {/* Fundo de imagem que preenche toda a tela */}
      <Image
        source={require("../../../assets/images/backgroundInitialScreens.png")}
        style={styles.img}
      />

      {/* SafeAreaView para garantir que o conteúdo não se sobreponha às áreas do sistema */}
      <SafeAreaView style={styles.container}>
        <View style={styles.returnButton}>
          <ReturnButton size={45} />
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Cadastrar novo equipamento</Text>
            <Text style={styles.subtitle}>
              Preencha os campos abaixo com atenção
            </Text>

            {/* NOME DO EQUIPAMENTO */}
            <Controller
              name="equipmentName"
              control={control}
              render={({ field: { onChange } }) => (
                <InputComponent
                  placeholder="Nome do equipamento"
                  onChangeText={onChange}
                  keyboardType="default"
                  maxLength={200}
                />
              )}
            />

            {/* ENDEREÇO MAC */}
            <Controller
              name="macAddress"
              control={control}
              render={({ field: { onChange } }) => (
                <InputComponent
                  placeholder="Endereço MAC"
                  onChangeText={onChange}
                  keyboardType="email-address"
                  maxLength={150}
                />
              )}
            />

            {/* Consumer Unit */}
            <Controller
              name="consumerUnit"
              control={control}
              render={({ field: { onChange } }) => (
                <InputComponent
                  onChangeText={onChange}
                  placeholder="Unidade consumidora"
                  keyboardType="email-address"
                  maxLength={100}
                />
              )}
            />

            {/* DESCRIÇÃO */}
            <Controller
              name="description"
              control={control}
              render={({ field: { onChange } }) => (
                <InputComponent
                  numberOfLines={4}
                  multiline={true}
                  placeholder="Descrição"
                  onChangeText={onChange}
                  keyboardType="default"
                  maxLength={100}
                  style={styles.description}
                />
              )}
            />

            <View style={styles.container_low}>
              {/* UF */}
              <Controller
                name="uf"
                control={control}
                render={({ field: { onChange } }) => (
                  <InputComponent
                    placeholder="UF"
                    onChangeText={onChange}
                    keyboardType="default"
                    maxLength={100}
                    style={styles.components_low}
                  />
                )}
              />

              {/* CIDADE */}
              <Controller
                name="city"
                control={control}
                render={({ field: { onChange } }) => (
                  <InputComponent
                    onChangeText={onChange}
                    placeholder="Cidade"
                    keyboardType="default"
                    maxLength={100}
                    style={styles.components_low}
                  />
                )}
              />

              {/* FASE MONITORADA */}
              <Controller
                name="monitoredPhase"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <SelectCountry
                    style={styles.dropdown}
                    selectedTextStyle={styles.selectedTextStyle}
                    placeholderStyle={styles.placeholderStyle}
                    maxHeight={100}
                    value={value}
                    data={phaseOptions}
                    valueField="value"
                    labelField="label"
                    imageField="image"
                    placeholder="Fase monitorada"
                    searchPlaceholder="Search..."
                    onChange={(e) => {
                      onChange(e.value);
                    }}
                  />
                )}
              />

              {/* TENSÃO */}
              <Controller
                name="voltage"
                control={control}
                render={({ field: { onChange } }) => (
                  <InputComponent
                    onChangeText={onChange}
                    placeholder="Tensão(V)"
                    keyboardType="default"
                    maxLength={100}
                    style={styles.components_low}
                  />
                )}
              />
            </View>

            <BlueButton
              style={styles.submitButton}
              title="Cadastrar"
              onPress={handleSubmit(handleCreateEquipament)}
              isLoading={isLoading}
              disabled={isLoading}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "transparent", // Mesmo fundo para toda a tela
  },
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  returnButton: {
    alignSelf: "flex-start",
    marginTop: 16,
    marginLeft: 16,
    zIndex: 10,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F6B042",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#1C5790",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    height: 117,
    borderRadius: 25,
  },
  container_low: {
    width: 320,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    marginBottom: 10,
  },
  components_low: {
    width: 147,
    height: 60,
    borderRadius: 22,
  },
  dropdown: {
    height: 60,
    width: 148,
    backgroundColor: "#F1F4FF",
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#73737a",
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color: "#73737a",
  },
  submitButton: {
    width: 320,
    marginTop: 20,
    height: 56,
    borderRadius: 28,
  },
});

export default UpdateUserData;

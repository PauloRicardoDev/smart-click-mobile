import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import ReturnButton from "../../components/ReturnButtonComponents/ReturnButton";
import InputComponent from "../../components/InputComponent/InputComponent";
import BlueButton from "../../components/buttonsComponents/BlueButton";
import GreenBorderButton from "../../components/buttonsComponents/GreenBorderButton";
import BlueBorderButton from "../../components/buttonsComponents/BlueBorderButton";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/types";
import {useRef} from "react";
import {Modalize} from "react-native-modalize";
import { SelectCountry } from 'react-native-element-dropdown';


type NewEquipamentScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'NewEquipament'
>;

const UpdateUserData = ({}) => {
  const handlePress = () => {
  };
  
  const [showResetForm, setShowResetForm] = useState(false);
  const [phase, setphase] = useState('1');

  const local_data = [
    {
      value: '1',
      label: 'Fase 1',
    },
    {
      value: '2',
      label: 'Fase 2',
    },
    {
      value: '3',
      label: 'Fase 3',
    }
  ];

  const sendToken = () => {
    setShowResetForm(!showResetForm);
  };
  
  

  return (
    <>
        <View style={styles.container_form}>
            <Image
                source={require('../../../assets/images/backgroundInitialScreens.png')}
                style={styles.img}
            />

        <View style={styles.returnButton}>
                <ReturnButton size={45} />
        </View>

          <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardAvoidingView}
          >
              <ScrollView
                  contentContainerStyle={styles.scrollContent}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
              >

            <Text style={styles.title}>Cadastrar novo equipamento</Text>
            <Text style={styles.subtitle}>Preencha os campos abaixo com atenção</Text>

            <InputComponent
                placeholder="Nome do equipamento"
                keyboardType="default"
                maxLength={200}
            />
            <InputComponent
                placeholder="Endereço MAC"
                keyboardType="email-address"
                maxLength={150}
            />
            <InputComponent
                placeholder="Unidade consumidora*"
                keyboardType="default"
                maxLength={100}
            />
            <InputComponent
                placeholder="Descrição"
                keyboardType="default"
                maxLength={100}
                style={styles.description}
            />
            <View style={styles.container_low}>
                <InputComponent
                    placeholder="UF"
                    keyboardType="default"
                    maxLength={100}
                    style={styles.components_low}
                />
                <InputComponent
                    placeholder="Cidade"
                    keyboardType="default"
                    maxLength={100}
                    style={styles.components_low}
                />
                <SelectCountry
                    style={styles.dropdown}
                    selectedTextStyle={styles.selectedTextStyle}
                    placeholderStyle={styles.placeholderStyle}
                    maxHeight={100}
                    value={phase}
                    data={local_data}
                    valueField="value"
                    labelField="label"
                    imageField="image"
                    placeholder="Fase monitorada"
                    searchPlaceholder="Search..."
                    onChange={e => {
                    setphase(e.value);
                    }}
                />
                <InputComponent
                    placeholder="Tensão(V)"
                    keyboardType="default"
                    maxLength={100}
                    style={styles.components_low}
                />
                </View>
            <BlueButton style={{width: 320}} title={'Finalizar edição'} />
        </ScrollView>
        </KeyboardAvoidingView>
        </View>

    </>
  );
}

const styles = StyleSheet.create({
  img: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
  },
  returnButton: {
      marginTop: 32,
      marginLeft: 32,
      position: 'absolute',
      top: 0,
      left: 0,
  },

  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 20,
    // backgroundColor: 'red',
    gap: 16
  },

  container: {
      flex: 1,
      position: 'relative',
  },
  container_form: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      gap: 16,
  },
  title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#F6B042',
      textAlign: 'center'
  },
  subtitle: {
      fontSize: 14,
      color: '#1C5790',
      marginBottom: 24,
  },
  
  
  panelContent: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
      gap: 30,
  },
  
  panelContent_title:{
      width: 300,
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      color: '#96B562',
  },
  panelContent_img: {
      width: 300,
      height: 300,
  },
  panelContent_subtitle:{
      fontSize: 16,
      color: '#1C5790',
      textAlign: 'center',
      width: 300,
  },

  description: {
    height: 117,
    borderRadius: 25,
  },

  container_low: {
    marginHorizontal: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },

  components_low: {
    // backgroundColor: 'red',
    width: 147,
    height: 60,
    borderRadius: 22,
  },

  dropdown: {
    // margin: 16,
    height: 60,
    width: 148,
    backgroundColor: '#F1F4FF',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'res'
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color: '#73737a'
  },

  });
  
  
  export default UpdateUserData;
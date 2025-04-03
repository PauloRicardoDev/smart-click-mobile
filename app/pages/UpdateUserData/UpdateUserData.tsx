import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BlueBorderButton from "../../components/buttonsComponents/BlueBorderButton";
import CustomButton from '../../components/buttonsComponents/CustomButton';
import GreenBorderButton from "../../components/buttonsComponents/GreenBorderButton";
import InputComponent from "../../components/InputComponent/InputComponent";
import ReturnButton from "../../components/ReturnButtonComponents/ReturnButton";

const UpdateUserData = ({}) => {
  const handlePress = () => {
  };
  
  const [showResetForm, setShowResetForm] = useState(false);
  
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

          <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardAvoidingView}
          >
              <ScrollView
                  contentContainerStyle={styles.scrollContent}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
              >

            <Text style={styles.title}>Atualizar dados</Text>
            <Text style={styles.subtitle}>Preencha os campos abaixo com atenção</Text>

            <InputComponent
                placeholder="Digite seu nome completo"
                keyboardType="default"
                maxLength={200}
            />
            <InputComponent
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                maxLength={150}
            />
            <InputComponent
                placeholder="Digite uma senha"
                keyboardType="default"
                secureTextEntry={true}
                maxLength={15}
            />
            <InputComponent
                placeholder="Confirme a senha"
                keyboardType="default"
                secureTextEntry={true}
                maxLength={15}
            />
            <CustomButton variant='blue' style={{width: 320}} title={'Finalizar edição'} />
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
    marginVertical: 45,
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
  
  });
  
  
  export default UpdateUserData;
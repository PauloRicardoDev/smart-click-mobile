import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ReturnButton from "../../components/ReturnButtonComponents/ReturnButton";
import InputComponent from "../../components/InputComponent/InputComponent";
import GreenBorderButton from "../../components/buttonsComponents/GreenBorderButton";
import BlueBorderButton from "../../components/buttonsComponents/BlueBorderButton";
import BlueButton from "../../components/buttonsComponents/BlueButton";


const ResetPassword = ({}) => {
    const handlePress = () => {
    };

    const [showResetForm, setShowResetForm] = useState(false);

    const sendToken = () => {
        setShowResetForm(!showResetForm);
    };


    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/backgroundInitialScreens.png')}
                    style={styles.img}
                />
                <View style={styles.returnButton}>
                    <ReturnButton size={45} onPress={sendToken}/>
                </View>
            </View>
            <View style={styles.containerRedefine}>
                <Text
                    style={styles.redefineText}>
                    Redefinir sua senha
                </Text>
                <Text
                    style={styles.redefineSubText}>
                    Preencha os campos abaixo com atenção
                </Text>

                {!showResetForm && (
                    <>
                        <InputComponent keyboardType="email-address" placeholder='Email'/>
                        <BlueButton title='Enviar' onPress={sendToken} style={{width: 320}}/>
                    </>
                )}

                {showResetForm && (
                    <>
                        <Text style={styles.redefineSubTextEmail}>
                            Um código foi enviado para o seu e-mail. Por favor, insira o código abaixo para redefinir
                            sua senha.
                        </Text>
                        <InputComponent placeholder='Código de recuperação'/>
                        <InputComponent secureTextEntry={true} placeholder='Nova senha'/>
                        <InputComponent secureTextEntry={true} placeholder='Confirme a nova senha'/>
                        <BlueButton title='Trocar senha' onPress={sendToken} style={{width: 320}}/>
                    </>
                )
                }

                <Text
                    style={styles.redefineSubText}>
                    Outras opções
                </Text>
                <GreenBorderButton title='Criar conta' onPress={handlePress} style={{width: 320}}/>
                <BlueBorderButton title='Fazer login' onPress={handlePress} style={{width: 320}}/>
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

    container: {
        flex: 1,
        position: 'relative',
    },

    keyboardAvoidingView: {
        flex: 1,
      },
      scrollContent: {
        flexGrow: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 75,
        // backgroundColor: 'red',
        gap: 16
      },

    containerRedefine: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        gap: 16,
    },

    redefineText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F6B042',
    },

    redefineSubText: {
        fontSize: 14,
        color: '#1C5790',
    },

    redefineSubTextEmail: {
        color: '#8CA1A9',
        width: 320,
        textAlign: 'center',
    },

    panelContent: {
        marginTop: 64,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },

    panelContentText: {
        color: '#1C5790',
        width: 320,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    panelContent_img: {
        width: 284,
        height: 279,
        margin: 25,
    },

    panelContent_imgFooter: {
        marginTop: 64,
        bottom: 0,
    }

});


export default ResetPassword;
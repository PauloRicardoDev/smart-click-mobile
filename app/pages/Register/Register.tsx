import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from "react-native";
import ReturnButton from "../../components/ReturnButtonComponents/ReturnButton";
import InputComponent from "../../components/InputComponent/InputComponent";
import BlueButton from "../../components/buttonsComponents/BlueButton";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/types";
import {useRef} from "react";
import {Modalize} from "react-native-modalize";
import {GestureHandlerRootView} from "react-native-gesture-handler";


type RegisterScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Register'
>;

export default function Register() {

    const create = () => {
        onOpen()
    }
    const navigation = useNavigation<RegisterScreenNavigationProp>();
    const modalizeRef = useRef<Modalize>(null);
    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const PanelContent = () => (
        <View style={styles.panelContent}>
            <Text style={styles.panelContent_title}>Conta criada com sucesso</Text>
            <Image
                source={require('../../../assets/images/accontSave.png')}
                style={styles.panelContent_img}
            />
            <Text style={styles.panelContent_subtitle}>
                Seja muito bem-vindo(a)! Uma experiência incrível te aguarda por aqui. Aproveite ao máximo e conte com a gente sempre que precisar!
            </Text>
            <Image
                style={styles.panelContent_imgFooter}
                source={require('../../../assets/images/scLogoRGB.png')}
            />
        </View>
    );

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <Image
                    source={require('../../../assets/images/backgroundInitialScreens.png')}
                    style={styles.backgroundImage}
                />

                <View style={styles.returnButtonContainer}>
                    <ReturnButton onPress={() => navigation.navigate('Welcome')} size={45} />
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
                        <Text style={styles.scrollContentTitle}>Criar conta</Text>
                        <Text style={styles.scrollContentSubtitle}>Preencha os campos abaixo com atenção</Text>

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
                        <InputComponent
                            placeholder="Número da Unidade Consumidora"
                            keyboardType="number-pad"
                            maxLength={200}
                        />

                        <BlueButton style={styles.registerButton} title={'Cadastrar'} onPress={create} />
                    </ScrollView>
                </KeyboardAvoidingView>
                <Modalize
                    ref={modalizeRef}
                    adjustToContentHeight={true}
                    handlePosition="inside"
                >
                    <PanelContent />
                </Modalize>
            </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'relative',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    returnButtonContainer: {
        marginTop: 20,
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 20,
        left: 20,
        zIndex: 10,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 100,
        gap: 16
    },
    scrollContentTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#F6B042',
    },
    scrollContentSubtitle: {
        fontSize: 14,
        color: '#1C5790'
    },
    registerButton: {
        width: 320,
    },
    // painel
    panelContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 120,
        gap: 30,
    },
    panelContent_title: {
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
    panelContent_subtitle: {
        fontSize: 16,
        color: '#1C5790',
        textAlign: 'center',
        width: 300,
    },
    panelContent_imgFooter: {
        position: 'absolute',
        bottom: 0,
    }
});
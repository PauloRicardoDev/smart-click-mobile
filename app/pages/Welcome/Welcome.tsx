import {Image, Text, View, StyleSheet, TouchableOpacity, Linking, Alert} from 'react-native';
import GreenBorderButton from "../../components/buttonsComponents/GreenBorderButton";
import BlueButton from "../../components/buttonsComponents/BlueButton";
import BlueBorderButton from "../../components/buttonsComponents/BlueBorderButton";
import {useRef} from "react";
import {Modalize} from "react-native-modalize";
import InputComponent from "../../components/InputComponent/InputComponent";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/types";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Welcome'
>;

export default function Welcome() {

    // links
    const handleOpenLink = (): void => {
        const url = 'https://www.smartclick.eco.br/#form';

        Linking.openURL(url).catch(() => {
            Alert.alert('Erro', 'Não foi possível abrir o link.');
        });
    };
    const openCreateAccount = (): void => {
    };
    const openRecoverPassword = (): void => {
    };
    // Modalize
    const navigation = useNavigation<WelcomeScreenNavigationProp>();
    const modalizeRef = useRef<Modalize>(null);
    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const PanelContent = () => (
        <View style={styles.panelContent}>
            <Image
                source={require('../../../assets/images/logo.png')}
                style={ styles.panelContent_img}
            />
            <Text style={styles.panelContent_title}>Acesse sua conta</Text>
            <Text style={styles.panelContent_subtitle}>Bem-vindo de volta, uma experiência incrível te aguarda.</Text>
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
                <BlueButton style={{width: 320}} title={'Entrar'} onPress={openCreateAccount}/>
                <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
                    <Text style={styles.panelContent_form_brnRecover}>
                        Esqueci a senha!
                    </Text>
                </TouchableOpacity>
                <GreenBorderButton
                    style={{width: 320}}
                    title={'Criar Conta'}
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </View>
    );

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/background_welcome_pag.png')}
                    style={styles.img}
                />
                <View style={styles.container_info}>
                    <Text style={styles.container_info_title}>Smart Click</Text>
                    <Text style={styles.container_info_subtitle}>
                        Mais controle, mais economia e mais sustentabilidade.
                    </Text>
                    <GreenBorderButton
                        style={{ width: 320 }}
                        title={'Saiba mais'}
                        onPress={handleOpenLink}
                    />
                    <View style={styles.container_info_btns}>
                        <BlueButton
                            style={{ width: 155 }}
                            title={'Entrar'}
                            onPress={onOpen}
                        />
                        <BlueBorderButton
                            style={{ width: 155 }}
                            title={'Criar Conta'}
                            onPress={() => navigation.navigate('Register')}
                        />
                    </View>
                </View>
                <Modalize
                    ref={modalizeRef}
                    adjustToContentHeight={true} // Ajusta altura automaticamente
                    handlePosition="inside" // Alça do modal dentro do conteúdo
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
        position: 'relative',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    container_info: {
        padding: 16,
        position: 'absolute',
        bottom: 0,
        marginBottom: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },
    container_info_title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#F6B042',
    },
    container_info_subtitle:{
        fontSize: 16,
        color: '#455A64',
        textAlign: 'center',
    },
    container_info_btns:{
        flexDirection: 'row',
        gap:16,
        justifyContent: 'center',
        width: 320
    },
    text: {
        color:'black',
        fontSize: 16,
        marginBottom: 8
    },
    // styles do painel
    panelContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 150,
        gap: 16,
    },
    panelContent_img: {
        width: 100,
        height: 100,
        marginBottom: 25,
    },
    panelContent_title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F6B042',
    },
    panelContent_subtitle:{
        fontSize: 16,
        color: '#1C5790',
        textAlign: 'center',
        width: 300,
    },
    panelContent_form:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 16,
    },
    panelContent_form_brnRecover:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#1C5790',
    }
});
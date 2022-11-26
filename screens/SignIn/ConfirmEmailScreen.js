import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('Home');
    };

    const onResendPressed = () => {
        console.warn('Resend');
    };

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput
                    placeholder='Enter your confirmation code'
                    value={code}
                    setValue={setCode}
                />

                <CustomButton
                    text='Confirm'
                    onPress={onConfirmPressed}
                />
                <CustomButton
                    text='Resend Code'
                    onPress={onResendPressed}
                    type='SECONDARY'
                />
                <CustomButton
                    text='Back to Sign In'
                    onPress={onSignInPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white'

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#221F20',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    }
})

export default ConfirmEmailScreen;
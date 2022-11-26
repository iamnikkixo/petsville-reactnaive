import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('Home');
    };


    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    placeholder='Email'
                    value={email}
                    setValue={setEmail}
                />

                <CustomButton
                    text='Send'
                    onPress={onSendPressed}
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

export default ForgotPasswordScreen;
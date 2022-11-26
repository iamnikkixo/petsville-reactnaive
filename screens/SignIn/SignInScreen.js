import { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import logo from '../../assets/images/logoblack.png';
import CustomSocialInput from '../../components/CustomInput/CustomSocialInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPress = () => {
        navigation.navigate('Home');
    };

    const onForgotPasswordPress = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />
                <CustomSocialInput
                    iconName='user-o'
                    iconColor='gray'
                    placeholder='Email'
                    value={email}
                    setValue={setEmail}
                />
                <CustomSocialInput
                    iconName='lock'
                    iconColor='gray'
                    placeholder='Password'
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomButton
                    text='Sign In'
                    onPress={onSignInPress}
                />
                <CustomButton
                    text='Forgot Password?'
                    onPress={onForgotPasswordPress}
                    type='TERTIARY'
                />
                <SocialSignInButtons />
                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
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
    logo: {
        flex: 1,
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        margin: 25
    },
})

export default SignInScreen
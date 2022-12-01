import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomSocialInput from '../../components/CustomInput/CustomSocialInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';


const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const onRegisterPressed = () => {
        navigation.navigate('OwnerInfo')
    };

    const onTermsOfUsePressed = () => {
        console.warn('Terms of Use');
        navigation.navigate('SignIn');
    };
    const onPrivacyPressed = () => {
        console.warn('Privacy Policy');
    };

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
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
                <CustomSocialInput
                    iconName='lock'
                    iconColor='gray'
                    placeholder='Confirm Password'
                    value={passwordConfirm}
                    setValue={setPasswordConfirm}
                    secureTextEntry={true}
                />
                <CustomButton
                    text='Register'
                    onPress={onRegisterPressed}
                />
                <Text style={styles.text}>By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text>
                <SocialSignInButtons />
                <CustomButton
                    text="Have an account? Sign in"
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

export default SignUpScreen
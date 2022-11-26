import CustomSocialButton from '../CustomButton/CustomSocialButton';

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn('Sign In with Facebook');
    };
    const onSignInGoogle = () => {
        console.warn('Sign In with Google');
    };
    const onSignInApple = () => {
        console.warn('Sign In with Apple');
    };

    return (
        <>
            <CustomSocialButton
                iconName='facebook'
                text='Sign In with Facebook'
                onPress={onSignInFacebook}
                bgColor='#E7EAF4'
                fgColor='#4765A9'
            />

            <CustomSocialButton
                iconName='google-plus'
                text='Sign In with Google'
                onPress={onSignInGoogle}
                bgColor='#FAE9EA'
                fgColor='#DD4D44'
            />
            <CustomSocialButton
                iconName='apple'
                text='Sign In with Apple'
                onPress={onSignInApple}
                bgColor='#E3E3E3'
                fgColor='#363636'
            />
        </>
    )
}

export default SocialSignInButtons
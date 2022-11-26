import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Icon, Button } from 'react-native-elements';


const CustomSocialButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor, iconName }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}
            ]}
        >
            <Icon
                name={iconName}
                type='font-awesome'
                size={20}
                color={fgColor}
                style={styles.icon}
            />
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}
            ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2
    },

    container_TERTIARY: {

    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_SECONDARY: {
        color: '#3B71F3'
    },

    text_TERTIARY: {
        color: 'gray'
    },
    icon: {
        paddingHorizontal: 15,
    },

})

export default CustomSocialButton;
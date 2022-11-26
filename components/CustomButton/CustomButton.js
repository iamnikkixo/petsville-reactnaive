import { View, Text, StyleSheet,Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor} : {}
        ]}>
      <Text style={[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? { color: fgColor } : {}
        ]}>{text}</Text>
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
    },

    container_PRIMARY: {
        backgroundColor: '#15761A',
    },

    container_SECONDARY: {
      borderColor: '#15761A',
      borderWidth: 1
    },

    container_TERTIARY: {

    },

    text: {
        fontWeight: 'bold',
        color: 'white'
    },

    text_SECONDARY: {
        color: '#15761A'
    },

    text_TERTIARY: {
        color: 'gray'
    }

})

export default CustomButton;
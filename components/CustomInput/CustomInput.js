import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue} 
                placeholder={placeholder} 
                style={styles.input}
                secureTextEntry={secureTextEntry} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'

    },
})

export default CustomInput
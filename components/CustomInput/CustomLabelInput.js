import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomLabelInput = ( { label, value, setValue }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 5
    },
    label: {
        marginBottom: 5,
        paddingHorizontal: 5,
        fontSize: 14
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e8e8e8',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: 'gray',
    }
})

export default CustomLabelInput
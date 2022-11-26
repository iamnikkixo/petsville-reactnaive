import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';


const CustomCheckBox = ({ value, setValue, label }) => {
    return (
        <View style={styles.container}>
            <CheckBox
                title={label}
                iconType='material-community'
                checkedIcon='check-circle-outline'
                checkedColor='green'
                uncheckedIcon='checkbox-blank-circle-outline'
                checked={value}
                onPress={setValue}
                containerStyle={styles.checkbox}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,

    },
    checkbox: {
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
        borderWidth: 0,


    }
})

export default CustomCheckBox;
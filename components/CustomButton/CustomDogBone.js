
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

const CustomDogBone = () => {
    return (
        <View containerStyle={styles.container}>
            <Icon
                name='bone'
                type='material-community'
                color='#7D4427'
                size={120}
                style={styles.icon}
            />
            <Text style={styles.text}>Dog #1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
    },
    icon: {
        position: 'relative',
        left: 0,
    },
    text: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'black',
        top: 50,
        left: 36,
    }
})

export default CustomDogBone;
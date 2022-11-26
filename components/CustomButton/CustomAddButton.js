import { Pressable, StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements'


const CustomAddButton = ( {onPress, label, disabled} ) => {
  return (
    <Pressable style={styles.container}>
      <Icon 
        name='plus-circle'
        type='font-awesome'
        style={styles.icon}
        color='#1EA124'
        onPress={onPress}
        disabled={disabled}
      />
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 10, 
    },
    text: {
        marginLeft: 10
    }
})

export default CustomAddButton;
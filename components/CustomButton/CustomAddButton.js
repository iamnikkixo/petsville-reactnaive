import { Pressable, StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { IconButton } from 'react-native-paper'


const CustomAddButton = ({ onPress, label, disabled }) => {
  return (
    <Pressable style={styles.container}>
      <IconButton
        icon="plus-circle"
        color='#1EA124'
        size={25}
        onPress={onPress}
        disabled={disabled}
      />
      <Text>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5,
  },

})

export default CustomAddButton;
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import CustomLabelInput from '../../components/CustomInput/CustomLabelInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';


const PartnerInfoScreen = ({ navigation }) => {
  const [partnerPickUp, setPartnerPickUp] = useState(false);
  const [pFirstName, setPFirstName] = useState('');
  const [pLastName, setPLastName] = useState('');
  const [pPhoneNum, setPPhoneNum] = useState('');
  const [pEmail, setPEmail] = useState('');

  const onNextPressed = () => {
    navigation.navigate('EmergencyInfo');
  };

  const onPreviousPressed = () => {
    navigation.navigate('OwnerInfo');
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Partner Information</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          label='Authorised Pick-Up?'
          status={partnerPickUp ? 'checked' : 'unchecked'}
          onPress={() => {
            setPartnerPickUp(!partnerPickUp);
          }}
        />
        <Text>Authorised Pick-Up?</Text>
      </View>
      <CustomLabelInput
        label='First Name'
        value={pFirstName}
        setValue={setPFirstName}
      />
      <CustomLabelInput
        label='Last Name'
        value={pLastName}
        setValue={setPLastName}
      />
      <CustomLabelInput
        label='Phone Number'
        value={pPhoneNum}
        setValue={setPPhoneNum}
      />
      <CustomLabelInput
        label='Email'
        value={pEmail}
        setValue={setPEmail}
      />
      <CustomButton
        text="Next"
        onPress={onNextPressed}
        style={{ margin: 10 }}
      />
      <CustomButton
        text="Previous"
        onPress={onPreviousPressed}
        style={{ margin: 10 }}
        type='SECONDARY'
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#221F20',
    marginBottom: 30,
  }
})

export default PartnerInfoScreen;
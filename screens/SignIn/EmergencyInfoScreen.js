import { ScrollView, Text, StyleSheet, View } from 'react-native';
import CustomLabelInput from '../../components/CustomInput/CustomLabelInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const EmergencyInfoScreen = () => {
  const [emergencyPickUp, setEmergencyPickUp ] = useState(false);
  const [eFirstName, setEFirstName] = useState('');
  const [eLastName, setELastName] = useState('');
  const [ePhoneNum, setEPhoneNum] = useState('');
  const [eEmail, setEEmail] = useState('');

  const navigation = useNavigation();

  const onNextPressed = () => {
    navigation.navigate('VetInfo');
  };

  const onPreviousPressed = () => {
    navigation.navigate('PartnerInfo');
  };



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Emergency Contact</Text>
      <CustomCheckBox
        label='Authorised Pick-Up?'
        value={emergencyPickUp}
        setValue={() => setEmergencyPickUp(!emergencyPickUp)}
      />
      <CustomLabelInput
        label='First Name'
        value={eFirstName}
        setValue={setEFirstName}
      />
      <CustomLabelInput
        label='Last Name'
        value={eLastName}
        setValue={setELastName}
      />
      <CustomLabelInput
        label='Phone Number'
        value={ePhoneNum}
        setValue={setEPhoneNum}
      />
      <CustomLabelInput
        label='Email'
        value={eEmail}
        setValue={setEEmail}
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

export default EmergencyInfoScreen;
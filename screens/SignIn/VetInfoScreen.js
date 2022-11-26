import { ScrollView, Text, StyleSheet, View } from 'react-native';
import CustomLabelInput from '../../components/CustomInput/CustomLabelInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const VetInfoScreen = () => {
  const [clinicName, setClinicName] = useState('');
  const [clinicAddress, setClinicAddress] = useState('');
  const [clinicCity, setClinicCity] = useState('');
  const [clinicCountry, setClinicCountry] = useState('');
  const [clinicPhoneNum, setClinicPhoneNum] = useState('');
  const [vetName, setVetName] = useState('');

  const navigation = useNavigation();

  const onNextPressed = () => {
    navigation.navigate('DogInfo');
  };

  const onPreviousPressed = () => {
    navigation.navigate('EmergencyInfo');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Veterinarian</Text>
      <CustomLabelInput
        label='Clinic Name'
        value={clinicName}
        setValue={setClinicName}
      />
      <CustomLabelInput
        label='Address'
        value={clinicAddress}
        setValue={setClinicAddress}
      />
      <CustomLabelInput
        label='City'
        value={clinicCity}
        setValue={setClinicCity}
      />
      <CustomLabelInput
        label='Country'
        value={clinicCountry}
        setValue={setClinicCountry}
      />
      <CustomLabelInput
        label='Phone Number'
        value={clinicPhoneNum}
        setValue={setClinicPhoneNum}
      />
      <CustomLabelInput
        label='Doctor Name'
        value={vetName}
        setValue={setVetName}
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

export default VetInfoScreen;
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import CustomLabelInput from '../../components/CustomInput/CustomLabelInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const OwnerInfoScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const navigation = useNavigation();

  const onNextPressed = () => {
    navigation.navigate('PartnerInfo');
  };

  const onPrevPressed = () => {
    navigation.navigate('SignUp');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Owner Information</Text>

      <CustomLabelInput
        label='First Name'
        value={firstName}
        setValue={setFirstName}
      />
      <CustomLabelInput
        label='Last Name'
        value={lastName}
        setValue={setLastName}
      />


      <CustomLabelInput
        label='Street Address'
        value={address}
        setValue={setAddress}
      />
      <CustomLabelInput
        label='City'
        value={city}
        setValue={setCity}
      />
      <CustomLabelInput
        label='Country'
        value={country}
        setValue={setCountry}
      />
      <CustomLabelInput
        label='Phone Number'
        value={phoneNum}
        setValue={setPhoneNum}
      />
      <CustomButton
        text="Next"
        onPress={onNextPressed}
        style={{ margin: 10 }}
      />
      <CustomButton
        text="Previous"
        onPress={onPrevPressed}
        type='SECONDARY'
        style={{ margin: 10 }}

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

export default OwnerInfoScreen;
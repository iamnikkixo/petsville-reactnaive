import { ScrollView, Text, StyleSheet, Button, View } from 'react-native';
import CustomLabelInput from '../../components/CustomInput/CustomLabelInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomAddButton from '../../components/CustomButton/CustomAddButton';
import { useState } from 'react';



const DogInfoScreen = ({navigation}) => {
    const [dogName, setDogName] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [weight, setWeight] = useState('');
    const [sex, setSex] = useState('');
    const [desex, setDesex] = useState('');
    const [coatColor, setCoatColor] = useState('');
    const [microchipNum, setMicrochipNum] = useState('');
    const [favToy, setFavToy] = useState('');
    const [favMeal, setFavMeal] = useState('');
    const [favTreat, setFavTreat] = useState('');
    const [dogNum, setDogNum] = useState(1);


    const onAddDogGenInfoPressed = () => {
        setDogNum(dogNum + 1);
        setAddDog([...addDog, <AddDog />]);
    };

    const onRemoveDogPressed = () => {
        setAddDog(addDog.filter((v, i) => i != addDog.length - 1))
    }

    const onPreviousPressed = () => {
        navigation.navigate('VetInfo');
    };

    const onNextPressed = () => {
        console.warn('Done');
        navigation.navigate('DogHealth');
    };

    const AddDog = () => {
        return (
            <View>
                <Text style={{ fontWeight: 'bold' }}>Dog #{dogNum}</Text>
                <CustomLabelInput
                    label='Name of Dog'
                    value={dogName}
                    setValue={setDogName}
                />
                <View style='styles.containerRow'>
                    <CustomLabelInput
                        label='Date of Birth (if known)'
                        value={dob}
                        setValue={setDob}
                    />
                    <CustomLabelInput
                        label='Age'
                        value={age}
                        setValue={setAge}
                    />
                </View>
                <CustomLabelInput
                    label='Breed'
                    value={breed}
                    setValue={setBreed}
                />
                <CustomLabelInput
                    label='Weight'
                    value={weight}
                    setValue={setWeight}
                />
                <CustomLabelInput
                    label='Sex'
                    value={sex}
                    setValue={setSex}
                />
                <CustomLabelInput
                    label='Desex'
                    value={desex}
                    setValue={setDesex}
                />
                <CustomLabelInput
                    label='Coat Color'
                    value={coatColor}
                    setValue={setCoatColor}
                />
                <CustomLabelInput
                    label='Microchip Number'
                    value={microchipNum}
                    setValue={setMicrochipNum}
                />
                <CustomLabelInput
                    label='Favourite Toy'
                    value={favToy}
                    setValue={setFavToy}
                />
                <CustomLabelInput
                    label='Favourite Treat'
                    value={favTreat}
                    setValue={setFavTreat}
                />
                <CustomLabelInput
                    label='Favourite Meal'
                    value={favMeal}
                    setValue={setFavMeal}
                />
            </View>
        )
    }

    const [addDog, setAddDog] = useState([<AddDog key={1} />])



    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Dog Information</Text>
            <Text style={styles.subheader}>General Information</Text>
            {addDog.map(elem => elem)}
            <CustomAddButton onPress={onAddDogGenInfoPressed} label='More than 1 Dog?' />
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
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'blue',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#221F20',
        marginBottom: 20,
    },
    subheader: {
        fontSize: 18,
        color: 'brown',
        marginBottom: 15,
    }
})

export default DogInfoScreen;
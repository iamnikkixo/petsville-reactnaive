import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { BEHAVIOUR } from '../../shared/behaviour';
import { useState } from 'react';
import { TRAITS } from '../../shared/traits';
import CustomLabelInput from '../../components/CustomInput/CustomLabelInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox';


const DogBehaviourScreen = ({ navigation }) => {
    const [behaviours, setBehaviour] = useState(BEHAVIOUR);
    const [traits, setTraits] = useState(TRAITS);

    const onPreviousPressed = () => {
        navigation.navigate('DogHealth');
    };
    const onSubmitPressed = () => {
        navigation.navigate('Home');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Dog Information</Text>
            <Text style={styles.subheader}>Socialisation & Behaviour</Text>
            <View>
                {behaviours.map((behaviour, index) => {
                    return (
                        <View style={{ marginVertical: 8 }}>
                            <CustomLabelInput key={index} label={`${index + 1}. ${behaviour.question}`} />
                        </View>
                    )
                })}
            </View>
            <Text style={{ textAlign: 'center', padding: 20, fontWeight: 'bold' }}>Please check any boxes that applies to your dog</Text>
            <View>
                {traits.map((trait, index) => {
                    return <CustomCheckBox key={index} label={trait.trait} />
                })}
            </View>
            <CustomButton
                text="Submit"
                onPress={onSubmitPressed}
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

export default DogBehaviourScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        flex: 1,
    },
    header: {
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
import { StyleSheet, Text, ScrollView, View, Pressable } from 'react-native'
import { Input } from 'react-native-elements'
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomLabelInput from '../../components/CustomInput/CustomLabelInput';
import { useState } from 'react';
import { HEALTH } from '../../shared/health';

const DogHealthInfoScreen = ({ navigation }) => {
    const [healthquestions, setHealthQuestions] = useState(HEALTH);

    const onPreviousPressed = () => {
        navigation.navigate('DogInfo');
    };

    const onNextPressed = () => {
        navigation.navigate('DogBehaviour');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Dog Information</Text>
            <Text style={styles.subheader}>Medical and Health Information</Text>
            <View>
                <Text style={{ fontWeight: 'bold', }}>Vaccination Record</Text>
                <Text>Upload a clear picture of your pooch’s vaccine booklet showing your dog’s
                    information written and the vaccination record.</Text>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Dog Info</Text>
                        <Pressable style={{ marginTop: 5 }} >
                            <Text style={styles.calBtn}>Upload File</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Vaccine Record</Text>
                        <Pressable style={{ margin: 5 }}>
                            <Text style={styles.calBtn}>Upload File</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Rabies</Text>
                    <Pressable>
                        <Text style={styles.calBtn}>Date Received</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.calBtn}>Date Due</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>DHLPP</Text>
                    <Pressable style={{ marginTop: 5 }}>
                        <Text style={styles.calBtn}>Date Received</Text>
                    </Pressable>
                    <Pressable style={{ marginTop: 5 }}>
                        <Text style={styles.calBtn}>Date Due</Text>
                    </Pressable>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Questionnaire</Text>
                    {healthquestions.map((health, index) => {
                        return <CustomLabelInput key={index} label={`${index + 1}     ${health.question}`} />
                    })}
                </View>
            </View>
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

export default DogHealthInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
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
    },
    calBtn: {
        borderWidth: 1,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        letterSpacing: 1,
        color: '#15761A',
        borderColor: '#15761A'
    }
})
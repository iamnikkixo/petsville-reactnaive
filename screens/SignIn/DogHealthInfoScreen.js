import { StyleSheet, Text, ScrollView, View, Pressable } from 'react-native'
import { Divider } from 'react-native-elements'
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
                <Text style={{ fontWeight: '700', fontSize: 17, paddingVertical: 15 }}>Vaccination Record</Text>
                <Text>Upload a clear picture of your pooch’s vaccine booklet showing your dog’s
                    information written and the vaccination record.</Text>
                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>Dog Info</Text>
                        <Pressable>
                            <Text style={styles.calBtn}>Upload File</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>Vaccine Record</Text>
                        <Pressable>
                            <Text style={styles.calBtn}>Upload File</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 0.6 }}>
                        <Text style={{ fontWeight: 'bold' }}>Rabies</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Pressable>
                            <Text style={styles.calBtn}>Date Received</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Pressable>
                            <Text style={styles.calBtn}>Date Due</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={{ flex: 0.6 }}>
                        <Text style={{ fontWeight: 'bold' }}>DHLPP</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Pressable>
                            <Text style={styles.calBtn}>Date Received</Text>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Pressable>
                            <Text style={styles.calBtn}>Date Due</Text>
                        </Pressable>
                    </View>
                </View>
                <View>
                    <View style={styles.row}>
                        <View style={{ flex: 0.27 }}>
                            <Text style={{ fontWeight: 'bold' }}>Tick & Flea</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={styles.calBtn}>Method</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={{ flex: 0.6 }}>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Pressable>
                                <Text style={styles.calBtn}>Date Received</Text>
                            </Pressable>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Pressable>
                                <Text style={styles.calBtn}>Date Due</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.row}>
                        <View style={{ flex: 0.27 }}>
                            <Text style={{ fontWeight: 'bold' }}>Heartworm</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={styles.calBtn}>Method</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={{ flex: 0.6 }}>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Pressable>
                                <Text style={styles.calBtn}>Date Received</Text>
                            </Pressable>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Pressable>
                                <Text style={styles.calBtn}>Date Due</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <Divider style={styles.divider} />
                <View>
                    <Text style={{ fontWeight: '700', fontSize: 17, paddingVertical: 15 }}>Questionnaire</Text>
                    {healthquestions.map((health, index) => {
                        return <CustomLabelInput key={index} label={`${index + 1.}     ${health.question}`} />
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
        fontSize: 10,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        letterSpacing: 1,
        color: '#15761A',
        borderColor: '#15761A',
        width: '90%'
    },
    divider: {
        marginVertical: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    }
})
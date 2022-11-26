import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Button,
    Alert,
    Pressable
} from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import CustomLabelInput from '../components/CustomInput/CustomLabelInput';
import CustomCheckBox from '../components/CustomCheckBox/CustomCheckBox';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomAddButton from '../components/CustomButton/CustomAddButton';
import DateTimePicker from '@react-native-community/datetimepicker';



const BookingScreen = () => {
    const [selectedRoom, setSelectedRoom] = useState('Standard');
    const [dogName, setDogName] = useState('Dog Name')
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [showCheckInCal, setShowCheckInCal] = useState(false);
    const [showCheckOutCal, setShowCheckOutCal] = useState(false);
    const [grooming, setGrooming] = useState(false);
    const [pool, setPool] = useState(false);
    const [earlyCheckIn, setEarlyCheckIn] = useState(false);
    const [lateCheckOut, setLateCheckOut] = useState(false);
    const [countDogs, setCountDogs] = useState(2)


    const AddDog = () => {
        return (
            <CustomLabelInput
                label='Guest Name'
                value={dogName}
                setValue={setDogName}
            />
        )
    };

    const [addDog, setAddDog] = useState([<AddDog key={1} />])

    const onAddDogPressed = () => {
        setCountDogs(countDogs + 1)
        setAddDog([...addDog, <AddDog />]);
        console.log(countDogs);
    };

    const onCheckInDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCheckInCal(Platform.OS === 'ios');
        setCheckInDate(currentDate);
    };

    const onCheckOutDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCheckOutCal(Platform.OS === 'ios');
        setCheckOutDate(currentDate);
    };

    const handleReservation = () => {
        Alert.alert(
            'Confirm Reservation',
            `\nRoom: ${selectedRoom}\n\nDog Name: ${dogName}\n\nCheck-In Date: ${checkInDate.toLocaleDateString()}\n\nCheck-Out Date: ${checkOutDate.toLocaleDateString()}\n\nGrooming: ${grooming ? 'Yes' : 'No'}\n\n Early Check-In: ${earlyCheckIn ? 'Yes' : 'No'}\n\nLate Check-Out: ${lateCheckOut ? 'Yes' : 'No'}\n\nIf the information above is correct, please confirm your booking.`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'CONFIRM'
                }
            ],
            { cancelable: false }
        )
    };

    const resetForm = () => {
        setSelectedRoom('Standard');
        setDogName('Dog Name');
        setCheckInDate(new Date());
        setCheckOutDate(new Date());
        setShowCheckInCal(false);
        setShowCheckOutCal(false);
        setAddDog(0);
        setGrooming(0);
        setEarlyCheckIn(false);
        setLateCheckOut(false);
    };

    return (
        <ScrollView style={styles.root}>
            <View style={styles.formRow}>
                <Text>Pick Your Room: </Text>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedRoom}
                    onValueChange={(itemValue) => setSelectedRoom(itemValue)}
                >
                    <Picker.Item label='Standard' value={'Standard'} />
                    <Picker.Item label='Deluxe' value={'Deluxe'} />
                    <Picker.Item label='VIP' value={'VIP'} />
                </Picker>
            </View>
            {addDog.map((dog, index) => {
                if (selectedRoom === 'Standard' && index < 1) {
                    return dog
                }
                else if (selectedRoom === 'Deluxe' && index < 2) {
                    return dog
                } else if (selectedRoom === 'VIP' & index < 4) {
                    return dog
                }
            })}
            <View>
                {(selectedRoom === 'Standard')
                    ? <CustomAddButton label='Add Dog?' disabled={true} />
                    : <CustomAddButton label='Add Dog?'
                        onPress={onAddDogPressed} />}
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>
                    Check-In
                </Text>
                <Pressable style={{ marginTop: 15 }} onPress={() => setShowCheckInCal(!showCheckInCal)}>
                    <Text style={styles.calBtn}>{checkInDate.toLocaleDateString('en-US')}</Text>
                </Pressable>
                {showCheckInCal && (
                    <DateTimePicker
                        value={checkInDate}
                        mode='date'
                        display='default'
                        onChange={onCheckInDateChange}
                    />
                )}
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>
                    Check-Out
                </Text>
                <Pressable style={{ marginTop: 15 }} onPress={() => setShowCheckOutCal(!showCheckInCal)}>
                    <Text style={styles.calBtn}>{checkOutDate.toLocaleDateString('en-US')}</Text>
                </Pressable>

                {showCheckOutCal && (
                    <DateTimePicker
                        style={styles.formItem}
                        value={checkOutDate}
                        mode='date'
                        display='default'
                        onChange={onCheckOutDateChange}
                    />
                )}
            </View>
            <View style={styles.box}>
                <View style={styles.formCol}>
                    <CustomCheckBox
                        label='Doggy Pool'
                        value={pool}
                        setValue={() => setPool(!pool)}
                    />

                    <CustomCheckBox
                        label='Grooming'
                        value={grooming}
                        setValue={() => setGrooming(!grooming)}
                    />
                </View>
                <View style={styles.formCol}>
                    <CustomCheckBox
                        label='Early Check-In?'
                        value={earlyCheckIn}
                        setValue={() => setEarlyCheckIn(!earlyCheckIn)}
                    />
                    <CustomCheckBox
                        label='Late Check-Out?'
                        value={lateCheckOut}
                        setValue={() => setLateCheckOut(!lateCheckOut)}
                    />
                </View>
            </View>
            <View style={styles.formRow}>
                <CustomButton
                    text="SEARCH AVAILABILITY"
                    onPress={() => handleReservation()}
                    type='PRIMARY'
                    accessibilityLabel='Tap me to search for available rooms to reserve'
                />
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginBottom: 15
    },
    formCol: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    formRow: {
        marginVertical: 5,
        paddingVertical: 5,
    },
    formLabel: {
        fontSize: 15,
        flex: 2,
    },

    formItem: {
        flex: 1,
    },
    box: {
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 20,
    },
    calBtn: {
        borderWidth: 1,
        textAlign: 'center',
        padding: 10,
        borderRadius: 20,
        letterSpacing: 1,
        color: '#15761A',
        borderColor: '#15761A'
    }
})

export default BookingScreen;
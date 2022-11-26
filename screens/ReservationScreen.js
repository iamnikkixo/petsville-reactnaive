import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    StyleSheet,
    Pressable,
    PanResponder
} from 'react-native';
import { useSelector } from 'react-redux';
import { allRooms } from '../features/reservations/reservationsSlice';
import { Card, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useRef } from 'react';

const ReservationScreen = ({ navigation }) => {
    const rooms = useSelector(allRooms);

    const view = useRef();

    const isLeftSwipe = ({ dx }) => dx < -200;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            view.current
                .bounce(1500)
                .then((endState) =>
                    console.log(endState.finished ? 'finished' : 'canceled')
                );
        },
        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (isLeftSwipe(gestureState)) {
                navigation.navigate('BookNow');
            }
        }
    });

    const onBookNowPressed = () => {
        console.warn('Book Now');
        navigation.navigate('BookNow');
    };

    const renderRoomItem = ({ item: room }) => {
        if (room) {
            return (
                <Animatable.View
                    animation='fadeInDownBig'
                    duration={2000}
                    delay={1000}
                    ref={view}
                    {...panResponder.panHandlers}
                >
                    <Card containerStyle={styles.container}>
                        <View style={styles.headerContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    name='dog-side'
                                    type='material-community'
                                    size={30}
                                    style={{ paddingLeft: 10, paddingVertical: 10, margin: 0 }}
                                />
                                <Text style={styles.header}>{room.maxdogs}</Text>
                            </View>
                            <Text style={styles.header}>{room.mincost}</Text>
                            <Pressable
                                onPress={onBookNowPressed}

                            >
                                <Text style={[styles.header, { color: '#15761A', fontWeight: 'bold' }]}>BOOK NOW</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Text style={styles.bodyHeader}>{room.header}</Text>
                            <Text style={styles.bodyText}>{room.info}</Text>
                        </View>
                        <Card.Image source={room.image} style={styles.image} />
                    </Card >
                </Animatable.View>
            )
        }
    };

    return (
        <SafeAreaView style={styles.root}>
            <FlatList
                data={rooms}
                renderItem={renderRoomItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: 'white'
    },
    container: {
        padding: 0,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#D9D9D9',
        marginBottom: 10,

    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        fontWeight: 'bold',
        padding: 10,

    },
    header: {
        fontSize: 25,
        color: '#9A9A9A',
        alignSelf: 'center',
        padding: 10
    },
    bodyHeader: {
        fontSize: 25,
        marginHorizontal: 15,
        marginTop: 30,
        color: '#15761A',
        textTransform: 'uppercase',
        fontWeight: 'bold',

    },
    bodyText: {
        marginHorizontal: 15,
        marginBottom: 20,
        marginTop: 10,
        marginBottom: 20,

    },
    image: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})

export default ReservationScreen
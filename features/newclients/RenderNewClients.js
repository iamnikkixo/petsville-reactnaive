import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const RenderNewClients = ({ newClient }) => {
    const navigation = useNavigation();

    const onEnrollPressed = () => {
        navigation.navigate('SignUp');
    };

    if (newClient) {
        return (
            <ScrollView>
                <Card containerStyle={{ padding: 0 }} >
                    <Card.Image source={newClient.image} style={styles.image} resizeMode='cover' />
                    <Card.Title style={styles.title}>{newClient.header}</Card.Title>
                    <Card.Divider style={{ marginBottom: 0 }} />
                    <View>
                        {newClient.description
                            ?
                            <Text style={{ margin: 25 }}>{newClient.description}</Text>

                            : (
                                <>
                                    <View style={styles.stepBox}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={styles.steps}>01</Text>
                                            <Text style={styles.subHeader}>{newClient.subheader1}</Text>
                                        </View>
                                        <Text style={styles.text}>{newClient.description1}</Text>
                                    </View>
                                    <View style={styles.stepBox}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={styles.steps}>02</Text>
                                            <Text style={styles.subHeader}>{newClient.subheader2}</Text>
                                        </View>
                                        <Text style={styles.text}>{newClient.description2}</Text>
                                    </View>
                                    <View style={styles.stepBox}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={styles.steps}>03</Text>
                                            <Text style={styles.subHeader}>{newClient.subheader3}</Text>
                                        </View>
                                        <Text style={styles.text}>{newClient.description3}</Text>
                                    </View>
                                    <View style={styles.stepBox}>
                                        <CustomButton
                                            text='Enroll Now'
                                            onPress={onEnrollPressed}
                                        />
                                    </View>
                                </>
                            )}
                    </View>
                </Card>
            </ScrollView>
        );
    }
    return <View />;
}

const styles = StyleSheet.create({
    image: {
        height: 250,
    },
    title: {
        fontWeight: 'bold',
        color: '#15761A',
        fontSize: 30,
        padding: 15,
        marginBottom: 0,
    },
    subHeader: {
        fontSize: 25,
        marginLeft: 20
    },
    steps: {
        fontSize: 40,
        color: '#A0522D',
        paddingBottom: 3,
        borderBottomColor: '#A0522D',
        borderBottomWidth: 2,
    },
    stepBox: {
        marginHorizontal: 25,
        marginVertical: 10,
    }
})

export default RenderNewClients;
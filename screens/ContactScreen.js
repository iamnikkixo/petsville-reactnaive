import { Text, ScrollView, StyleSheet, View, Linking, Dimensions } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'
import * as MailComposer from 'expo-mail-composer';

const ContactScreen = () => {
    const sendMail = () => {
        MailComposer.composeAsync({
            receipients: [''],
            subject: 'Inquiry',
            body: 'Hello PetsVille!'
        })
    }

    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInUpBig'
                duration={1000}
                delay={1000}
            >
                <Card wrapperStyle={{ marginTop: 20 }}>
                    <Card.Title>
                        Contact Information</Card.Title>
                    <Card.Divider />

                    <View style={{ padding: 20, justifyContent: 'center' }}>

                        <View style={styles.contactRow}>
                            <View>
                                <Icon name='map-marker-radius' type='material-community' onPress={() => Linking.openURL("https://www.google.com/maps/place/PETS'+VILLE+Dog+Hotel,+Pool,+Park+%26+Cafe/@13.7097212,100.7050675,15z/data=!4m5!3m4!1s0x0:0x1a9ac240bb51842d!8m2!3d13.7097212!4d100.7050679")} />
                            </View>
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={styles.subheader}>ADDRESS</Text>
                                <Text>35, 35/1 Sukhaphiban 2 Rd</Text>
                                <Text>Khwaeng Prawet, Prawet, Bangkok </Text>
                                <Text style={{ marginBottom: 10 }}>Thailand 10250</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.contactRow}>
                            <View style={{ alignItems: 'center' }}>
                                <Icon name='phone' type='material-community' onPress={() => Linking.openURL(`tel:${+660898967676}`)} />
                            </View>
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={styles.subheader}>PHONE</Text>
                                <Text>+66 089-8967676 </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contentContainer}>
                        <View style={styles.contactRow}>
                            <View>
                                <Icon name='email' type='material-community' onPress={() => sendMail()} />
                            </View>
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={styles.subheader}>EMAIL</Text>
                                <Text>petsvillebkk@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.contactRow}>
                            <View>
                                <Icon name='web' type='material-community' onPress={() => Linking.openURL('http://www.petsvillebkk.com')} />
                            </View>
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={styles.subheader}>WEBSITE</Text>
                                <Text>www.petsvillebkk.com/</Text>
                            </View>
                        </View>
                    </View>

                </Card>
            </Animatable.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    subheader: {
        fontSize: 14,
        letterSpacing: 1,
        fontWeight: 'bold',
        color: '#15761A'

    },
    contactRow: {
        flex: 1,
        flexDirection: 'row',

    },
    contentContainer: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderColor: '#c5c5c5',
    },
})

export default ContactScreen;
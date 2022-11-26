import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import RoomCarousel from './RoomCarousel';

const RenderServices = ({ service }) => {
    if (service) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                {service.carousel ? <RoomCarousel />: <Card.Image
                    source={service.image}
                    style={{ height: 250 }}
                /> }
                <Card.Title style={styles.title}>{service.header}</Card.Title>
                <Card.Divider style={{marginBottom: 0}}/>
                <View>
                    <Text style={styles.text}>{service.description}</Text>
                </View>
            </Card>
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
    text: {
        margin: 25
    },
})

export default RenderServices;
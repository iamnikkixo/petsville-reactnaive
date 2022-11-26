import { FlatList, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { allServices } from '../features/services/servicesSlice';


const ServicesScreen = ({ navigation }) => {
    const services = useSelector(allServices);

    const renderServicesItem = ({ item: service }) => {
        return (
            <ListItem
                style={styles.container}
                onPress={() =>
                    navigation.navigate('ServicesInfo', { service })
                }
            >
                <Avatar size='xlarge' rounded source={service.image} />
                <ListItem.Content>
                    <ListItem.Title style={styles.title}>{service.header}</ListItem.Title>
                    <ListItem.Subtitle>{service.subheader}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={services}
            renderItem={renderServicesItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#e8e8e8',
        
    },
    title: {
        fontSize: 20,
        color: '#15761A',
        fontWeight: 'bold',
        paddingBottom: 10,


    }
})

export default ServicesScreen;
import { FlatList, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { NewClientsArray } from '../features/newclients/newclientsSlice';

const NewClientsScreen = ({ navigation }) => {
    const newClients = useSelector(NewClientsArray);

    const renderNewClientsItem = ({ item: newClient }) => {
        return (
            <ListItem
                style={styles.container}
                onPress={() =>
                    navigation.navigate('NewClientsInfo', { newClient })
                }
            >
                <Avatar size='large' rounded source={newClient.image} />
                <ListItem.Content>
                    <ListItem.Title style={styles.title}>{newClient.header}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={newClients}
            renderItem={renderNewClientsItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#e8e8e8',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 20,
    }
})

export default NewClientsScreen;
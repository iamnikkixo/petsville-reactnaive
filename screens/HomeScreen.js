import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { allHomeContent } from '../features/home/homeSlice';
import HomeCarousel from '../features/home/HomeCarousel';

const HomeItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Title style={styles.title}>{item.header}</Card.Title>
                {item.image ? <Card.Image
                    source={item.image}
                    style={{ height: 250 }}
                /> : <HomeCarousel />}

                <View>
                    <Text style={{ margin: 25}}>{item.description}</Text>

                </View>
            </Card>
        );
    }
    return <View />;
};


const HomeScreen = () => {
    const homeItems = useSelector(allHomeContent);

    return (
        <ScrollView>
            {homeItems.map((item) => {
                return (
                    <HomeItem item={item} key={item.id} />
                )
            })}
        </ScrollView>

    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#15761A',
        fontWeight: 'bold',
        flex: 1,
        textTransform: 'uppercase',
        alignSelf: 'center',
        padding: 20,
        marginBottom: 0,

    }
})


export default HomeScreen;
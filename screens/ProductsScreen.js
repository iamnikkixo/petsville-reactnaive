import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TextInput,
    Pressable,
    FlatList,
    Dimensions,
    Image,
    Alert,
    ToastAndroid,
    Platform,
} from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allProducts } from '../features/products/productsSlice';
import { addToCart, getTotal } from '../features/products/cartSlice';
import * as Animatable from 'react-native-animatable'

const WIDTH = Dimensions.get('window').width / 2 - 30;

const ProductsScreen = ({ navigation }) => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const products = useSelector(allProducts);
    const { cartTotalQty } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const categories = [
        'POPULAR', // index 0 
        'TOYS', // index 1
        'FOOD', // index 2
        'ACCESSORIES' // index 3
    ];

    useEffect(() => {
        dispatch(getTotal());
    })

    const handleAddtoCart = (product) => {
        const { itemName } = product
        dispatch(addToCart(product));
        (Platform.OS === 'ios'
            ? Alert.alert(`${itemName} added to cart`)
            : ToastAndroid.show((`${itemName} added to cart`), ToastAndroid.LONG))
    };

    const CategoryList = () => {
        return (
            <View style={styles.categoryContainer}>
                {categories.map((category, index) => (
                    <Pressable
                        key={index}
                        onPress={() => setCategoryIndex(index)}
                    >
                        <Text style={[styles.categoryText, categoryIndex == index && styles.categoryTextSeleceted]}>{category}
                        </Text>
                    </Pressable>
                ))}
            </View>
        );
    };


    const renderProductItem = ({ item: product }) => {
        return (
            <Pressable
                onPress={() => navigation.navigate('ProductDetails', product)}
            >
     
                    <View style={styles.productCard}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: product.favourite ? '#FFCCCB' : '#BEBEBE'
                            }}>
                                <Icon
                                    name='heart'
                                    type='font-awesome'
                                    size={15}
                                    color={product.favourite ? 'red' : 'black'}
                                />
                            </View>

                        </View>
                        <View style={{ height: 100, alignItems: 'center' }}>
                            <Image source={product.image} style={{ flex: 1, resizeMode: 'contain' }} />
                        </View>
                        <Text style={styles.brandText}>
                            {product.brand}
                        </Text>
                        <Text>
                            {product.itemName}
                        </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={styles.costText}>
                            &#3647;{product.price}
                            </Text>
                            <Pressable
                                onPress={() => handleAddtoCart(product)}
                            >
                                <View style={{
                                    height: 25,
                                    width: 25,
                                    backgroundColor: '#1EA124',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Icon
                                        name='plus'
                                        type='font-awesome'
                                        color='white'
                                        size={12}

                                    />
                                </View>
                            </Pressable>
                        </View>
                    </View>
            </Pressable>
        )
    };

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                        Welcome to
                    </Text>
                    <Text style={{ fontSize: 38, fontWeight: 'bold', color: '#1EA124' }}>The Shop</Text>
                </View>
                <View>
                    <Icon
                        name='shopping-cart'
                        type='font-awesome'
                        size={28}
                        onPress={() => navigation.navigate('Cart')}
                    />
                    <Badge
                        value={cartTotalQty}
                        status='success'
                        containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                    />
                </View>
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={styles.searchContainer}>
                    <Icon name='magnify' type='material-community' size={30} style={{ marginHorizontal: 20 }} />
                    <TextInput placeholder='Search' />
                </View>
                <View style={styles.sortBtn}>
                    <Icon
                        name='sort-variant'
                        type='material-community'
                        size={30}
                        color='white'
                    />
                </View>
            </View>
            <CategoryList />
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 15
                }}
                numColumns={2}
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: '#1EA124',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',

    },
    categoryTextSeleceted: {
        color: '#1EA124',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#1EA124',
    },
    productCard: {
        height: 240,
        backgroundColor: '#F5F5F5',
        width: WIDTH,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    brandText: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10
    },
    costText: {
        fontWeight: 'bold',
        fontSize: 19,
    }
})

export default ProductsScreen;
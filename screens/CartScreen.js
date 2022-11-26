import { StyleSheet, SafeAreaView, View, Text, Image, Pressable, ScrollView, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { SwipeRow } from 'react-native-swipe-list-view';
import { addToCart, decreaseCart, removeFromCart, clearCart, getTotal } from '../features/products/cartSlice';
import { useEffect } from 'react';

const CartScreen = ({ navigation }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch])

    const handleAddtoCart = (cartItem) => {
        dispatch(addToCart(cartItem));
        console.log('Added to Cart');
    };

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
        console.log('Added to Cart');
    };

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
        console.log('Deleted from cart');
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        (Platform.OS === 'ios'
            ? Alert.alert('Your cart has been emptied')
            : ToastAndroid.show(('Your cart has been emptied'), ToastAndroid.LONG))
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Icon
                        name='arrow-left'
                        type='material-community'
                        size={28}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.headerText}>Order Details</Text>
                    <View></View>
                </View>
                {cart.cartItems.length === 0 ?
                    (
                        <View style={styles.emptyCartBody}>
                            <View>
                                <Image source={require('../assets/images/emptycart.jpg')} resizeMode='contain' style={styles.emptyCartImage} />
                            </View>
                            <Text style={styles.emptyCartSubheader}>Your cart is empty</Text>
                            <Text style={styles.emptyCartText}>Looks like you haven't added any products to your cart yet</Text>
                        </View>
                    )
                    :
                    (
                        <View>
                            <Text style={styles.cartSubheader}>My Cart</Text>
                            {cart.cartItems?.map((cartItem, index) => (
                                <SwipeRow rightOpenValue={-100}>
                                    <View style={styles.deleteView}>
                                        <TouchableOpacity
                                            style={styles.deleteTouchable}
                                            onPress={() => handleRemoveFromCart(cartItem)}
                                        >
                                            <Text style={styles.deleteText}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ backgroundColor: 'white' }}>
                                        <Pressable key={index} style={{
                                            width: '100%',
                                            height: 100,
                                            marginVertical: 6,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            paddingHorizontal: 16,
                                            marginHorizontal: 5,
                                        }}>
                                            <View style={{
                                                width: '40%',
                                                height: 100,
                                                padding: 15,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#F5F5F5',
                                                borderRadius: 10,
                                                marginRight: 20,
                                            }}>
                                                <Image source={cartItem.image} style={{
                                                    resizeMode: 'contain',
                                                    width: '100%',
                                                    height: '100%',
                                                }} />
                                            </View>
                                            <View style={{
                                                flex: 1,
                                                height: '100%',
                                                justifyContent: 'space-evenly'
                                            }}>
                                                <View>
                                                    <Text style={styles.productName}>{cartItem.itemName}</Text>
                                                </View>
                                                <View>
                                                    <Text>{cartItem.brand}</Text>
                                                </View>
                                                <View>
                                                    <Text style={styles.price}>{cartItem.price}</Text>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                    }}>
                                                        <View style={{
                                                            borderRadius: 100,
                                                            marginRight: 20,
                                                            padding: 5,
                                                            borderWidth: 1,
                                                            borderColor: 'gray',
                                                            opacity: 0.5,
                                                        }}>
                                                            <Pressable
                                                                onPress={() => handleDecreaseCart(cartItem)}
                                                            >
                                                                <Icon name='minus' type='material-community' size={13} color='gray' />
                                                            </Pressable>
                                                        </View>
                                                        <Text>{cartItem.cartQty}</Text>
                                                        <Pressable
                                                            onPress={() => handleAddtoCart(cartItem)}
                                                        >
                                                            <View style={{
                                                                borderRadius: 100,
                                                                marginLeft: 20,
                                                                padding: 5,
                                                                borderWidth: 1,
                                                                borderColor: 'gray',
                                                                opacity: 0.5,
                                                            }}>

                                                                <Icon name='plus' type='material-community' size={13} color='gray' />


                                                            </View>
                                                        </Pressable>
                                                    </View>
                                                    <Pressable
                                                        onPress={() => handleRemoveFromCart(cartItem)}
                                                    >
                                                        <Icon name='trash-can-outline' type='material-community' size={16} style={styles.trashcanIcon} />
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </Pressable>
                                    </View>
                                </SwipeRow>
                            ))}
                            <View style={{ width: '30%', marginTop: 20, marginLeft: 20, }}>
                                <Pressable onPress={() => handleClearCart()}>
                                    <Text style={{ borderWidth: 1, textAlign: 'center', padding: 5, borderRadius: 10, letterSpacing: 1, color: 'gray', borderColor: 'gray' }}>Clear Cart</Text>
                                </Pressable>
                            </View>
                            <View style={{
                                paddingHorizontal: 16,
                                marginVertical: 10
                            }}>
                                <View>
                                    <Text style={styles.deliveryHeader}>Delivery Location</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: '80%',
                                        alignItems: 'center'
                                    }}>
                                        <View style={styles.deliveryIconBackground}>
                                            <Icon name='truck-delivery-outline' type='material-community' color='#3333FF' size={16} />
                                        </View>
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Text style={styles.address}>123 Fake Street</Text>
                                            <Text style={styles.cityCountryPostal}>Toronto, Ontario Canada 80231</Text>
                                        </View>
                                    </View>
                                    <Icon name='chevron-right' type='material community' />
                                </View>
                            </View>
                            <View style={{
                                paddingHorizontal: 16,
                                marginVertical: 10
                            }}>
                                <View>
                                    <Text style={styles.deliveryHeader}>Payment Method</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: '80%',
                                        alignItems: 'center'
                                    }}>
                                        <View style={styles.deliveryIconBackground}>
                                            <Text style={{ fontSize: 10, color: 'blue', letterSpacing: 1, fontWeight: '900' }}>VISA</Text>
                                        </View>
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Text style={styles.address}>Visa Classic</Text>
                                            <Text style={styles.cityCountryPostal}>****-****-4802</Text>
                                        </View>
                                    </View>
                                    <Icon name='chevron-right' type='material community' />
                                </View>
                            </View>
                            <View style={{
                                paddingHorizontal: 16,
                                marginVertical: 10
                            }}>
                                <Text style={styles.deliveryHeader}>Order Information</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        maxWidth: '80%',
                                        marginBottom: 5,
                                    }}>Subtotal</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        maxWidth: '80%',
                                    }}>&#3647;{cart.cartTotalAmt}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        maxWidth: '80%',
                                        marginBottom: 5,
                                    }}>Tax</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        maxWidth: '80%',
                                    }}>&#3647;  5000</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        maxWidth: '80%',
                                        marginBottom: 20,
                                    }}>Shipping Tax</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        maxWidth: '80%',
                                    }}>&#3647; 45.00</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: '400',
                                        maxWidth: '80%',
                                        fontWeight: 'bold'
                                    }}>Total</Text>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        maxWidth: '80%',
                                    }}>&#3647;  5000</Text>
                                </View>
                            </View>
                            <View style={{
                                width: '100%',
                                height: 50,
                                marginTop: 10,
                                marginBottom: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Pressable
                                    style={{
                                        width: '85%',
                                        height: '90%',
                                        backgroundColor: 'blue',
                                        borderRadius: 20,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontWeight: '500',
                                            letterSpacing: 1,
                                            color: 'white',
                                            textTransform: 'uppercase',
                                        }}>
                                        CHECKOUT
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                    )
                }
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '400',
        paddingVertical: 5,
    },
    emptyCartBody: {
        flex: 1,
        marginTop: 150,
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    emptyCartSubheader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#1EA124',
        marginBottom: 10,
    },
    cartSubheader: {
        fontSize: 20,
        color: '#1EA124',
        fontWeight: '500',
        letterSpacing: 1,
        paddingTop: 20,
        paddingLeft: 16,
    },
    emptyCartText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 15,
        lineHeight: 20,

    },
    emptyCartImage: {
        height: 300,
        width: 350,
    },
    productName: {
        fontSize: 15,
        maxWidth: '100%',
        fontWeight: 'bold',
        letterSpacing: 1
    },
    price: {
        fontSize: 15,
        fontWeight: '400',
        maxWidth: '85%',
        marginRight: 5,
    },
    trashcanIcon: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 100,
    },
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    deleteTouchable: {
        backgroundColor: '#FA4353',
        height: '100%',
        justifyContent: 'center'
    },
    deleteText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16,
        width: 100
    },
    deliveryHeader: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1,
        paddingTop: 20,
        marginBottom: 20,
    },
    deliveryIconBackground: {
        color: '#3333FF',
        backgroundColor: '#F5F5F5',
        padding: 12,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    address: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    cityCountryPostal: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        color: 'gray',
    }

})

export default CartScreen
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  Pressable
} from 'react-native'
import { Icon, Badge } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getTotal } from '../features/products/cartSlice';
import { useEffect } from 'react';


const ProductDetailsScreen = ({ navigation, route }) => {
  const product = route.params;
  const dispatch = useDispatch();
  const { cartTotalQty } = useSelector(state => state.cart);

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getTotal());
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name='arrow-left'
          type='material-community'
          size={28}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Icon
            name='shopping-cart'
            type='font-awesome'
            size={28}
            onPress={() => navigation.navigate('Cart', product)}
          />
          <Badge
            value={cartTotalQty}
            status='success'
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={product.image} resizeMode='contain' style={{ flex: 1 }} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={{
          marginLeft: 20,
          flexDirection: 'row',
          alignItems: 'flex-end'
        }}>
          <View style={styles.line} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best Choice</Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#1EA124' }}>{product.brand}</Text>
          <View style={styles.priceTag}>
            <Text style={{ marginLeft: 18, color: 'white', fontWeight: 'bold', fontSize: 16 }}>&#3647;{product.price}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 20 }}>{product.itemName}</Text>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Description</Text>
          <Text style={{ color: 'gray', fontSize: 13, lineHeight: 22, marginTop: 10, }}>{product.description}
          </Text>
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable>
                <View style={styles.borderBtn}>
                  <Icon name='minus' type='material-community' size={16} />
                </View>
              </Pressable>
              <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>{product.cartQty ? { cartQty } : '1'}</Text>
              <Pressable>
                <View style={styles.borderBtn}>
                  <Icon name='plus' type='material-community' size={16} />
                </View>
              </Pressable>
            </View>
            <Pressable onPress={() => {
              navigation.navigate('Cart');
              handleAddtoCart(product);
            }}>
              <View style={styles.buyBtn}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Buy</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 20,
    marginTop: 20,
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 7,
    marginBottom: 20,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: 'black',
    marginBottom: 5,
    marginRight: 10,
  },
  priceTag: {
    backgroundColor: '#1EA124',
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },
  borderBtn: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: '#1EA124',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
})

export default ProductDetailsScreen;

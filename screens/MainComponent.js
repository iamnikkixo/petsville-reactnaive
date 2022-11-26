import { Image, Platform, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import HomeScreen from './HomeScreen';
import ServicesScreen from './ServicesScreen';
import ServicesInfoScreen from './ServicesInfoScreen';
import NewClientsScreen from './NewClientsScreen';
import NewClientsInfoScreen from './NewClientsInfoScreen';
import ContactScreen from './ContactScreen';
import ReservationScreen from './ReservationScreen';
import BookingScreen from './BookingScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import CartScreen from './CartScreen';
import SignInScreen from './SignIn/SignInScreen';
import SignUpScreen from './SignIn/SignUpScreen';
import ForgotPasswordScreen from './SignIn/ForgotPasswordScreen';
import ConfirmEmailScreen from './SignIn/ConfirmEmailScreen';
import ResetPasswordScreen from './SignIn/ResetPasswordScreen';
import OwnerInfoScreen from './SignIn/OwnerInfoScreen';
import PartnerInfoScreen from './SignIn/PartnerInfoScreen';
import EmergencyInfoScreen from './SignIn/EmergencyInfoScreen';
import VetInfoScreen from './SignIn/VetInfoScreen';
import DogInfoScreen from './SignIn/DogInfoScreen';
import DogHealthInfoScreen from './SignIn/DogHealthInfoScreen';
import DogBehaviourScreen from './SignIn/DogBehaviourScreen';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
}
    from '@react-navigation/drawer';
import {
    createStackNavigator,
} from '@react-navigation/stack';
import logo from '../assets/images/logo.jpg';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#000',
    headerStyle: { backgroundColor: '#fff' }
};


const SignInNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='SignIn'
                component={SignInScreen}
                options={({ navigation }) => ({
                    title: 'Sign In',
                    headerLeft: () => (
                        <Icon
                            name='user-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='OwnerInfo' component={OwnerInfoScreen} />
            <Stack.Screen name='PartnerInfo' component={PartnerInfoScreen} />
            <Stack.Screen name='EmergencyInfo' component={EmergencyInfoScreen} />
            <Stack.Screen name='VetInfo' component={VetInfoScreen} />
            <Stack.Screen name='DogInfo' component={DogInfoScreen} />
            <Stack.Screen name='DogHealth' component={DogHealthInfoScreen} />
            <Stack.Screen name='DogBehaviour' component={DogBehaviourScreen} />
            <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
            <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
        </Stack.Navigator>
    );
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ServicesNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Services'
                component={ServicesScreen}
                options={({ navigation }) => ({
                    title: 'Services',
                    headerLeft: () => (
                        <Icon
                            name='spa'
                            type='material-community'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='ServicesInfo'
                component={ServicesInfoScreen}
                options={({ route }) => ({
                    title: route.params.service.header
                })}
            />
        </Stack.Navigator>
    );
};

const NewClientsNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='NewClients'
                component={NewClientsScreen}
                options={({ navigation }) => ({
                    title: 'NewClients',
                    headerLeft: () => (
                        <Icon
                            name='user-plus'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='NewClientsInfo'
                component={NewClientsInfoScreen}
                options={({ route }) => ({
                    title: route.params.newClient.header
                })}
            />
        </Stack.Navigator>
    );
};

const ReservationNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Reservation'
                component={ReservationScreen}
                options={({ navigation }) => ({
                    title: 'Reservation',
                    headerLeft: () => (
                        <Icon
                            name='calendar-check-o'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='BookNow'
                component={BookingScreen}
                options={{ title: 'Book Now' }}
            />
        </Stack.Navigator>
    );
};

const ProductsNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen
                name='Products'
                component={ProductsScreen}
            />
            <Stack.Screen
                name='ProductDetails'
                component={ProductDetailsScreen}
            />
            <Stack.Screen
                name='Cart'
                component={CartScreen}
            />
        </Stack.Navigator>
    );
};

const ContactNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: 'Contact',
                    headerLeft: () => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};


const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image source={logo} style={styles.drawerImage} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>Pets Ville</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
);

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                drawerStyle={styles.drawerNavigator}
            >
                <Drawer.Screen
                    name='SignIn'
                    component={SignInNavigator}
                    options={{ title: 'Login' }}
                />
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home ' }}
                />
                <Drawer.Screen
                    name='Services'
                    component={ServicesNavigator}
                    options={{ title: 'Services' }}
                />
                <Drawer.Screen
                    name='NewClients'
                    component={NewClientsNavigator}
                    options={{ title: 'New Clients' }}
                />
                <Drawer.Screen
                    name='Reservation'
                    component={ReservationNavigator}
                    options={{ title: 'Reservation' }}
                />
                <Drawer.Screen
                    name='Products'
                    component={ProductsNavigator}
                    options={{ title: 'Products' }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: 'Contact Us' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 15,
        fontSize: 24,
        color: '#000'
    },
    drawerNavigator: {
        backgroundColor: '#fff',

    },
    drawerHeader: {
        backgroundColor: '#221F20',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20
    },
    drawerImage: {
        margin: 10,
        height: 80,
        width: 80
    }
})

export default Main;
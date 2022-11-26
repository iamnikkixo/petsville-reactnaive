import { Image, ScrollView, View, Dimensions, Text, StyleSheet, SafeAreaView } from 'react-native'
import { useState } from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const images = [
    require('../../assets/images/services/pickyourroom.jpg'),
    require('../../assets/images/services/standard1.jpg'),
    require('../../assets/images/services/standard2.jpg'),
    require('../../assets/images/services/deluxe1.jpg'),
    require('../../assets/images/services/deluxe2.jpg'),
    require('../../assets/images/services/vip1.jpg'),
    require('../../assets/images/services/vip2.jpg'),
]

const RoomCarousel = () => {
    const [imgActive, setImgActive] = useState(0);

    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    style={styles.wrap}
                >
                    {images.map((image, index) => (
                        <Image
                            key={image}
                            source={image}
                            resizeMode='cover'
                            style={styles.wrap}

                        />
                    ))
                    }
                </ScrollView>
                <View style={styles.indicator}>
                    {images.map((i, index) => (
                        <Text
                            key={i}
                            style={imgActive == index ? styles.activeCircle : styles.circle}
                        >⬤
                        </Text>
                    ))
                    }
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrap: {
        width: WIDTH * 0.92,
        height: 250,
    },
    indicator: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    circle: {
        color: '#888',
        margin: 3,
    },
    activeCircle: {
        color: '#fff',
        margin: 3,
    },

})

export default RoomCarousel
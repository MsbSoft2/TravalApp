import React from 'react';
import { SafeAreaView, Text, ImageBackground, Image, Pressable, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';

const AttractionDetails = ({ route }) => {

    const navigation = useNavigation();

    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const sliceImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
    const diffImages = item?.images.length - sliceImages?.length;

    console.log('images', item?.images);

    const onBack = () => {
        navigation.goBack();
    }

    const onGalleryNavigate = () => {
        console.log('Gallery');
        navigation.navigate('Gallery', { images: item?.images })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.mainImage}
                imageStyle={{ borderRadius: 20 }}
                source={{ uri: mainImage }} >

                <View style={styles.header}>
                    <Pressable style={styles.iconBack} onPress={onBack} hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/back.png')} />
                    </Pressable>
                    <Pressable style={styles.iconBack} hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/share.png')} />
                    </Pressable>
                </View>

                <Pressable onPress={onGalleryNavigate} style={styles.footer}>
                    {sliceImages?.map((image, index) => (
                        <View key={index}>
                            <Image
                                source={{ uri: image }}
                                style={styles.minImage} />
                            {diffImages > 0 && index === sliceImages?.length - 1 ? (
                                <View style={styles.moreImagesContainer}>
                                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                                </View>
                            ) : null}
                        </View>
                    ))}
                </Pressable>

            </ImageBackground>

            <View style={styles.headerContainer}>
                <View style={styles.textContainer}>
                    <Title style={styles.title} text={item?.name} />
                    <Text style={styles.city}>{item?.city}</Text>
                </View>
                <Title style={styles.title} text={item?.entry_price} />
            </View>
            <InfoCard
                text={item?.address}
                icon={require('../../assets/location_circle.png')} />
            <InfoCard
                text={`OPEN ${item?.opening_time} - ${item?.closing_time}`}
                icon={require('../../assets/schedule.png')} />

        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);
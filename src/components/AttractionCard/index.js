import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const AttractionCard = ({ imageSrc = '', title, onPress, subtitle, style }) => {
    const imageDefault = require('../../assets/default.jpg');
    const image = imageSrc !== '' ? { uri: imageSrc } : imageDefault;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.card, style]}>
            <Image style={styles.image}
                source={image}
            />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../../assets/location.png')} />
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(AttractionCard);
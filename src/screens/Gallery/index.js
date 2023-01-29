import React from 'react';
import { FlatList, Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Gallery = ({ navigation, route }) => {

    const { images } = route?.params || {};

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <FlatList
                    style={{ marginBottom: 24, paddingHorizontal: 24 }}
                    showsVerticalScrollIndicator={false}
                    data={images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={styles.image} />
                    )} />
            </View>


            <TouchableOpacity
                style={styles.backContainer}
                onPress={onBack}>
                <Image
                    source={require('../../assets/back.png')}
                    style={styles.backIcon}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default React.memo(Gallery);
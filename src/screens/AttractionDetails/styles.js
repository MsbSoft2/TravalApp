import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },
    mainImage: {
        with: '100%',
        height: height / 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 23,
        height: 23,
        margin: 9
    },
    iconBack: {
        width: 42,
        height: 42,
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 16
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: 'rgba(256, 256, 256, 0.35)',
        margin: 16,
        paddingHorizontal: 8,
    },
    minImage: {
        width: 40,
        height: 40,
        marginHorizontal: 4,
        marginVertical: 8,
        borderRadius: 10,
    },
    moreImages: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    moreImagesContainer: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.38)',
        top: 8,
        left: 4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 40,
    },
    title: {
        color: '#000',
    },
    city: {
        fontSize: 20,
        color: '#000',
        fontWeight: '400',
        marginTop: 8
    }
});


export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 20,
        marginTop: 24,
    },
    backContainer: {
        width: 45,
        height: 45,
        position: 'absolute',
        margin: 32,
        backgroundColor: '#fff',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon: {
        width: 32,
        height: 32
    }
});

export default styles;
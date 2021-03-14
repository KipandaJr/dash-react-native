import { StyleSheet } from 'react-native'

const header = StyleSheet.create({
    fundo: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: "#fff",
        height: 430,
        marginTop: -75,
        marginBottom:75,
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});

export default header;
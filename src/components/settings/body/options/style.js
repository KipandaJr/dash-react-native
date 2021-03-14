import { StyleSheet } from 'react-native'

const header = StyleSheet.create({
    fundo: {
        paddingTop: 15,
        borderBottomWidth: 0.7,
        borderBottomColor: "#2E3192",
        paddingBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    line: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        paddingBottom:5
    },
    title: {
        fontWeight: "bold",
        marginLeft: 10,
        fontSize:17
    }
});

export default header;
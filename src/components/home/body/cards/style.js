import { StyleSheet } from 'react-native'

const card = StyleSheet.create({
    fundo: {
        flexDirection: "column",
    },
    baixo: {
        backgroundColor: "#7a87cebd",
        alignItems:"center",
        width: 150,
        marginLeft: 10,
        padding: 5,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,        
    },
    body: {
        width: 150,
        backgroundColor: 'white',
        borderRadius: 5,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        margin: 10,
        marginBottom:0,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    icon: {
        color: '#2E3192',
    },
    iconBody:{
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor:"#2E3192",
        padding: 5,
    },
    number: {
        fontWeight: "bold",
        color: '#2E3192',
        fontSize:46
    },
    text: {
        textAlign: "center",
        color: "#756b6b",
        backgroundColor: "transparent",
        textTransform: "capitalize"
    },
    textBaixo: {
        color: "#fff",
        fontWeight:"bold",
        
    }
});

export default card;
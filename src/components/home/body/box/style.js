import { StyleSheet } from 'react-native'

const card = StyleSheet.create({
    fundo: {
        flexDirection: "column",
    },
    baixo: {
        justifyContent: "center",
        alignItems: "center",
        color:"white",
        flexDirection:"row",
        backgroundColor: "#7a87cebd",
        padding: 5,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        margin: 10,
        marginTop:0
    },
    body: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        margin: 10,
        marginBottom:0,
        padding: 10,
        flexDirection:"row"
    },
    side: {
        flex: 0.7,  
    },
    otherSide: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        color: '#a1a1a1a1',
        fontSize:35
    },
    iconBody:{
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor:"#2E3192",
        padding: 5,
    },
    title: {
        fontWeight: "700",
        color: '#2E3192',
        fontSize:16
    },
    content: {
        textAlign: "justify",
        color: "#756b6b",
        backgroundColor: "transparent",
        textTransform: "capitalize"
    },
    textBaixo: {
        marginLeft:5,
        color: "#fff",
        fontWeight:"600",
        
    }
});

export default card;
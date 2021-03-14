import { StyleSheet } from 'react-native'

const header = StyleSheet.create({
    topo: {
        fontFamily: 'Roboto',
        backgroundColor: '#2E3192',
        height: 250,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:35,
        position:"relative"
        
    },
    setting: {
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:20
    },
    title: {
        fontSize: 35,
        fontWeight:"bold",
        textTransform:'capitalize',
        color: 'white',
        marginLeft:10
    },
    name: {
        fontSize: 25,
        color: "white",
        fontWeight: "100",
        fontFamily:"Roboto"
    },
    tinyLogo: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 15,
        marginLeft: 10
    },
    pics:{
        flexDirection: "row",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default header;
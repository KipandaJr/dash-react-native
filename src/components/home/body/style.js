import { StyleSheet } from 'react-native'

const body = StyleSheet.create({
    fundo: {  
    },
    container: {
        padding: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    title: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize:25,
        color: "#636262",
        paddingBottom: 0
    },
    subTitle: {
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 15,
        color: "#636262",
        paddingBottom: 0,
        paddingTop: 0,
    },
    scroll: {
    },
    containerOther: {
        flexDirection: "row",
        alignItems:"center"
    },
    icon: {
        color: '#2E3192',
    },
    button:{
        backgroundColor:"#a2a2a2",
        padding: 10,
        borderRadius: 40,
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

export default body;

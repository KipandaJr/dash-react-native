import { StyleSheet } from 'react-native'

const header = StyleSheet.create({
    topo: {
        fontFamily: 'Roboto',
        backgroundColor: '#2E3192',
        height: 50,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        textTransform:'uppercase',
        fontWeight: '500',
        color: 'white',
        marginLeft:10
    }
});

export default header;
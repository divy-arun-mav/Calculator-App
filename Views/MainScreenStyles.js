import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    main_display: {
        elevation: 10,
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'flex',
        marginBottom: 10,
        padding: 10
    },
    display_text: {
        fontSize: 50,
        textAlign: 'right'
    },
    keypad: {
        width: '100%',
        height: '70%',
        display: 'flex',
        // flexDirection: 'row',
    },
    keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        width: "100%",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
    },
    btn_outer: {
        width: 90,
        height: 90,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_btn: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 30,
    },
    btn1_outer: {
        width: 90,
        height: 90,
        backgroundColor: '#ff5757',
        elevation: 10,
        borderRadius: 30,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1_btn: {
        backgroundColor: '#ff5757',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    btn2_outer: {
        width: 90,
        height: 90,
        backgroundColor: 'grey',
        elevation: 10,
        borderRadius: 30,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg2_btn: {
        backgroundColor: 'grey',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
})

module.exports = { styles };
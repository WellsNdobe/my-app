import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    cube:{
        backgroundColor:"blue",
        height:100,
        width:100,
        borderRadius:50,

    },
    safeAreaView: {
        flex: 1,
        backgroundColor: "#ececec",
        justifyContent: 'center',  // Centers the content vertically
        alignItems: 'center', 
        padding:10,     // Centers the content horizontally
    },
    textContainer:{
        paddingLeft:20,
    },
    container: {
        backgroundColor: "white",
        padding: 20,
        marginHorizontal:40,
        borderRadius: 20,
        flexDirection:"row"
    },
    Title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
    },
    description: {
        flex:1,
        fontWeight: "300",  
        fontSize: 14,
        color: "black",
    }
});
 export default s;
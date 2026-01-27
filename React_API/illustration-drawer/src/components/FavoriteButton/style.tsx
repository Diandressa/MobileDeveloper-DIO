import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fac32c",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 30,
        margin:10,
        boxShadow: "5px 5px 10px #252525",
        position:"absolute",
        top: 0,
        right:0,
        zIndex:2,
    },
    button:{
        flexDirection: "row",
    },
    icon:{
        // marginRight: 10,
    },
    buttonText:{
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
})
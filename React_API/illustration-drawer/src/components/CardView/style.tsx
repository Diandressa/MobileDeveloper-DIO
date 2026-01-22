import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        height:"100%",
        overflow: "hidden",
        borderRadius: 8,
    },
    logoContainer:{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    imageLogo:{
        flex: 1,
        width: "65%",
        resizeMode: "contain",
    },
    drawBrand:{
        color: "#fff",
        fontWeight:"400",
        fontSize: 18,
        fontStyle: "italic",
    },
    drawName:{
        color:"#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    image:{
        flex: 1,
        width: "100%",
        height: "100%",
    }
})

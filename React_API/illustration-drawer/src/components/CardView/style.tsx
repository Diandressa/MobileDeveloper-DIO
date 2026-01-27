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
        width: "65%",
        height: "65%",
        borderRadius: 50,
        resizeMode: "cover",
        backgroundColor: '#f0f0f0'
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
    imageContainer:{
        flex: 0.8,
        borderWidth: 2,
        borderColor: '#fff',
        margin: 10,
        borderRadius: 20,
        position: "relative",
    },
    image:{
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 20,
    },
    buttonNavigationContainer:{
        flexDirection: 'row',
        justifyContent: 'center', 
        gap: 20,
        paddingBottom: 10,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 20,
    },
    descriptionLabel:{
        color: "#fff",
        paddingHorizontal:20,
        textAlign:'center',
    }
})

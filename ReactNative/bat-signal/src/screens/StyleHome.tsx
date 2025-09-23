import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      containerBackground: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "black",
      opacity: 0.5,
    },
    container: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: "80%",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#354D7E",
      marginInline: "auto",
      backgroundColor: "#ffffff92",
    },
    InputStyle: {
      borderWidth: 2,
      borderColor: "#354D7E",
      borderRadius: 10,
      paddingLeft: 20,
      width: "100%",
      marginBottom: 25,
      backgroundColor: "#ffffffe4",
    },
    InputLabel: {
      alignSelf: "flex-start", 
      marginBottom: 10, 
      fontSize: 18,
      color: "#fff"
    }
});

export default styles
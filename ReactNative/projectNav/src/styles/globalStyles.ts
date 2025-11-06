import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        fontFamily: "Roboto",
    },
    topContainer: {
        width: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.primary,
        fontFamily: "Roboto",
        top: 0,
    },
    bottomContainer: {
        flex: 2,
        padding: 30,
        width: '100%',
    },
    boxSkills: {
        backgroundColor: '#EBFCFE',
        borderRadius: 20,
        padding: 40,
        elevation: 1,
        maxHeight: '80%',
    },
    h1: {
        fontSize: 32,
        marginTop: 10,
    },
    text: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15,
        paddingInline: 40,
    },
    perfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    perfilText: {
        fontSize: 32,
        color: '#fff',
        lineHeight: 34,
    },
    buttonLink: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 25,          
        shadowColor: '#00000077',
        elevation: 1,
        alignItems: 'center', 
        zIndex:2,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '60%',
    },
})
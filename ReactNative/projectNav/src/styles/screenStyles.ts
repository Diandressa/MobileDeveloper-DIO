import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    }
})
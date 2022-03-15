import react from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native"

export function Button({onPress}){
    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            onPress={onPress}
            >
        <Text 
            style={styles.buttonText}
        >Add</Text>
      </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    button: {
        backgroundColor: "#a370F7",
        padding: 15,
        marginTop: 20,
        borderRadius: 7,
        alignItems: "center",
      },
      buttonText: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "bold",
      },
})
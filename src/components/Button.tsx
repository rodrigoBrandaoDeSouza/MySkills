import react from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from "react-native"

interface ButtonProps extends TouchableOpacityProps {
    tittle: string
}

export function Button({tittle, ...rest}:ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            {...rest}
            >
        <Text 
            style={styles.buttonText}
        >{tittle}</Text>
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
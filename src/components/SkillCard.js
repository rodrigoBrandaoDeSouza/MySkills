import react from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet
    }

     from 'react-native'


export function SkillCard({skill},{key}){
    return(
        <TouchableOpacity key={key} style={styles.buttonSkill}>
        <Text style={styles.textSkill}>
          {skill}
        </Text>
      </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        padding: 15,
        backgroundColor: "#1F1E25",
        borderRadius: 10,
        alignItems: "center",
        marginTop:15
      },
      textSkill: { 
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
      }
})
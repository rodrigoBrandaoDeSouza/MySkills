import react from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
    }from 'react-native'


interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({skill, ...rest}: SkillCardProps){
    return(
        <TouchableOpacity
           style={styles.buttonSkill}
           {...rest}
          >
        <Text 
          style={styles.textSkill}
        >
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
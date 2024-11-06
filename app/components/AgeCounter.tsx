import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./AgeCounterStyles";

export function AgeCounter() {
  const [age, setAge] = useState(30);

  function IncreaseAge() {
    setAge(age + 1);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={IncreaseAge} style={styles.button}>
        <Text style={styles.buttonText}>Increase Age</Text>
      </TouchableOpacity>
      <Text style={styles.ageText}>{age}</Text>
    </View>
  );
}

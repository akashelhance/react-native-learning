import React from "react";
import { Text, StyleSheet , View, Button} from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>HomeScreen l</Text>
    <Button onPress={()=>console.log("Button Pressed")} title ="Go The Components Demo"/>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

import React from "react";
import { Text, StyleSheet , View, Button, TouchableOpacity} from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>HomeScreen l</Text>
    <Button 
    onPress={()=>console.log("Button Pressed")} 
    title ="Go The Components Demo"
    />
    <TouchableOpacity
    onPress={()=>console.log("This is Second Button Clicked")}>
      <Text>Go To List Components</Text>
    </TouchableOpacity>

    

  
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

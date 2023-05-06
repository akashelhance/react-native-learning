import React from "react";
import { Text, StyleSheet , View, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  
  return <View>
    <Text style={styles.text}>HomeScreen l</Text>
    <Button 
    onPress={()=>props.navigation.navigate('Components')} 
    title ="Go The Components Demo"
    />
    <TouchableOpacity
     onPress={()=>props.navigation.navigate('List')} >
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

import React from 'react';
import {Text, StyleSheet} from 'react-native';


const ComponentsScreen = ()=>{
    return <Text style = {styles.textStyle}> This is Custom Screen And it will be shown on home page</Text>
}



const styles= StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
});


export default ComponentsScreen
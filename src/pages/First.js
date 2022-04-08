import React from 'react';
import { SafeAreaView, Text , StyleSheet, Button } from 'react-native';




function First(props) {
  console.log(props);
  function navigateToPage(){
    props.navigation.navigate('SecondScreen', {username: 'kdrtdnc'});
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello from  First</Text>
      <Button title="Go To Second" onPress={navigateToPage}  />
    </SafeAreaView>
  );
};
export default First; 

const styles= StyleSheet.create({
  container:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:40,
    fontWeight:'bold',
  }
});
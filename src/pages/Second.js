import React from 'react';
import { Text ,View ,StyleSheet,Button} from 'react-native';


function Second(props){
  console.log(props);
  const {username} =props.route.params.username;
  function backToFirst(){
    props.navigation.goBack();
  };
   return(
       <View style={styles.container}>
          <Text style={styles.text}> Hello from Second</Text>
          <Text>{username}</Text>
          <Button title="Go Back" onPress={backToFirst}/>

       </View>
   );

};
export default Second;

const styles=StyleSheet.create({
  container:{flex:1,alignItems:'center',justifyContent:'center'},
  text:{fontSize:40,fontWeight:'bold'},
});
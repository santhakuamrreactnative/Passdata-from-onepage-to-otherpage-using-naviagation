import React from 'react';
import { View, Text , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function FirstScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>First Screen</Text>
      <Button title="Next" onPress={() => {navigation.navigate('SecondScreen',{id : 100, image : 'http://3.bp.blogspot.com/_lqFA-1uTLDA/TA8SOSrQ-rI/AAAAAAAAAAc/faMpAxnStQw/s1600/275px-Niag715.jpg', name : 'Kannan', address : "Car Street, USA.",});}}/>
    </View>
  );
}


export default FirstScreen;
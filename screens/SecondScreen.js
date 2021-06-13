import React from 'react';
import { View, Text , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function SecondScreen({route, navigation}) {

    const {id , image, name, address} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{uri: image}}
       style={{width: 400, height: 400}} />
      <Text>Id : {id}</Text>
      <Text>Customer Name : {name}</Text>
      <Text>Address : {address}</Text>
    </View>
  );
}

export default SecondScreen;
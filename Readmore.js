import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function Readmore({navigation, route}) {
  const[readnumber, setReadnumber] = useState(0);

  return (
    <View>
    <Button title ='Nooooo' onPress= {() =>{
        navigation.navigate("Starten");
      }}/>


      <Text>Read More {route.params.fruit} </Text>
      <Text>{readnumber}</Text>
      <Button title='Plus' onPress={() => { setReadnumber (readnumber + 1);
      }}/>
       
    </View>
  );
}


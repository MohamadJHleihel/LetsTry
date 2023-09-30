import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Fancybox from './Fancybox';
import { useState } from 'react';

export default function App() {

  const [addname, onAddname] = useState("Namn");

  const [people, setPeople] = useState([{key: 'Xerxes', lastname:'Xerxsson'}]);

  return (
    <View style={styles.container}>
      <Text>Hej</Text>
      <TextInput onChangeText={onAddname} value={addname}/>

      <Button title='lägg till' onPress= {() =>{
        const newlist = people.concat({key: addname, lastname: addname});
        setPeople(newlist);
        
      }}/>



      <FlatList
        data={people}
        renderItem={({item}) => <Fancybox name={item} />}
      />
     
    









     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100,
  },
});

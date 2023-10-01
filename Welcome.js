import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableWithoutFeedback,TouchableOpacity, View } from 'react-native';
import Fancybox from './Fancybox';
import { useState } from 'react';
import Readmore from './Readmore';

export default function Welcome({navigation}) {

  const [addname, onAddname] = useState("Namn");

  const [people, setPeople] = useState([{key: 'Xerxes', lastname:'Xerxsson'}]);
  
  const [showReadmore, setShowReadmore] = useState(true);
  function letsAddPerson() { if (addname != ""){
    const newlist = people.concat({key: addname, lastname: addname});
    setPeople(newlist);
    }
  }

  return (
    <View style={styles.container}>
    
      <Button title ='Läsa mera' onPress= {() =>{
        navigation.navigate("Läsmer", {fruit: "papaya"});

      }}/>
      <TouchableWithoutFeedback onPress={() => {
        onAddname("xyz");
      }}>
      <Text>Test touch</Text>
      </TouchableWithoutFeedback>
      <Text>Hej</Text>



    
      

      <TextInput onChangeText={onAddname} value={addname}/>

      <Button title='lägg till' onPress= {() =>{
        letsAddPerson();
        
        
        
      }}/>

      

      <FlatList
        data={people}
        renderItem={({item}) =>
         <TouchableOpacity onPress={() =>{
            console. log ("KLICK RAD" + item. lastname);
            navigation. navigate ("Läsmer", {fruit: "Kiwi"});
            }}>
        <Fancybox name={item}/>
        </TouchableOpacity>
        }
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
    
  },
});

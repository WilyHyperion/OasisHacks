import * as React from 'react';
import 'react-native';
import { StyleSheet, Text, Button} from 'react-native';
import { useFonts } from 'expo-font';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fefae0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    test:{
      color:'#fff',
    },
    Button:{
        position: 'absolute',
        width: 100,
        height: 100,
        left: 150,
        top: 150,
        backgroundColor:'#588157',
        color:'#fff',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#588157',
        fontFamily:'Raleway'
    }
        
  });
export default function Home(props) {
    let [fontsLoaded] = useFonts({
        'Raleway': require('../assets/fonts/Raleway-Bold.ttf'),
    });
    
    return (<>
    
    <Text styles = {styles.title}>Name here</Text>
    <Button title="Scan" styles = {styles.Button} onPress={() => props.navigation.navigate('Scanner')} />   
    <Button title="Scan" styles = {styles.Button} onPress={() => props.navigation.navigate('Scanner')} />   
    <Button title="Scan" styles = {styles.Button} onPress={() => props.navigation.navigate('Scanner')} />   
    <Button title="Scan" styles = {styles.Button} onPress={() => props.navigation.navigate('Scanner')} />   
    <Button title="Scan" styles = {styles.Button} onPress={() => props.navigation.navigate('Scanner')} />   
    <Button title="Test" styles = {styles.Button} onPress={() => props.navigation.navigate('Test')} />   
    
    </>
    );
}


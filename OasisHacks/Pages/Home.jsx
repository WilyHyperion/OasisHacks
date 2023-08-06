import * as React from 'react';
import 'react-native';
import { StyleSheet, Text, Button} from 'react-native';
import { useFonts } from 'expo-font';

export default function Home(props) {
    let [fontsLoaded] = useFonts({
        'Raleway': require('../assets/fonts/Raleway-Bold.ttf'),
    });
    
    return (<>
    
    <Text styles = {styles.title}>Name here</Text>
    <Button title="Scan"styles = {styles.button} onPress={() => props.navigation.navigate('Scanner')} />   
    </>
    );
}
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
    button:{
        paddingTop: 800,
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

import * as React from 'react';
import { Button, Text , Image, View } from 'react-native';
import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
    pagetitle:{
        position: 'absolute',
        left: 0,
        top: 100,
        fontWeight: 'bold',

    },

});

export default function Test(props) {
    
    return (<> 
    <Text style = {style.pagetitle}>Test</Text>
    <View style={{
      width: 720,
      height: 1787,
      backgroundColor: '#D2CCB7',
      position: 'absolute',
      left: 0, // X-coordinate
      top: 0, // Y-coordinate
    }} >
    </View>
    <View>
      <Image
       source={require('../assets/Images/bar.png')} 
        style={{ width: 350, height: 30,
        position: 'absolute',
        left: 20,
        top: 51,
        }} 
        
      />
    </View>
    <Text 
    style={{
      position: 'absolute',
      left: 35, // X-coordinate
      top: 2000, // Y-coordinate
    }} 
    >Ingredients</Text>
    
    <View>
      <Image
        source= {{uri:"https://images.openfoodfacts.org/images/products/002/840/009/1510/front_en.28.400.jpg"}}  
        style={{ width: 250, height: 340,
        position: 'absolute',
        left: 120,
        top: 100,
        }} 
        >
        </Image>
    </View>

    

    </>);
}
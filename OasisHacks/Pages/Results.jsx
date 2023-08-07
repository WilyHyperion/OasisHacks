import * as React from 'react';
import { Button, Text, Image, Pressable,  View, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
const data = require('../assets/data.json')
    const style = StyleSheet.create({
        pagetitle:{
            position: 'absolute',
            left: 0,
            top: 100,
            fontWeight: 'bold',
    
        },
        bad:{
            
            textAlign: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            
            height: 50,
            paddingTop: 0,
            paddingLeft: 10,
            paddingRight: 10,
            color: "white",
            backgroundColor: "#DB4C4C",
        
        },
    
        good:{
            
            textAlign: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
           
            height: 50,
            paddingTop: 0,
            paddingLeft: 10,
            paddingRight: 10,
            color: "white",
            backgroundColor: "#588157",
        }
      });
function removeBrackets(str) {
    let arr = str.split('');
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == '(') {
            let j = i;
            while (arr[j] != ')') {
                arr.splice(j, 1);
            }
            arr.splice(j, 1);
        }
        i++;
    }
    return arr.join('');
}
function score(str) {
    for (let v of data) {
        if(v.FOODCOMMODITYITEM == undefined){
            v.FOODCOMMODITYITEM = v.FOODCOMMODITYTYPOLOGY;
        }
        if(v.FOODCOMMODITYITEM == undefined){
            continue;
        }
        if (v.FOODCOMMODITYITEM.toLowerCase().includes(str)) {
            return v['Carbonfootprint(kgCO2eq/kgorlitreoffoodcommodity)'];
        }
    }
    console.log("not found:" + str);
    return 0;
}

export default function Results(props) {
    let [img, setImg] = React.useState(null);
    let [ing, setIngredients] = React.useState([]);
    if(props.route.params.s){
        return(<></>);
    }
    let id = props.route.params.id;
    let v = `https://world.openfoodfacts.org/api/v0/product/${id}.json`
    let fetched = false;
    fetch(v).then((res) => res.json()).then((res) => {
        if(fetched) return;
        fetched = true;
        console.log(ingredients);
        if(res == undefined){
            return;
        }
        if(res.product == undefined){
            return;
        }
        let img = res.product.image_front_url;
        setImg(img);
        let ingredients = res.product.ingredients_text;
        ingredients = ingredients.replace('and 2% or less of the following:', '');
        ingredients = removeBrackets(ingredients);
        ingredients = ingredients.split(',')
        let total = 0;
        for (let v of ingredients) {
            v = v.trim();
            if (v == '') {
                ingredients.splice(ingredients.indexOf(v), 1);
            }
            v = v.toLowerCase()
            total += score(v);
        }
        setIngredients(ingredients);
        console.log(total);


    })

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
            style={{ width: 350, height: 20,
            position: 'absolute',
            left: 20,
            top: 51,
            borderRadius: 40
            }} 
            
          />
        </View>
        <Text 
        style={{ fontSize:24,
          position: 'absolute',
          left: 10, // X-coordinate
          top: 560, // Y-coordinate
          textDecorationLine: 'underline',
          
        
        }} 
        >Ingredients:</Text>
        
        <View>
          <Image
            source= {{uri:img}}  
            style={{ width: 250, height: 340,
            position: 'absolute',
            left: 75,
            top: 150,
            }} 
            >
            </Image>
            <FlatList
        data = {ing}
        renderItem = {({item}) => {
            return (<Pressable style ={[style.good, {position: 'absolute', left: 140, top: 700, borderRadius:100,}]} >
            <Text style = {{zIndex: 5, fontSize: 19, fontWeight: 'bold', color: 'white' }}> {item}
            </Text>

        </Pressable>
            )
        }}
        />
       
        </View>
       </>);
}
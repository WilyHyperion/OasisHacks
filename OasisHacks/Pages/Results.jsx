import * as React from 'react';
import { Button, Text , Image } from 'react-native';
import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
});

export default function Results(props) {
    let [img, setImg] = React.useState(null);
    let id = props.route.params.id;
    let v = `https://world.openfoodfacts.org/api/v0/product/${id}.json`
    
    fetch(v).then((res) => res.json()).then((res) => {
        let img = res.product.image_front_url;
        setImg(img);
        let ingredients = res.product.ingredients_text;
        let start = 0;
        console.log(ingredients);
        for(let i = 0; i < ingredients.length; i++){
            if(ingredients[i] == '('){
                start = i;
            }
            if(ingredients[i] == ')'){
                ingredients = ingredients.slice(0, start) + ingredients.slice(i + 1, ingredients.length);
            }
        }
        console.log(ingredients);
        ingredients = ingredients.split(',')
        for(let v of ingredients){
                v = v.trim();
                if(v == ''){
                    ingredients.splice(ingredients.indexOf(v), 1);
                }
            }

    })
    return (<>
    <Image source= {{uri:img}}  style ={{width: 400, height: 400}}></Image>
    </>);
}
import  React , { useState, useEffect }from 'react';
import { Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import {BarCodeScanner} from 'expo-barcode-scanner'


const styles = StyleSheet.create({
    cam: {
        width: '95%',
        height: '93%',
        position: 'absolute',
        left: '2.5%',
        top: '5%',
        borderRadius: 20,
        flex: 1,

    },
    container: {
        flex: 1,
        backgroundColor: '#fefae0',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
});
function press(){
    console.log("pressed");
}
export default  function Home(props) {
    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
         })();
      }, []);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [usedYet, SetUsed] = useState(false);

    return (<>
    <Camera style = {styles.cam} type={type}
        onBarCodeScanned= {(...args) => {
        if(usedYet){
                return;
        }
        SetUsed(true);
          const data = args[0].data;
          let result = JSON.stringify(data);
          console.log(result)
            props.navigation.navigate('Results', {result: result});
          }}>
             </Camera>
    </>);
}
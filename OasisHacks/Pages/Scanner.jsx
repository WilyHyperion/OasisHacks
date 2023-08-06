import * as React from 'react';
import { Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import {BarCodeScanner} from 'expo-barcode-scanner'

const styles = StyleSheet.create({
    cam: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        left: 0,
        top: '10%',
        flex: 1,

    },
});
function press(){
    console.log("pressed");
}
export default  function Home(props) {

    const [scanned, setScanned]  = React.useState(false);
    Camera.requestCameraPermissionsAsync();
    Camera.requestPermission
    const handleBarCodeScanned = ({ type, data }) => {
        if(scanned) return;
        if(data == null) return;
        props.navigation.navigate('Results', {
            id: data
        })
        setScanned(true);
      };

    const [permission, requestPermission] = Camera.useCameraPermissions();
    return (<>
    <Text>Scanner</Text>

    {permission?.granted ? (<BarCodeScanner style = {styles.cam} onBarCodeScanned={ handleBarCodeScanned}></BarCodeScanner>) : <Text>Permission not granted</Text>}
    </>);
}
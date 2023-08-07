import * as React from 'react';
import {Text, StyleSheet, Touchable, TouchableOpacity, View} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
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

    const [scanned, setScanned]  = React.useState(false);
    Camera.requestCameraPermissionsAsync();
    Camera.requestPermission
    const handleBarCodeScanned = ({ type, data }) => {
        if(scanned) return;
        if(data == null) return;
        let v = scanned
        setScanned(true);
        props.navigation.navigate('Results', {
            s: v,
            id: data
        })
      };

    const [permission, requestPermission] = Camera.useCameraPermissions();
    return (<>
        {/*<View style={styles.container}>*/}
    {permission?.granted ? (<BarCodeScanner style = {styles.cam} onBarCodeScanned={ handleBarCodeScanned}></BarCodeScanner>) : <Text>Permission not granted</Text>}
        {/*</View>*/}
    </>);
}
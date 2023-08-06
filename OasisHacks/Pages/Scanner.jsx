import * as React from 'react';
import { Text, StyleSheet} from 'react-native';
import { Camera } from 'expo-camera';

const styles = StyleSheet.create({
});

export default function Home(props) {
    return (<>
    <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} />
    </>);
}
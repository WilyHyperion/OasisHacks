import * as React from 'react';
import {useCallback, useMemo, useRef, useState} from 'react';
import 'react-native';
import 'react-native-reanimated';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {Button, Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";
import {BottomSheetBackdropProps} from "@gorhom/bottom-sheet";
import {StatusBar} from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync().then( //wait 5s before hiding splash screen
    () => {
        setTimeout(() => {
            SplashScreen.hideAsync().then(r => console.log("Splash screen hidden"));
        }, 5000);
    });

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');
const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
    // animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            animatedIndex.value,
            [0, 1],
            [0, 1],
            Extrapolate.CLAMP
        ),
    }));

    // styles
    const containerStyle = useMemo(
        () => [
            style,
            {
                backgroundColor: "rgba(9,9,9,0.68)",
                //blur background
            },
            containerAnimatedStyle,
        ],
        [style, containerAnimatedStyle]
    );

    return <Animated.View style={containerStyle} />;
};

export default function Home(props) {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['18%', '65%'], []);
    //set background color to green


    const handleSheetChanges = useCallback((index: number) => {
        // console.log('handleSheetChanges', index);
    }, []);


    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });


    return (
        <>
            <GestureHandlerRootView style={{flex: 1}}>

                <StatusBar backgroundColor="aqua" barStyle={"light-content"}  />
                <View style={styles.home}>
                    <Text style={styles.title}>Eco Label</Text>
                    <Image source={require('../assets/splash.png')} style={
                        {
                            width: 400,
                            height: 400,
                            top: 120,
                            position: 'relative',
                            justifyContent: 'center',
                        }

                    }></Image>
                    <BottomSheet
                        useRef={bottomSheetRef}
                        index={0}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        style={styles.swipeUp}
                        enablePanDownToClose={false}
                        enableOverDrag={false}
                        backgroundStyle={{backgroundColor: '#A3B18A'}}
                        backdropComponent={CustomBackdrop}
                    >
                        {/*<View style={styles.swipeUp}>*/}
                        <Pressable style={styles.buttonContainer}
                                   onPress={() => props.navigation.navigate('Scanner')}

                        >

                            <Text style={styles.buttonText}>Scan Item</Text>
                        </Pressable>
                        <Pressable style={styles.buttonContainer}
                                   onPress={() => alert("This has not been implemented yet")}>

                            <Text style={styles.buttonText}>Add Allergen</Text>
                        </Pressable>

                        {/*</View>*/}
                    </BottomSheet>
                </View>
            </GestureHandlerRootView>

        </>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A3B18A',
    },
    home: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fefae0',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    button: {
        backgroundColor: '#588157',
        backfaceVisibility: 'visible',
        borderRadius: 10,
        color: '#fff',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        //vertical center text
        textAlignVertical: 'center',


        flex: 1,
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#588157',
        //move to top
    },
    buttonContainer: {
        // paddingTop: 50,
        backgroundColor: '#588157',
        borderRadius: 20,
        //top and centered
        position: 'relative',
        left: 0,
        right: 0,
        width: windowDimensions.width - 40,
        height: 100,
        marginBottom: 30,
        //drop shadow at bottom
        shadowColor: '#000',
        shadowOffset: {
            //at bottom
            width: 100,
            height: 10,
        },
        shadowRadius: 10.00,
        elevation: 24,
    },
    swipeUp: {
        //at bottom
        // position: 'absolute',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        //     round at top

        shadowColor: '#000',
        shadowOffset: {
            //at top
            width: 0,
            height: 12,
        },
        shadowRadius: 10.00,
        elevation: 24,
        backgroundStyle: '#A3B18A',

    },  buttonText: {
        //centered, white
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        top: 30,
        flex: 1,
    }

});
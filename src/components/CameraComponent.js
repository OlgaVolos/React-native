import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {Camera} from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

const CameraComponent = () => {
    const [type, setType] = useState(Camera.Constants.Type.back);
   const [hasPermission, setHasPermission] = useState(null);


    const [camera, setCamera] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status==='granted');

        })()
    }, [])
    if (hasPermission===null){
        return <View/>
    }
    if (hasPermission===false){
        return <Text>no access to camera</Text>
    }


    async function takePicture() {
        if (hasPermission){
            const data = await camera.takePictureAsync(null);
            console.log(data);
           // await MediaLibrary.saveToLibraryAsync(data.uri)
               // todo send to server

        }


    }


    function flipBack() {
        setType(Camera.Constants.Type.back)
    }


    const flipFront = () => {
        setType(Camera.Constants.Type.front)
    }

    return <View style={styles.container}>
        <View style={styles.cameraContainer}>

        <Text> CameraComponent page </Text>
            <Camera style={styles.fixedRatio} type={type} ref={(r)=> setCamera(r) }/>
            <Button title={"Take picture"} onPress={takePicture }/>
            <Button title={"flip front"} onPress={flipBack}/>
            <Button title={"flip back"} onPress={flipFront}/>

        </View>
    </View>
};

export default CameraComponent;

let styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'silver'

    },
    cameraContainer:{
        flex: 1
    },
    fixedRatio: {
        flex:1,
        aspectRatio: 1

    }
});

// ref приєднання камери. його потрібно створити через useState. це буде просто посилання на
// камеру, яке буде глобаьлно доступне самме на наш об"єкт камери
// type={type} тип камери ,який в нас є за замовчуванням
// await MediaLibrary.saveToLibraryAsync(data.uri) мало би зберегти в папку девайсу

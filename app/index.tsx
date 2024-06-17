import { ThemedView } from "@/components/ThemedView"
import React from "react"
import { Platform, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import Images from '../constants/images';

export default function IndexScreen(){
    return (
        <>
            <ThemedView style={styles.contentView}>

                <Image style={styles.welcomeIllustration} source={Images.WelcomeImage} resizeMode="cover"/>

                <StatusBar style={Platform.OS === "ios" ? "light" : "dark"}/>
            </ThemedView>
        </>
    )
}

const styles = StyleSheet.create({
    contentView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    welcomeIllustration: {
        width:327,
        height:500
    }
});
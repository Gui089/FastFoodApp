import { ThemedView } from "@/components/ThemedView"
import React from "react"
import { Platform, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import Images from '../constants/images';
import { PrimaryText } from "@/components/atoms/PrimaryText";
import { CustomButton } from "@/components/molecules/CustomButton";
import { router } from "expo-router";

export default function IndexScreen(){
    return (
        <>
            <ThemedView style={styles.contentView}>

                <Image style={styles.welcomeIllustration} source={Images.WelcomeImage} resizeMode="cover"/>

                <ThemedView style={styles.actionsView}>
                    <CustomButton 
                        variant="secondary" 
                        title="Home"
                        onPress={() => {
                            router.replace("/home");
                        }}
                    />
                    <CustomButton 
                        variant="primary" 
                        title="Login" />
                </ThemedView>


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
    },
    actionsView: {
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30
    }
});
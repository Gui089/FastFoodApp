import { ThemedView } from "@/components/ThemedView";
import { PrimaryText } from "@/components/atoms/PrimaryText";
import images from "@/constants/images";
import { StatusBar } from "expo-status-bar";
import { Image, Platform, ScrollView, StyleSheet } from "react-native";


export default function HomeScreen(){
    return (
        <>
            <ThemedView 
                style={styles.headerContent}
            >
                <Image 
                    style={styles.imageLogo}
                    source={require('../assets/images/headerLogo.png')} 
                    resizeMode="cover" />

                <ThemedView style={styles.mapContent}>

                    <PrimaryText
                        style={styles.locationLabel}
                    >
                        Current Location
                    </PrimaryText>

                    <PrimaryText style={styles.addressLabel}>
                        Riacho de Santana BA
                    </PrimaryText>

                </ThemedView>
            </ThemedView>

            <ScrollView 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={true}
                style={styles.scrollViewContent}
            >
                <ThemedView style={styles.banners}>
                    <Image 
                        style={styles.dashboardBanner}
                        source={images.DashBoardBanner} 
                        resizeMode="cover" />
                </ThemedView>
            </ScrollView>

            <StatusBar style={Platform.OS === "ios" ? "light" : "dark"}/>
        </>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        marginTop:40
    },
    imageLogo: {
        width:24,
        height:24
    },
    mapContent: {
        flexDirection:'column',
        marginLeft:12,
    },
    locationLabel: {
        fontSize:13,
        fontWeight:'400',
        color:'#464E58FF',
        opacity:0.8
    },
    addressLabel: {
        color:'#12142C',
        fontSize:15,
        fontWeight:'600',
        marginTop:2
    },
    scrollViewContent:{
        paddingBottom:12
    },
    banners: {
        height:200,
        width:'100%',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    dashboardBanner : {
        width:'94%',
        height:170,
        borderRadius:12,
    }
});
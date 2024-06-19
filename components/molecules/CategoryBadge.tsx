import { Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { PrimaryText } from "../atoms/PrimaryText";

interface CategoryBadgeProps {
    illustrationUri: string;
    label: string;
    onPress: () => void;
}

export const CategoryBadge = ({illustrationUri, label, onPress}: CategoryBadgeProps) => {
    return (
        <Pressable
            onPress={onPress}
        >
            <ThemedView
                style={styles.categoryBadgeContent}
            >
                <Image 
                    resizeMode="cover" 
                    source={{uri: illustrationUri}}  
                    style={styles.categoryBadgeIllustration}
                />

                <PrimaryText style={styles.categoryBadgeLabel}>
                    {label}
                </PrimaryText>
            </ThemedView>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    categoryBadgeContent:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        marginTop:12,
        marginLeft:6,
        paddingHorizontal:12,
        borderWidth:1,
        borderRadius:20,
        color:'#A5ADB7FF'
    },
    categoryBadgeIllustration:{
        height:32,
        width:32,
    },
    categoryBadgeLabel: {
        fontWeight:'500',
        fontSize:14,
        color:'#12142C',
        marginLeft:4,
    }
});
import { ThemedView } from "../ThemedView";
import { Pressable, StyleSheet } from "react-native";
import { PrimaryText } from "../atoms/PrimaryText";

interface SectionHeaderProps {
    title:string;
    actionLabel: string;
    action: () => void;
}

export const SectionHeader = ({title, actionLabel, action}: SectionHeaderProps) => {
    return (
        <ThemedView
            style={styles.sectionHeaderContent}
        >
            <PrimaryText style={styles.sectionHeaderTitle}>
                {title}
            </PrimaryText>

            <Pressable 
                onPress={action}
            >
                <PrimaryText style={styles.sectionActionLabel}>
                    {actionLabel}
                </PrimaryText>
            </Pressable>

        </ThemedView>
    )
}

const styles = StyleSheet.create({
    sectionHeaderContent: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:12,
        paddingBottom:0,
    },
    sectionHeaderTitle: {
        color:'#12142CFF',
        fontWeight:'500',
        fontSize:18
    },
    sectionActionLabel: {
        color:'#A5ADB7FF',
        fontWeight:'400',
        fontSize:14
    }
});
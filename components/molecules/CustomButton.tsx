
import { TouchableOpacity } from "react-native";
import { PrimaryText } from "../atoms/PrimaryText";
import { StyleSheet } from "react-native";

type CustomProps = {
    variant: 'primary' | 'secondary';
    title: string;
}

type CustomButtonProps = CustomProps & TouchableOpacity['props'];

export const CustomButton = ({variant, title, style, ...OtherProps}: CustomButtonProps) => {

    const styles = variants[variant];

    return (
        <TouchableOpacity 
                {...OtherProps}
                style={[styles.button, style]}
            >
            <PrimaryText
                style={styles.text}
            >
                {title}
            </PrimaryText>
        </TouchableOpacity>
    );
}

const variants = {
    primary: StyleSheet.create({
        button: {
            backgroundColor:'#5DB329FF',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:12,
            height:48,
            marginTop:25,
            elevation:2,
            width:'90%'
        },
        text: {
            fontWeight:'600',
            textAlign:'center',
            fontSize:16,
            color:'white'
        }
    }),
    secondary: StyleSheet.create({
        button: {
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:12,
            height:48,
            marginTop:25,
            elevation:2,
            width:'90%',
            borderWidth:1.5,
            borderColor: '#5DB329FF'
        },
        text: {
            color:'#5DB329FF',
            fontWeight:'600',
            textAlign:'center',
            fontSize:16,
        }
    })
}
import React from "react";
import { Text, TextProps } from 'react-native';


export const PrimaryText = (props: TextProps) => {
    return (
        <Text {...props} style={[props.style, {fontFamily:"Inter"}]}/>
    )
}
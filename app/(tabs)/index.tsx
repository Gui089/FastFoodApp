import React from 'react';

import { StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <View style={styles.buttonPRice}>
        <Text style={styles.titlePrice}>
              $2.50
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonPRice: {
    backgroundColor:'#FF4564FF',
    alignSelf:'center',
    marginTop:100,
    padding:10,
    borderRadius:8
  },
  titlePrice: {
    color:'white',
    fontFamily: 'Inter',
    fontWeight:'400',
    fontSize:14
  },
});

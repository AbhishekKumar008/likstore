import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 
import { COLORS } from './styles';

const Introduction = () => {
  return (
    <>
      <View style={styles.introductionContainer}>
          <Text style={styles.headingText}>
             Free Email List Cleaning
          </Text>
          <Text style={styles.subheading}>
            Clean your email lists in bulk to increase email deliverability and improve ROI on email marketing
          </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    introductionContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    headingText:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'700',
        color:COLORS.main
    },
    subheading:{
        textAlign:'center',
        color:COLORS.text,
        fontSize:18,
        padding:10,
    }
})
export default Introduction;

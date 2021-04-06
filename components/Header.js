import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>
            Email List Cleaner
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
      height:60,
      padding:15,
      backgroundColor:'#01b980',
  },
  text:{
      color:'#fff',
      fontSize:24,
      textAlign:'center',
  }
});

export default Header;

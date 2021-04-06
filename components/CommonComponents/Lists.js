import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from '../styles';

// const DATA = [
//     {
//         email:'jbshcvhgdsvchg',
//         _id:'dsjbcvhvccdsc78d67f86d78s',
//         status:'invalid',
//     },
//     {
//         email:'jbshcvhgdsvchg',
//         _id:'dsjbcvhvccdsc78d67f86d78s',
//         status:'invalid',
//     },
//     {
//         email:'jbshcvhgdsvchg',
//         _id:'dsjbcvhvccdsc78d67f86d78s',
//         status:'invalid',
//     }
// ]

const Lists = (props) => {
    const { DATA } = props;
    console.log(DATA);
  return (
    <>
        <View>
            <Text style={styles.headingText}>
                Lists of Email Response
            </Text>
            {
                DATA && DATA.length && DATA.map((items)=>
                <View key={items._id} style={styles.item}>
                    <Text style={styles.email}>{items.email}</Text>
                    <Text style={styles.status}>{items.status}</Text>
                </View>
                )
            }
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
  },
  headingText:{
    fontSize:24,
    color:COLORS.main,
  },
  email: {
    fontSize: 18,
  },
  status:{
      fontSize:14
  }
});

export default Lists

import React from 'react';
import {View, Text, StyleSheet, Linking, Image} from 'react-native';
import {COLORS} from './styles';

const Footer = () => {
  return (
    <>
      <View style={styles.footer}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://tools.grorapid.com/free-email-list-cleaner-and-validation/9cab32fe553005e4ff6cceb91952e47c.png',
          }}
        />
        <Text style={styles.text}>
          © Copyright 2021 - Grorapid. All rights reserved
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            Linking.openURL('https://www.grorapid.com/terms-and-conditions');
          }}>
          Terms & Conditions
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            Linking.openURL('https://www.grorapid.com/privacy-policy');
          }}>
          Privacy Policy
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: COLORS.main,
    padding: 20,
    width: 500,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 5,
  },
  image: {
    width: 200,
    height: 50,
    padding: 10,
  },
});

export default Footer;

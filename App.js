import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Action from './components/Action';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header/>
          <Introduction/>
          <Action/>
          <About/>
          <Footer/>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

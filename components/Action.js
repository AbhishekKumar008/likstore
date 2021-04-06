import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import {COLORS} from './styles';
import { checkEmails } from './utils/common';
import Lists from './CommonComponents/Lists';

const Action = () => {
  const [active, setActive] = useState(false);
  const [inputText, setInputText] = useState('');
  const [respData, setRespData] = useState(null);
  const handleActive = () => {
    setActive(!active);
  };

  const resetState = () => {
    setRespData(null);
    setInputText('');
  }
  

  const handleCheckEmails = async () => {
    const arrOfEmails = inputText.split('\n');
    const newEmailData =arrOfEmails.filter(function (el) {
      return el != "";
    });  
    if(newEmailData.length){
      console.log(inputText.split('\n'));
      const resp = await checkEmails(newEmailData);
      // console.log(resp);
      setRespData(resp)
    }
    else{
      Alert.alert('Error', 'Please Enter emails')
    }
  }
  
  return (
    <View style={styles.actionContainer}>
      <View style={styles.controls}>
        <Button
          title="Clean Emails"
          color={!active ? COLORS.main : COLORS.text}
          onPress={handleActive}
        />
        <Button
          title="Bluk Upload"
          color={active ? COLORS.main : COLORS.text}
          onPress={handleActive}
        />
      </View>
      {!active ? (
        <>
          <View style={styles.textinput}>
            <TextInput multiline defaultValue={inputText} onChangeText={(text)=>{setInputText(text)}}/>
          </View>
          <View style={styles.actionButton}>
            <Button title="Clean Emails" color={COLORS.main} onPress={handleCheckEmails}/>
          </View>
          {
            respData && respData.length &&
            <View style={styles.listSection}>
              <Lists DATA={respData}/>
              <View style={styles.startOverButton}>
                <Button onPress={resetState} title={'Start Over'} color={COLORS.main}/>
              </View>
            </View>
          }
        </>
      )
      :
      (
        <>
          <View>
            <Text>
              Coming soon ...
            </Text>
          </View>
        </>
      )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  actionButton:{
    width:350,
    marginTop:20,
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  textinput: {
    borderColor: COLORS.text,
    borderWidth: 1,
    borderRadius: 100 / 20,
    width: 350,
    height: 150,
    marginTop: 30,
    padding:10,
  },
  listSection:{
    marginTop:20,
    width:350,
  },
  startOverButton:{
    width:100,
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',

  }
});
export default Action;

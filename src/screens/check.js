import { StatusBar } from 'expo-status-bar';
import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Header from '../../shared/header'
import * as firebase from 'firebase';


export default function Check( {navigation}) {
    
    return (
    <View style={styles.container}>
      <Header title= 'Check' />
        <View style={{flex:1, padding:20, alignItems:'center',justifyContent:'center'}}>
          <Button style={{marginTop:10}}
            full
            primary
            onPress = { () => {navigation.navigate('Login')}}
            style={{borderRadius:6}}
          >
            <Text style = {{ color:'white'}}>Logout</Text>
          </Button>
        </View>
      </View>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});

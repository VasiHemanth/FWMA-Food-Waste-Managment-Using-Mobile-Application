import React, { useState, useEffect } from 'react';
import { Image, View, Platform, Alert, StyleSheet,TouchableOpacity,Text, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Container, Label, Form, Item, Input, Content, Header, TabHeading, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


import * as firebase from 'firebase';
import { Left } from 'native-base';
import MapLocation from '../components/maplocation';

export default function Post({navigation}) {
  
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImage(result.uri, "Test-Image-From-Camera-Role").then(() => {
        Alert.alert("Success")
      })
      .catch((error) =>  {
        Alert.alert(error)
        
      })
    }
  };

  const captureImage = async () => {
    let Result = await ImagePicker.launchCameraAsync()

    if(!Result.cancelled){
      setImage(Result.uri)
      uploadImage(Result.uri, "Test-Image-From_camera1").then(()=> {
        Alert.alert("Success! Image uploaded ")
      })
      .catch((error) => {
        Alert.alert(error)
        console.log(error)
      })
    }
  };

  async function uploadImage(uri, imageName ) {
    const response = await fetch(uri);
    const blob = await response.blob();
    
    const ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);

  };


  return (
    <View style={styles.container}>
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Capture the image" onPress={captureImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
      <ScrollView style= {styles.Wrapper}
        showsVerticalScrollIndicator = {false} 
      >
        <View style = {styles.addImg}>
          <TouchableOpacity onPress = {captureImage}>
            <Image 
              source = {require('../../assets/add-image.png')}
              style = {styles.img}
            />
          </TouchableOpacity>
          <View style = {styles.addHeader}>
            <Text style= {styles.addText }>Add an Image!</Text>
          {image && <Image source={{ uri: image }} style={{ width: 50, height: 50, marginLeft:10 }} />} 
          </View>
        </View>
        <View style={styles.border}></View>
          <View style = {styles.details}>
            <Form>
                <Item stackedLabel>
                  <Label >Title</Label>
                  <Input
                    placeholder = "e.g. Loaf of bread"
                    placeholderTextColor = "#bbb"
                  />
                </Item>
                <Item stackedLabel 
                  style = {{marginTop: 20}}  
                >
                  <Label>Description</Label>
                  <Input 
                    placeholder ="e.g. 2 x tins of veg soup, BB Jan 2021"
                    placeholderTextColor = "#bbb"
                    multiline
                  />
                </Item>
                <Item stackedLabel
                  style = {{marginTop: 20}}  
                >
                  <Label>Quantity <Text style={{color:'#4d7902'}}>(this calculates your impact)</Text> <Icon name ="globe" size={18} ></Icon></Label>
                  <Input 
                    placeholder ="enter number of packs e.g. 1 or 2"
                    placeholderTextColor = "#bbb"
                    multiline
                  />
                </Item>
                <Item stackedLabel last
                  style = {{marginTop: 20,}}  
                >
                  <Label>Pick up times <Text style={{color:'#4d7902'}}>(safe sharing during COVID - 19)</Text></Label>
                  <Input 
                    placeholder ="e.g. Today from 4-6pm or I can leave it outside"
                    placeholderTextColor = "#bbb"
                    multiline
                  />
                </Item>
                <Item stackedLabel
                  style = {{marginTop: 20, marginBottom:20}} 
                >
                  <Label >Phone Number</Label>
                  <Input
                    placeholder = "e.g. +91 9652154792"
                    placeholderTextColor = "#bbb"
                  />
                </Item>
            </Form>
            <View style={styles.border}></View>
            <Form>
              <Item stackedLabel last>
                <Label >Your location (approx)</Label>
              </Item>
            </Form>
              
            <View style = {{marginTop: 20, marginBottom:20, borderRadius:2}}>
              <MapLocation />
            </View>
            <Button style={{marginTop:10, marginBottom:35, borderRadius:10}}
              full
              success
              onPress = {()=>{navigation.navigate('Home')}}
            >
              <Text style = {{ color:'white'}}>Submit</Text>
            </Button>
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  Wrapper: {
    flex:1,
    marginTop:25,
    marginLeft:20,
    marginRight:20,
    
  },
  addImg:{
    marginTop:5,
    flexDirection:'row',
    height:100,
    
  },
  img: {
    width:80,
    height:80,
  },
  addHeader: {
    marginLeft: 30,
    paddingTop: 25,
    flexDirection:'row',
  },
  addText: {
    fontSize:18,
    fontWeight:'600',
    color:'grey'
  },
  border: {
    height:25,
    backgroundColor: '#ddd',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderBottomColor: '#B0B3B1',
    borderTopColor: '#B0B3B1'
  },
  details: {
    marginTop:20,
  },
  Top: {
    paddingTop:8 
  }

})
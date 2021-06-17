// @refresh reset 
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import { Container, Label, Form, Item, Button, Input, Content, Header, TabHeading, } from 'native-base';
import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "Enter_your_firebase_api_key",
  authDomain: "**********************",
  projectId: "*******************",
  storageBucket: "******************",
  messagingSenderId: "****************",
  appId: "***************************",
  measurementId: "***************"
};
// Initialize Firebase
if(firebase.apps.length === 0 ){
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}

export default class Auth extends React.Component {

    constructor(props){
        super(props)

        this.state = ({
            email:'',
            password:''
        })
    }
    SignUpUser = (email, password) => {
      try{
        if(this.state.password.length < 8 ){
          Alert.alert('Password must be atleast 8 characters')
        }
        firebase.auth().createUserWithEmailAndPassword(email.trim(),password)
      }
      catch(e) {
          console.log(e.toString())
        }
      }
      LoginUpUser = (email, password) => {
        try {
          firebase.auth().signInWithEmailAndPassword(email.trim(), password).then(user => {
            if(firebase.auth().onAuthStateChanged(user)){
              return(
                this.props.navigation.navigate('HomeBottom')
              )
            }
          })
        }
        catch(e) {
          console.log(e.toString());
        }
      }
      Logout = () => {
        try{
          firebase.auth().signout();
        } catch (e) {
          console.log(e)
        }
      }

      
    render(){
        return(
        <Container style={styles.container}>
            <Image source={require('../../assets/logo.png')}
                style={{width:170,height:120,alignSelf:'center',bottom:70}}
            />
        
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:28,fontWeight:'bold',bottom:40,color:'#444'}}>Log In</Text>
          </View>
         <Form style={{bottom:20}}>
            <Item floatingLabel  style={styles.item}>
              <Label>Email</Label>
              <Input 
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText = {(email) => this.setState({email})}
              />
            </Item>
  
            <Item floatingLabel last style={styles.item}>
              <Label>Password</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText = {(password) => this.setState({password})}
              />
            </Item>
  
            <Button style={{marginTop:20, borderRadius:8}}
              full
              success
              onPress = { () => this.LoginUpUser(this.state.email,this.state.password)}
            >
              <Text style = {{ color:'white'}}>Login</Text>
            </Button>
            <Button style={{marginTop:30, borderRadius:8}}
              full
              primary
              onPress = { () => this.SignUpUser(this.state.email,this.state.password) }
            >
              <Text style = {{ color:'white'}}>Signup</Text>
            </Button>
  
         </Form>
      </Container>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      padding:10
    },
    item: {
      margin:5,
      padding:5
    }
  });

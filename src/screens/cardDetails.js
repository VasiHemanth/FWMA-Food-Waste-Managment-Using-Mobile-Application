import React, {useRef, useState} from 'react';
import { View, Text, StyleSheet, Platform, Dimensions, Image, StatusBar, Alert, ToastAndroid} from 'react-native'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';

import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'native-base';
import Clipboard from '@react-native-community/clipboard';
import ClipboardToast from 'react-native-clipboard-toast'

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

export default function cardDetails({route, navigation}) {
    const itemData = route.params.item
    const navTitleView = useRef(null);
    
    const copyphonenumber = () => {
      Alert.alert('Phone number copied, paste it in the dailpad to contact user')
    }

    return (
        <View style = {styles.container}>
        <StatusBar barStyle = 'light-content' />
            
            <ImageHeaderScrollView
                maxHeight = {MAX_HEIGHT}
                minHeight = {MIN_HEIGHT}
                maxOverlayOpacity = {0.6}
                mixOverlayOpacity = {0.3}
                renderHeader = {() => (
                    <Image source={itemData.image} style={styles.image}/>
                )} 
                renderForeground={() => (
                    <View style={styles.titleContainer}>
                          <Ionicons 
                            name="ios-arrow-back" 
                            size={25}
                            onPress = {()=>{navigation.navigate('Home')}} 
                            style = {{position:'absolute', top:18, left:32, color:'#fff' }} 
                          />
                        <Text style={styles.imageTitle}>{itemData.title}</Text>
                    </View>
                )}
                renderFixedForeground={() => (
                <Animatable.View style={styles.navTitleView} ref={navTitleView}>
                    <Text style={styles.navTitle}>{itemData.title}</Text>
                </Animatable.View>
                )}
            >
                <TriggeringView
                    style = {styles.section}
                    onHide={() => navTitleView.current.fadeInUp(1)}
                    onDisplay={() => navTitleView.current.fadeOut(1)}
                >
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Overview</Text>
                    </View>
                </TriggeringView>
                <View style={styles.section}>
                    <View>
                        <Text 
                          style ={{
                            fontSize:18, 
                            fontWeight:'bold', 
                            marginBottom:15, 
                            color:'#222'
                            }}
                        >
                          Description <Ionicons name="ios-browsers-outline" size={16} style={{fontWeight:'900'}}/>
                        </Text>
                    </View>
                    <Text style={[styles.sectionContent, {color:'#555'}]}>{itemData.description}</Text>
                    <Text style ={{fontSize:18, fontWeight:'bold', paddingTop:15,paddingBottom:15, color:'#222'}}>
                      Quantity <Ionicons name="logo-dropbox" size={18} style={{fontWeight:'900'}}/>
                    </Text>
                    <Text style={[styles.sectionContent, {color:'#555'}]}>
                        {itemData.quantity} packs
                    </Text>
                    <Text style ={{fontSize:18, fontWeight:'bold', paddingTop:15,paddingBottom:15, color:'#222'}}>
                      Pick up times <Ionicons name="md-time" size={18} style={{fontWeight:'900'}}/>
                    </Text>
                    <Text style={[styles.sectionContent, {color:'#555'}]}>
                        {itemData.pickuptime}. Preferably a pick up service
                    </Text>
                    <Text style ={{fontSize:18, fontWeight:'bold', paddingTop:15,paddingBottom:15, color:'#222'}}>
                      Phone no. <Ionicons name="md-call" size={18} style={{fontWeight:'900'}}/> <Text style = {{color:'#555',fontSize:12}}>(Press on phone number & click requst this)</Text>
                    </Text>
                    <ClipboardToast
                        textToShow={itemData.phonenumber}
                        textToCopy={itemData.phonenumber}
                        toastText={"Phone number copied"}
                        id={'top'}
                        containerStyle={[styles.sectionContent, {color:'#555'}]}
                        textStyle={{ fontSize: 16, color: "black" }}
                        accessibilityLabel={"click me to copy phone number"}
                        toastPosition={'bottom'}
                        toastDelay={1000}
                        ToastAndroid={()=>{Alert.alert('Phone number copied')}}
                      />

                </View>
                <View style={[styles.section, {height: 380}]}>
                    <View>
                        <Text style={{fontSize:16, fontWeight:'600', marginBottom:15, color:'#333'}}>
                            APPROX. LOCATION <Ionicons name="ios-flag" size={18} style={{fontWeight:'900'}}/> 
                        </Text>
                    </View>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{flex: 1}}
                        region={{
                            latitude: itemData.coordinate.latitude,
                            longitude: itemData.coordinate.longitude,
                            latitudeDelta: 0.00864195044303443,
                            longitudeDelta: 0.000142817690068,
                        }}>
                            <MapView.Marker
                                coordinate={itemData.coordinate}
                                image={require('../../assets/map_marker.png')}
                            />
                    </MapView>
                    <Button style={{marginTop:25, marginBottom:35, borderRadius:8}}
                      full
                      success
                      onPress = {()=>{copyphonenumber()}}
                      >
                      <Text style = {{ color:'white',fontSize:16}}>Request this</Text>
                    </Button>
                </View>
            </ImageHeaderScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      height: MAX_HEIGHT,
      width: Dimensions.get('window').width,
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    title: {
      fontSize: 20,
    },
    name: {
      fontWeight: 'bold',
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: 'white',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    sectionContent: {
      fontSize: 16,
      textAlign: 'justify',
    },
    categories: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    categoryContainer: {
      flexDirection: 'row',
      backgroundColor: '#FF6347',
      borderRadius: 20,
      margin: 10,
      padding: 10,
      paddingHorizontal: 15,
    },
    category: {
      fontSize: 14,
      color: '#fff',
      marginLeft: 10,
    },
    titleContainer: {
      flex: 1,
      top:50,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageTitle: {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: 24,
      fontWeight:'900'
    },
    navTitleView: {
      height: MIN_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 40 : 5,
      opacity: 0,
    },
    navTitle: {
      color: 'white',
      fontSize: 18,
      backgroundColor: 'transparent',
    },
    sectionLarge: {
      minHeight: 300,
    },
  });
  
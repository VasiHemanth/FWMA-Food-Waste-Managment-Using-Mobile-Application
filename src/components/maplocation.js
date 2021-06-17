import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet,Dimensions } from 'react-native';
import * as Location from 'expo-location';

import MapView, {Marker} from 'react-native-maps';

export default function MapLocation() {
  // const [location, setLocation] = useState();
  // const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }
  
  // let userlatitude = location.coords.latitude;
  // let userlongitude = location.coords.longitude;
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        region={{
            latitude:13.1138,
            longitude: 77.6347,
            latitudeDelta: 0.005,
            longitudeDelta: 0.009,
          }}
      >
        <MapView.Marker
            coordinate={{
            latitude:13.1138,
            longitude: 77.6347,
            }}
            image={require('../../assets/marker-100.png')}
            
        >
        </MapView.Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({ 
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width-30,
        height: 200,
    },
 }); 
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native';

import Header from '../../shared/header'
import {DATA} from '../model/data'

// const DATA = [
//   {
//     id: '1',
//     title: 'First Item',
//   },
//   {
//     id: '2',
//     title: 'Second Item',
//   },
//   {
//     id: '3',
//     title: 'Third Item',
//   },
//   {
//     id: '4',
//     title: 'Fourth Item',
//   },
//   {
//     id: '5',
//     title: 'Fith Item',
//   },
//   {
//     id: '6',
//     title: 'Sixth Item',
//   },
// ];

const Item = ({  title, description, image, onPress }) => (
    <View style={styles.cardsWrapper}>
        <TouchableOpacity 
          style={styles.card}
          onPress = {onPress}

        >
          <View style={styles.cardImgWrapper}>
            <Image 
              source={image}
              resizeMode='cover'
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardinfo}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text numberOfLines={2} style={styles.cardDetails}>{description}</Text>
          </View>
        </TouchableOpacity>
        </View>
);

const Home = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} image = {item.image} 
      onPress = {()=> {navigation.navigate('CardDetials',{item:item}, {phonenumber:item.phonenumber})}} 
    />
  );

  return (
    <SafeAreaView style={styles.container}>
    <Header title= 'Home' />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  cardsWrapper: {
    marginTop: 5,
    width:'90%',
    alignSelf:'center'
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection:'row',
    shadowColor:'#999',
    shadowOffset:{width:0,height:1},
    shadowOpacity:0.8,
    shadowRadius:2,
    elevation:5
  },
  cardImgWrapper: {
    flex:1
  },
  cardImg: {
   width:'100%', 
   height:'100%',
   alignSelf:'center',
   borderRadius:8,
   borderBottomRightRadius: 0,
   borderTopRightRadius: 0,
  },
  cardinfo: {
    flex:2,
    padding:10,
    borderColor: '#ccc',
    borderWidth:1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor:'#fff'
  },
  cardTitle: {
    fontWeight:'bold'
  },
  cardDetails: {
    fontSize:12,
    color:'#444'
  }
});

export default Home;
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Header({ title, navigation }) {

//   const openMenu = () => {
//     navigation.openDrawer();
//   }

  return (
    <View  style={styles.header}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop:30,
    paddingVertical: 15,
    borderBottomWidth:1,
    borderBottomColor: "#DDD"
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',    
  },
  headerTitle: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginLeft:5
  },
  icon: {
    position: 'absolute',
    
  },
})
  
//   },
// })
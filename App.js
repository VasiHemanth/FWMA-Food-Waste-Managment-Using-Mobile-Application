import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View , Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { enableScreens } from 'react-native-screens';
enableScreens();

import  Auth  from './src/components/auth';
import  Check from './src/screens/check';
import  Home  from './src/screens/home';
import  Post  from './src/screens/post';
import  cardDetails  from './src/screens/cardDetails'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();

const bottom = createBottomTabNavigator();


const CustomTabBarButton = ({ children, onPress}) => {
    return(
    <TouchableOpacity
        style={{
            top:-30,
            justifyContent:'center',
            alignItems:'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
      <View
      style={{
          width:50,
          height:50,
          borderRadius:35,
          backgroundColor:'#F9CE69'
      }}
      >
          {children}
      </View>
    </TouchableOpacity>
    )
}

const Homebottom = () => {
    return(
    <bottom.Navigator
        tabBarOptions={{
            showLabel:false,
            activeTintColor:'#4741A6',
            inactiveTintColor:'grey',
            showIcon: true,
            ...styles.shadow
        }}
    >
        <bottom.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarIcon: ({focused}) =>
                    <View style = {{
                        alignItems:'center', 
                        justifyContent:'center' 
                        }}>
                        <Image 
                            source={require('./assets/home.png')}
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#4741A6' : 'grey'
                            }}
                        />
                        <Text style={{color: focused ? '#4741A6' : 'grey', fontSize:10,}}>
                            Home
                        </Text>
                    </View>
            }}
            />
        <bottom.Screen 
            name='Post'
            component={Post}
            options={{
                tabBarIcon: ({focused}) => ( 
                    <Image 
                        source={require('./assets/add.png')}
                        style={{
                            width:30,
                            height:30,
                            tintColor: '#fff'
                        }}
                    />
                ),
                tabBarButton: (props) =>
                    <CustomTabBarButton  {...props}/>
                
            }}
        />
        <bottom.Screen 
            name="Check" 
            component={Check}
            options={{
                tabBarIcon: ({focused}) => 
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image 
                        source={require('./assets/person-circle.png')}
                        style={{
                            width:28,
                            height:28,
                            tintColor: focused ? '#4741A6' : 'grey'
                        }}
                    />
                    <Text style={{color: focused ? '#4741A6' : 'grey', fontSize:10,}}>Profile</Text>
                </View>
            }}
            />
    </bottom.Navigator>
    )
}

export default function Navigation(){

    return(
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Login' component={Auth}  />
                <Stack.Screen name='HomeBottom' component={Homebottom}  />
                <Stack.Screen name='CardDetials' component={cardDetails} 
                    options={({route}) => ({
                        // title: route.params.title,
                        headerBackTitleVisible: false,
                        headerTitle: false,
                        headerTransparent: true,
                        headerTintColor: '#fff'
                    })} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5

    }
})
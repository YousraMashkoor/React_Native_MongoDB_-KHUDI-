import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons'

//importing screens
import Login from '../screens/login';
import Forgot from '../screens/forgot';
import Signin from '../screens/signin';
import Profile from '../screens/profile';
import Postview from '../screens/postView';
import Chat from '../screens/chat';
import Explore from '../screens/explore';
import sellerForm from '../screens/sellerForm';
import successfulSignin from '../component/successfulSignin';
import becomeSeller from '../component/becomeSeller';
import loading from '../component/loading';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


    function MyTabs() 
    {
        return (
          <Tab.Navigator>
            <Tab.Screen name="Explore" component={Explore} 
            options={{
                tabBarLabel: 'EXPLORE',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-search" color={tintColor} size={24} />),
                }}
            />
            <Tab.Screen name="Profile" component={Profile} 
            options={{
                tabBarLabel: 'PROFILE',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-person" color={tintColor} size={24} />),
                }}
            />
            <Tab.Screen name="Chat" component={Chat} 
            options={{
                tabBarLabel: 'CHAT',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-chatboxes" color={tintColor} size={24} />),
                }}
            />
          </Tab.Navigator>
        );
      }

class Navigation extends Component{

    render(){    
        return(
            //headreShown hides the header on individual screen on <Stack.Screen>
            // there's also a method to hide header on all screens on <Stack.Navigator>
            <NavigationContainer>
                <Stack.Navigator initialRooptions={{headerShown: false}}uteName="login">
                    <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                    <Stack.Screen name="Forgot" component={Forgot} />
                    <Stack.Screen name="Signin" component={Signin} />
                    <Stack.Screen options={{headerShown: false}} name="successfulSignin" component={successfulSignin} />
                    <Stack.Screen options={{headerShown: false}} name="loading" component={loading} />
                    <Stack.Screen options={{headerShown: false}} name="becomeSeller" component={becomeSeller} />
                    <Stack.Screen options={{headerShown: false}} name="Explore" component={MyTabs} />
                    <Stack.Screen options={{headerTitle:'KHUDI Seller'}} name="sellerForm" component={sellerForm} />
                    <Stack.Screen options={{headerTitle:'post'}} name="postview" component={Postview} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation;

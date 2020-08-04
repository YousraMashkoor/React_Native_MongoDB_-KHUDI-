import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/login';
import Forgot from '../screens/forgot';
import Signin from '../screens/signin';

const Stack = createStackNavigator();

class Navigation extends Component{
    render(){
        return(
            //headreShown hides the header on individual screen on <Stack.Screen>
            // there's also a method to hide header on all screens on <Stack.Navigator>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="Signin" component={Signin} />
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation;

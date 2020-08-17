import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/login';
import Forgot from '../screens/forgot';
import Signin from '../screens/signin';
import successfulSignin from '../component/successfulSignin';
import loading from '../component/loading';
import dummyDisplay from '../component/dummyDisplay';

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
                <Stack.Screen options={{headerShown: false}} name="successfulSignin" component={successfulSignin} />
                <Stack.Screen options={{headerShown: false}} name="loading" component={loading} />
                <Stack.Screen name="dummyDisplay" component={dummyDisplay} />
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation;

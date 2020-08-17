import React,{Component, useState } from 'react';
import { View, Text, Dimensions, TextInput, Alert, Keyboard, KeyboardAvoidingView, StyleSheet} from 'react-native';
import { RadioButton} from 'react-native-paper';
import {TapGestureHandler, State} from 'react-native-gesture-handler'
import Animated,{Easing} from 'react-native-reanimated'

// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
const { width, height } = Dimensions.get('window');
// const [checked, setChecked] = React.useState('first');

// SIGNIN FORM


class Signin extends Component{

    state = {checked:'male'};
   
    constructor() {
        super();
        // this.onPressFlag = this.onPressFlag.bind(this);
        // this.selectCountry = this.selectCountry.bind(this);
        // this.state = {
        //     cell:null,
        //   pickerData: null,
        // };
      }

    
    //   onPressFlag() {
    //     this.myCountryPicker.open();
    //   }
    
    //   selectCountry(country) {
    //     this.phone.selectCountry(country.iso2);
    //   }
    render(){
        const { checked } = this.state;
        const setChecked = checked => this.setState({ checked });

        return(
            <View style={{backgroundColor:"#FFF",height:"100%", justifyContent:'flex-start',flex:1}}>
                <KeyboardAvoidingView style={{ display:"flex"}}>
                    <Text style={{color:'#1F2833', fontWeight:'bold', textAlign:'center',fontSize:22, marginVertical:10}}>
                        Create My Account
                    </Text>
                    <View >
                        <TextInput
                            placeholder="FIRST NAME"
                            style={[styles.textInput]}
                            placeholderTextColor='black'
                        />
                        <TextInput
                            placeholder="LAST NAME"
                            style={[styles.textInput]}
                            placeholderTextColor='black'
                        />
                    </View>

                    <TextInput
                        placeholder="EMAIL"
                        style={styles.textInput}
                        placeholderTextColor='black'
                    />
                    <TextInput
                        placeholder="PASSWORD"
                        style={styles.textInput}
                        placeholderTextColor='black'
                        
                    />
                    <RadioButton.Group 
                        onValueChange={checked => setChecked(checked)} value={checked}
                        >
                            <RadioButton.Item 
                                style={styles.radio}
                                label="Male" 
                                value="male" 
                                color='#1F2833'/>
                            <RadioButton.Item 
                                style={styles.radio}
                                label="Female" 
                                value="female"
                                color='#1F2833' />
                    </RadioButton.Group>



                    <TapGestureHandler onHandlerStateChange={() => this.props.navigation.navigate('successfulSignin')}>
                        <Animated.View style={styles.button}>
                        <Text  style={{fontSize:20,fontWeight:'bold', color:'white'}}>REGISTER</Text>
                        </Animated.View>
                    </TapGestureHandler>
                </KeyboardAvoidingView>
            </View>

        )
    }
}

export default Signin;

const styles = StyleSheet.create({
    textInput:{
        height:50,
        borderRadius:25,
        borderWidth:0.5,
        marginHorizontal:20,
        paddingLeft:10,
        marginVertical:5,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
      },
      radio:{
        marginRight:width/2,
        height:50,
        borderRadius:25,
        borderWidth:0.5,
        marginHorizontal:10,
        paddingLeft:10,
        marginVertical:5,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
      },
      button: {
        backgroundColor: '#1F2833',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: { width:2,height:2},
        shadowColor:'black',
        shadowOpacity:0.2,
        elevation:3
      },
    });
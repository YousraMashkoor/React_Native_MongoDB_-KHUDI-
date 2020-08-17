import React,{Component, useState } from 'react';
import { View, Text, Dimensions, TextInput, ScrollView, KeyboardAvoidingView, StyleSheet,Picker} from 'react-native';
import { RadioButton} from 'react-native-paper';
import {TapGestureHandler, State} from 'react-native-gesture-handler'
import Animated,{Easing} from 'react-native-reanimated'

// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
const { width, height } = Dimensions.get('window');
// const [checked, setChecked] = React.useState('first');

// SIGNIN FORM


class SellerSignin extends Component{

    state = {checked:'male',category:null};
    // state = {category};
   
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
        const { category } = this.state;
        const setChecked = checked => this.setState({ checked });
        const setCategory = category => this.setState({ category });

        return(
            <View style={{backgroundColor:"#FFF",height:"100%", justifyContent:'flex-start',flex:1}}>
                <KeyboardAvoidingView style={{ display:"flex"}}>
                    <Text style={{color:'#1F2833', fontWeight:'bold', textAlign:'center',fontSize:22, marginVertical:10}}>
                        Seller Account
                    </Text>
                <ScrollView scrollEventThrottle={16}>
                    <Text style={{marginLeft:20}}>Personal Info</Text>
                    <View >
                        <TextInput
                            keyboardType='number-pad'
                            placeholder="CNIC"
                            style={[styles.textInput]}
                            placeholderTextColor='black'
                            autoCompleteType='cc-number'
                        />
                        <TextInput
                            keyboardType='number-pad'
                            placeholder="PHONE NO"
                            style={[styles.textInput]}
                            placeholderTextColor='black'
                            autoCompleteType='tel'
                            maxLength={11}
                        />
                        <TextInput
                            placeholder="ADDRESS"
                            style={[styles.textArea]}
                            placeholderTextColor='black'
                            autoCompleteType='street-address'
                            multiline={true}
                        />


                        <View style={{backgroundColor:'black', height:10,marginBottom:10}}></View>
                        <Text style={{marginLeft:20}}>Service Info</Text>
                        <Picker
                            selectedValue={category}
                            style={[styles.textInput]}
                            onValueChange={category => setCategory(category)} value={category}>
                                <Picker.Item label="Baking" value="baking" />
                                <Picker.Item label="Stitching" value="stitching" />
                                <Picker.Item label="Arts and Crafts" value="arts" />
                                <Picker.Item label="Development" value="development" />
                        </Picker>
                        <TextInput
                            placeholder="DESCRIPTION"
                            style={[styles.textArea]}
                            placeholderTextColor='black'
                            autoCompleteType='off'
                            multiline={true}
                        />

 
                    </View>

                
                        <TapGestureHandler onHandlerStateChange={() => this.props.navigation.navigate('successfulSignin')}>
                            <Animated.View style={styles.button}>
                            <Text  style={{fontSize:20,fontWeight:'bold', color:'white'}}>VERIFY</Text>
                            </Animated.View>
                        </TapGestureHandler>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>

        )
    }
}

export default SellerSignin;

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
      textArea:{
        height:100,
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
import React,{Component, useState } from 'react';
import { View, Text, Dimensions, TextInput, Alert, Keyboard, KeyboardAvoidingView, StyleSheet} from 'react-native';

// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
const { width, height } = Dimensions.get('window');




class Signin extends Component{
   
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
        return(
            <View>
                <KeyboardAvoidingView style={{ display:"flex"}}>
                    <View>
                        <TextInput
                            placeholder="FIRST NAME"
                            style={[styles.textInput,{marginHorizontal:width/5}]}
                            placeholderTextColor='black'
                        />
                        <TextInput
                            placeholder="LAST NAME"
                            style={[styles.textInput,{marginHorizontal:width/5}]}
                            placeholderTextColor='black'
                        />
                    </View>

                    <TextInput
                        placeholder="EMAIL"
                        style={styles.textInput}
                        placeholderTextColor='black'
                    />
                    {/* <Text>
                     <PhoneInput
                        placeholder="Enter phone number"
                        value={this.state.cell}
                        // displayInitialValueAsLocalNumber='true'
                        // initialCountry="US"
                        onChangeText={text => this.setState({ cell: text })}/>
                    </Text> */}
                    {/* <Text>Signin page</Text> */}
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
    });
import React,{Component, useState } from 'react';
import { View, Text, Dimensions, TextInput, ScrollView, Button, KeyboardAvoidingView, StyleSheet,Switch, Picker} from 'react-native';
import { RadioButton} from 'react-native-paper';
import {TapGestureHandler, State} from 'react-native-gesture-handler'
import * as theme from '../theme';
import Animated,{Easing} from 'react-native-reanimated'
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
// import DatePicker from 'react-native-datepicker'
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
const { width, height } = Dimensions.get('window');
// const [checked, setChecked] = React.useState('first');

// SIGNIN FORM


class SellerSignin extends Component{

    state = {checked:'male',category:null};
    
    state ={
        startdatevisibility:false,
        startDateDisplay:"",
        enddatevisibility:false,
        endDateDisplay:"",
        isEnabled: false
    }

    // state = {category};
   
    constructor() {
        super();
        // this.state = {date:"2016-05-15"}
      }


    render(){
        const { checked } = this.state;
        const { category } = this.state;
        const setChecked = checked => this.setState({ checked });
        const setCategory = category => this.setState({ category });
       
        // for strat date

        const onPressButtonStart = () => {
            this.setState({startdatevisibility:true})
        };
       
        const onPressCancelStart = () => {
            this.setState({startdatevisibility:false})
        };
       
        const handleConfirmStart = (date) => {
         this.setState({startDateDisplay:date.toUTCString()})
        };

        // for end date
        const onPressButtonEnd = () => {
            this.setState({enddatevisibility:true})
        };
       
        const onPressCancelEnd = () => {
            this.setState({enddatevisibility:false})
        };
       
        const handleConfirmEnd = (date) => {
         this.setState({endDateDisplay:date.toUTCString()})
        };

        const { checked1 } = this.state;
        const setChecked1 = checked1 => this.setState({ checked1 });

        // // for toggle button
        // const toggleSwitch = (value) => {
        //     this.setState({isEnabled:!value})
        //    };
   ;

        return(
            <View style={{backgroundColor:"#FFF",height:"100%", justifyContent:'flex-start',flex:1}}> 
            <ScrollView scrollEventThrottle={16}>
                <KeyboardAvoidingView style={{ display:"flex"}}>
                    <Text style={{color:'#1F2833', fontWeight:'bold', textAlign:'center',fontSize:22, marginVertical:10}}>
                        Seller Account
                    </Text>
               
                    <Text style={{marginLeft:20, color:theme.colors.lightblue}}>Personal Info</Text>
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
                        <TextInput
                            placeholder="LANGUAGE"
                            style={[styles.textInput]}
                            placeholderTextColor='black'
                            autoCompleteType='off'
                            maxLength={11}
                        />
                        <Text style={{marginLeft:20,color:theme.colors.lightblue}}>Occupation</Text>
                        <TextInput
                            placeholder="TITLE"
                            style={[styles.textInput]}
                            placeholderTextColor='black'
                            autoCompleteType='off'
                            maxLength={11}
                        />
                        <TextInput
                            placeholder="COMPANY"
                            style={[styles.textInput]}
                            placeholderTextColor='black'
                            autoCompleteType='off'
                            maxLength={11}
                        />
                        <TextInput
                            placeholder="LOCATION"
                            style={[styles.textInput]}
                            placeholderTextColor='black'
                            autoCompleteType='tel'
                            maxLength={11}
                            />

                            <Button style={{color:'black' }} title="START DATE" onPress={onPressButtonStart} />
                            <Text style={{marginLeft:30, fontSize:15}}>{this.state.startDateDisplay}</Text>
                            <DateTimePickerModal
                                isVisible={this.state.startdatevisibility}
                                mode="date"
                                onConfirm={handleConfirmStart}
                                onCancel={onPressCancelStart}
                            /> 

                            <Button style={{color:'black' }} title="START DATE" onPress={onPressButtonEnd} />
                            <Text style={{marginLeft:30, fontSize:15}}>{this.state.endDateDisplay}</Text>
                            <DateTimePickerModal
                                isVisible={this.state.enddatevisibility}
                                mode="date"
                                onConfirm={handleConfirmEnd}
                                onCancel={onPressCancelEnd}
                            /> 

                            <Text style ={{marginLeft:30}}>CURRENTLY WORKING HERE: </Text>
                            <RadioButton.Group
                                onValueChange={checked1 => setChecked1(checked1)} value={checked1}
                            >
                                <RadioButton.Item
                                    style={styles.radio}
                                    label="Yes"
                                    value="yes"
                                    color='#1F2833' />
                                <RadioButton.Item
                                    style={styles.radio}
                                    label="No"
                                    value="no"
                                    color='#1F2833' />
                            </RadioButton.Group>
                            {/* <Switch 
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={this.state.isEnabled}
                            /> */}
                            {/* <DatePicker
                                style={{ width: 200 }}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2012-05-01"
                                maxDate="2030-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                                
                            /> */}


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

                
                        <TapGestureHandler onHandlerStateChange={() => this.props.navigation.navigate('faceDetect')}>
                            <Animated.View style={styles.button}>
                            <Text  style={{fontSize:20,fontWeight:'bold', color:'white'}}>VERIFY</Text>
                            </Animated.View>
                        </TapGestureHandler>
                    
                </KeyboardAvoidingView>
                </ScrollView>
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
          marginLeft:30,
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
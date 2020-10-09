import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Picker,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";


// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
const { width, height } = Dimensions.get("window");
// const [checked, setChecked] = React.useState('first');

// SIGNIN FORM

class createPost extends Component {
    state = { category: 'baking' };

  render() {

    const { checked } = this.state;
    const setChecked = (checked) => this.setState({ checked});

    return (
      <View
        style={{
        //   backgroundColor: '#3b444b',
          height: "100%",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <KeyboardAvoidingView style={{ display: "flex" }}>
          <ScrollView>
          <Text style={{color: "#1F2833",fontWeight: "bold",textAlign: "center",fontSize: 30,marginVertical: 10, marginTop:40}}>
              Add your Fields
            </Text>
            <View>
              <TextInput
                placeholder="POST TITLE"
                style={[styles.textInput]}
                placeholderTextColor="black"
                
              />
              
              <TextInput
                placeholder="TAG LINE"
                style={[styles.textInput]}
                placeholderTextColor="black"
                
              />
              
            </View>

            <TextInput
              placeholder="DETAILS"
              style={styles.textInput}
              placeholderTextColor="black"
              
            />

 //*********** SUHA picker se nhn ho to bta dena me radio button dal dungi. yahan phans mt jana!!!!!!!  */           
        <RadioButton.Group
              onValueChange={(checked) => setChecked(checked)}
              value={checked}
            >
              <RadioButton.Item
                defaultChecked
                style={styles.radio}
                label="Male"
                value="male"
                color="#1F2833"
              />
              <RadioButton.Item
                style={styles.radio}
                label="Female"
                value="female"
                color="#1F2833"
              />
              <RadioButton.Item
                style={styles.radio}
                label="Other"
                value="other"
                color="#1F2833"
              />
            </RadioButton.Group>
            
            <TextInput
              placeholder="STARTING PRICE"
              style={styles.textInput}
              placeholderTextColor="black"
              keyboardType="number-pad"
              secureTextEntry
              
            />
            
             
            <TextInput
              placeholder="CONFIRM PASSWORD"
              style={styles.textInput}
              placeholderTextColor="black"
              secureTextEntry
             
            />
           
              
            

            {/* <TapGestureHandler
            onHandlerStateChange={() =>
              this.props.navigation.navigate("successfulSignin")
            }
          > */}
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("order")}>
              <Animated.View style={styles.button}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                  onPress={this.signIn}
                >
                  REGISTER
                </Text>
              </Animated.View>
            </TouchableOpacity>
            {/* </TapGestureHandler> */}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default createPost;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    marginRight: width / 2,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 10,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#1F2833",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 3,
  },
});

import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import Card from '../component/Explore/card'
import { TapGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";


// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
const { width, height } = Dimensions.get("window");
// const [checked, setChecked] = React.useState('first');

// SIGNIN FORM

class createPost extends Component {
  render() {


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
              Welcome Back!
            </Text>
            <Text style={{color: "#1F2833",fontWeight: "bold",textAlign: "center",fontSize: 22,marginVertical: 10,}}>
              Your Posts
            </Text>
            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Card
                        width={width}
                        navigation={this.props.navigation}
                        name="Cookie Dow Cake"
                        type="CUSTOMIZED - Flavoured frostings - 2 layer"
                        price={500}
                        rating={4}
                        img={require('./../../assets/baking.jpg')}
                        category="baking"
                        details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                    />
                    <Card
                                    width={width}
                                    navigation={this.props.navigation}
                                    name="Veggie Pizza"
                                    type="CUSTOMIZED - Cheese layers - 4 Toppings - Crisp or Calm"
                                    price={500}
                                    rating={5}
                                    img={require('./../../assets/pizza.jpg')}
                                    category="baking"
                                    details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                                
                                />
                    </View>
           
              
            

            {/* <TapGestureHandler
            onHandlerStateChange={() =>
              this.props.navigation.navigate("successfulSignin")
            }
          > */}
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("addPost")}>
              <Animated.View style={styles.button}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                  onPress={this.signIn}
                >
                  CREATE POST
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

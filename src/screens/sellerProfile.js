import React, { Component } from "react";
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {TapGestureHandler, State} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Switch } from 'react-native-paper';

// import Share from 'react-native-share';

// import files from '../assets/filesBase64';

class sellerProfile extends Component {

  constructor(props) { 
    super(props); 
    this.state = {
      sellerMode: true
     }
  }
  switch = (value) => {
    this.setState({ sellerMode: value });
    this.state.sellerMode ? this.props.navigation.navigate('Explore'): this.props.navigation.navigate('SellerMode');
    this.setState({ sellerMode: true });

  }

render(){
  // let isSwitchOn=false;
  // const onToggleSwitch = () => {(isSwitchOn=!isSwitchOn)};

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>
        <ScrollView>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>john_doe@email.com</Text>
        </View>
        <View style={styles.row}>
          <Icon name="identifier" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>421013736490</Text>
        </View>
        <View style={styles.row}>
          <Icon name="human-male-height" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>25</Text>
        </View>
        <View style={styles.row}>
          <Icon name="firework" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>kurti stitching, maxi design, silwar suit</Text>
        </View>
        <View style={styles.row}>
          <Icon name="information" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>I am an export tailor, who has worked with more than 30 client with 100% satisfaction. I can maek you complex and unique design to your liking unto simple and plan stitching. Looking forward to working with you.</Text>
        </View>
      </View>
      

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title style={{color:'white'}}>5000 Rs</Title>
            <Caption style={{color:'#38DFEB'}}>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title style={{color:'white'}}>12</Title>
            <Caption style={{color:'#38DFEB'}}>Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        {/* <TouchableRipple onPress={myCustomShare}> */}
        <TouchableRipple onPress={() => this.props.navigation.navigate('Chat')}>
          <View style={styles.menuItem}>
            <Icon name="chat-outline" color="#38DFEB" size={25}/>
            <Text style={styles.menuItemText}>Join Conversation</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="package-variant" color="#38DFEB" size={25}/>
            <Text style={styles.menuItemText}>Orders</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => this.props.navigation.navigate('editSellerProfile')}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#38DFEB" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        <Text style={[styles.menuItemText, {textAlign:'center', color:'#1F2833'}]}>
          {this.state.sellerMode ? 'Switch to Buyer Mode' : 'Switch to Seller Mode'}
        </Text>
        <Switch
          style={{alignSelf:'center', }}
          onValueChange={this.switch}
          value={this.state.sellerMode}
        />
        <TapGestureHandler 
          // onHandlerStateChange={() => this.props.navigation.navigate('faceDetect')}
          >
          <View style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Logout</Text>
          </View>
        </TapGestureHandler>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
        }
};

export default sellerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor:'#3b444b'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'white'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color:'#38DFEB'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#ffff',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
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
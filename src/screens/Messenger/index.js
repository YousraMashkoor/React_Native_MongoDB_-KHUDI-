import React, { Component } from "react";
import { View, RefreshControl, FlatList ,SafeAreaView, Header, Icon, ListThumbSquare,StyleSheet} from "react-native";
// import { BaseStyle, BaseColor } from "@config";
// import { Header, SafeAreaView, Icon, ListThumbSquare } from "@components";

// Load sample data
import { MessagesData } from "./../../data/messages";


class messenger extends Component{
    render(){
        return(
            
            <View style={{backgroundColor:"white",height:"100%", justifyContent:"center", flex:1}}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        color:'white',
        height:50,
        borderRadius:25,
        borderWidth:0.5,
        marginHorizontal:20,
        paddingLeft:10,
        marginVertical:5,
        borderColor:'white',
        opacity:0.5,
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
        shadowOpacity:1,
        elevation:3
    },
    icon:{
        opacity: 0.8,
        marginVertical:-80,
        resizeMode: 'contain',
    }

});
  

export default messenger;

// export default class Messenger extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             refreshing: false,
//             messenger: MessagesData
//         };
//     }

//     render() {
//         const { messenger } = this.state;
//         return (
//             <SafeAreaView
//                 forceInset={{ top: "always" }}
//             >
//                 <Header
//                     title="Messenger"
//                     renderLeft={() => {
//                         return (
//                             <Icon
//                                 name="arrow-left"
//                                 size={20}
//                             />
//                         );
//                     }}
//                     // onPressLeft={() => {
//                     //     navigation.goBack();
//                     // }}
//                 />
//                 <FlatList
//                     refreshControl={
//                         <RefreshControl
//                             colors={['red']}
//                             tintColor={'red'}
//                             refreshing={this.state.refreshing}
//                             onRefresh={() => { }}
//                         />
//                     }
//                     data={messenger}
//                     keyExtractor={(item, index) => item.id}
//                     renderItem={({ item, index }) => (
//                         <ListThumbSquare
//                             onPress={() => {
//                                 navigation.navigate("Messages");
//                             }}
//                             image={item.image}
//                             txtLeftTitle={item.user}
//                             txtContent={item.message}
//                             txtRight={item.date}
//                         />
//                     )}
//                 />
//             </SafeAreaView>
//         );
//     }
// }

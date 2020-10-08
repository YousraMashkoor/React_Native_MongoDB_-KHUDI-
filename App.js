import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import Login from "./src/index";
import Axios from "./axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "./src/utils/setAuthToken";
// import { currentUser } from "./actions/authActions";
import Navigation from "./src/navigation/index";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

//Check for token
if (AsyncStorage.jwtToken) {
  setAuthToken(AsyncStorage.jwtToken);
  const decodedToken = jwt_decode(AsyncStorage.jwtToken);
  // store.dispatch(setCurrentUser(decoded));
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // data: [],
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("./assets/bg.jpg")]);

    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <Navigation />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

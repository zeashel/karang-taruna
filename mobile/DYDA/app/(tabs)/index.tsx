import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://dyda-karang-taruna.vercel.app" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

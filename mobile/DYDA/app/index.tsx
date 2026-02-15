import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <WebView
        originWhitelist={["*"]}
        source={{ uri: "https://dyda-karang-taruna.vercel.app" }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161a26",
  },
  webview: {
    flex: 1,
    backgroundColor: "#161a26",
  },
});

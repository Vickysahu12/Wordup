import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    // 2.5 seconds ke baad next screen
    const timer = setTimeout(() => {
      // yahan baad mein auth check lagega
      navigation.replace("Login"); 
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* App Name */}
      <Text style={styles.title}>VARC Daily</Text>

      {/* Tagline */}
      <Text style={styles.tagline}>
        1 Hour a Day. Stronger VARC.
      </Text>

      {/* Loader */}
      <ActivityIndicator
        size="large"
        color="#2F6FED"
        style={styles.loader}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF2FF", // light blue background
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#2F6FED", // primary blue
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: "#6B7A99", // muted blue-grey
    marginBottom: 40,
  },
  loader: {
    marginTop: 20,
  },
});

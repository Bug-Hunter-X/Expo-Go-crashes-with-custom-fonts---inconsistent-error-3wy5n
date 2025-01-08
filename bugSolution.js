import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const App = () => {
  let [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null; // Or display a loading indicator
  }

  return (
    <Text style={styles.text}>Hello world!</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratRegular', // Fallback to system font
    fontSize: 24,
  },
});

export default App;
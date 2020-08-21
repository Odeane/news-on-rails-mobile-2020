import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const appName = useSelector(state => state.appName)
  return (
    <View style={styles.container}>
      <Text>Welcome to {appName}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

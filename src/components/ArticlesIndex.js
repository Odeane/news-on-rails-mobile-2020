import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useSelector } from 'react-redux'

const ArticlesIndex = (props) => {
  const appName = useSelector(state => state.appName)

  return (
    <View style={styles.container}>
      <Text>Welcome to {appName}</Text>
      <Button
        title="Click Me"
        onPress={() => props.navigation.navigate('AboutUs')} />
    </View>
  )
}

export default ArticlesIndex

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'


const ArticlesIndex = () => {
  const articles = useSelector(state => state.articles.articles)


  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={article => article.id.toString()}
        renderItem={({ item }) => {
          return (
            <Text>{item.title}</Text>
          )
        }}
      />
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
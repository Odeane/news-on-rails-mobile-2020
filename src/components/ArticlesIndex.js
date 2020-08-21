import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'


const ArticlesIndex = () => {
  const articles = useSelector(state => state.articles.articles)


  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={article => article.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem {...item}/>
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
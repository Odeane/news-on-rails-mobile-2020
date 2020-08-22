import React, {useState, useEffect} from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { useSelector} from 'react-redux'
import ListItem from './ListItem'
import axios from 'axios'


const ArticlesIndex = ({navigation}) => {
 useEffect(() => {
   getArticles()
 }, [])

  const [articlesList, setArticlesList] = useState([])

  const getArticles = async () => {
    let response = await axios.get(`http://localhost:3000/api/v1/articles`)
    setArticlesList(response.data.articles)
    console.log(articlesList)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articlesList}
        keyExtractor={article => article.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem item={item} navigation= {navigation}/>
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
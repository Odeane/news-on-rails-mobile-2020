import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { Paragraph, Title } from 'react-native-paper';
const ArticleDetails = props => {
  const item = props.route.params.item
  const { image, title, lead, content, id } = item

  return (
    <View  style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.contentContainer}>
        <Title style={styles.title}>{title}</Title>
        <Paragraph style={styles.subtitle}>{lead}</Paragraph>
        <Paragraph style={styles.subtitle}>{content}</Paragraph>
      </View>
    </View>
  )
}

export default ArticleDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  contentContainer: {
    marginLeft: 5,
    marginRight: 5
  },
  card: {
    position: "relative",
    width: Dimensions.get('window').width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  title: {
    color: "grey",
    fontSize: 26,
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
    marginBottom: 15
  },
});
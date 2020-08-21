import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

const ListItem = item => {
  const { image, title, lead } = item;

  return (
    <View style={styles.container}>
      <TouchableOpacity
      // onPress={() => removeItem(key)}
      >
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{lead}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    position: "absolute",
    width: Dimensions.get('window').width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  title: {
    color: "white",
    fontSize: 26,
  },
  subtitle: {
    color: "white",
    fontSize: 14,
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
    marginBottom: 15
  },
});
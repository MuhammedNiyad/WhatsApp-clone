import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DATA from '../data/chatData'

const Chat = () => {
  const [chatData, setchatData] = useState(DATA);

  useEffect(() => {
    setchatData(DATA)
  })
  return (
	<View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.chatContainer}>
            <Image source={item.photos} style={styles.image} />
            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatTime}>{item.time}</Text>
              </View>
            </View>
          </View>
        )}  
      />
	</View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:16
  },
  chatContainer: {
    flexDirection: "row",
    marginRight: 16,
    marginLeft:16,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#128C7E",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  chatContent: {
    flex: 5,
    borderBottomWidth: 0,
    marginLeft: 16,
    paddingBottom: 16,
    marginBottom:13,
  },
});
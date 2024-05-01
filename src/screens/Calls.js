import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import DATA from '../data/chatData';

import {
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

const Calls = () => {
  const [callData, setCallData] = useState(DATA);

  useEffect(() => {
    setCallData(DATA);
  },[])
  return (
	<View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.callContainer}>
          <View style={styles.linkContainer}>
            <Fontisto name="link" size={22} color="white" />
          </View>
          <View>
            <Text style={styles.callLink}>Create a call link</Text>
            <Text style={styles.subtext}>Share a link for your whatsApp call</Text>
          </View>
        </View>
    </TouchableOpacity>
	</View>
  )
}

export default Calls

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  callContainer: {
    flexDirection: "row",
    alignItems: 'center',
    padding:16,
  },
  linkContainer: {
    width: 50,
    height: 50,
    borderRadius:25,
    backgroundColor: "#128c7e",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:16
  }
});
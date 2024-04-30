import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react';
import STATUSDATA from '../data/statusData';
import {FontAwesome5} from 'react-native-vector-icons';

const Status = () => {
  const [statusData, setStatusData] = useState(STATUSDATA);

  useEffect(()=>{
    setStatusData(STATUSDATA);
  },[])

  const combinedStatusData = [
    {'title': "Recent updates", data:statusData.filter(item=> item.viewed === false)},
    {'title': "Viewed updates", data:statusData.filter(item=> item.viewed === true)},
  ]
  return (
	<View style={styles.container}>
	  <Text>Status</Text>
	</View>
  )
}

export default Status

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
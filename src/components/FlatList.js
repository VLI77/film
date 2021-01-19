import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import data from "./filmDatas"


const Item = ({ title,text,date }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.date}>{date}</Text>

    </View>
  );
  
  export const App = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} text={item.overview} date={item.release_date} />

    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#4444',
      padding: 20,
      marginVertical: 8,
    },
    title: {
      fontSize: 32,
    },

    text : {
        marginTop:10,
        fontSize : 24,
    },

    date :{
        marginTop:20,
        fontSize: 16,
        fontWeight:'bold'
    }
  });
  export default App ;


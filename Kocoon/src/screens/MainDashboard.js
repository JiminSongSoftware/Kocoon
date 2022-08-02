import React from 'react';
import { Text, View, StyleSheet, ScrollView, } from 'react-native';
import CustomCard from '../components/CustomCard';

export default function MainDashboard() {
    const data = [
        {
          name: 'cs149',
          time: '10:30-11:45',
          id: Math.random().toString(),
        },
        {
          name: 'cs157A',
          time: '12:00-13:15',
          id: Math.random().toString(),
        },
        {
          name: 'cs149',
          time: '10:30-11:45',
          id: Math.random().toString(),
        },
        {
          name: 'cs157A',
          time: '12:00-13:15',
          id: Math.random().toString(),
        },
        {
          name: 'cs149',
          time: '10:30-11:45',
          id: Math.random().toString(),
        },
        {
          name: 'cs157A',
          time: '12:00-13:15',
          id: Math.random().toString(),
        },
      ];

    

    return(
      <View style = { styles.container } >
        <Text style={styles.paragraph}>
          Discussion Rooms
        </Text>
        <View style={styles.classesContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {data.map((item)=>
              <View key={item.id}>
                <CustomCard id={item.id} name={item.name} time={item.time} />
              </View>
            )}
          </ScrollView>
        </View>
        <View style={styles.otherContainer}></View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 45,
      backgroundColor: '#ffffff',
      padding: 8,

    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
    },
    classesContainer: {
      flex: 1,
  
    },
    otherContainer: {
      flex: 5,
  
    }
  });
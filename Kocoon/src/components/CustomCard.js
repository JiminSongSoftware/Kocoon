import { Text ,View, StyleSheet, Pressable, } from 'react-native';
import {Card, Button, Title} from 'react-native-paper';

export default function CustomCard (props) {
  var colorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    
  return(
    <Pressable android_ripple={{color:'#000000'}} style={({pressed})=>pressed && styles.pressedItem}>
      <Card style={[styles.container, {backgroundColor:colorCode}]}>
      <Card.Content>
          <Title>{props.name}</Title>
      </Card.Content>
      <Card.Content>
        <Text>{props.prof}</Text>
        <Text>{props.time}</Text>
      </Card.Content>
      </Card>
    </Pressable>
  );
}
  
const styles = StyleSheet.create({
    container: {
        alignContent:'center',
        margin:5,
    },
    pressedItem: {
      opacity:0.5,
    }
})
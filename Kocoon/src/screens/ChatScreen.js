import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';
import SearchBar from '../components/SearchBar';
// import { Ionicons } from '@expo/vector-icons'; 

export default function ChatScreen() {
    const [searchTerm, setSearchTerm] = useState('')

    return(
        <View style={styles.container}>
            <SearchBar 
                term={searchTerm}
                onChangeText={setSearchTerm}
            />
        </View>
    );
}

// ChatScreen.navigationOptions = ()=>{
//     return{
//         title:'Messages',
//         headerStyle: {
//             backgroundColor: '#1DA31A',
//         },
//         headerLeft: ()=>{
//             <TouchableOpacity>
//                 <Text style={{color:'white'}}>Edit</Text>
//             </TouchableOpacity>
//         },
//         headerRight: ()=>(
//             <TouchableOpacity>
//                 <Ionicons name="create-outline" size={24} color="black" />
//             </TouchableOpacity>
//         )
//     }
// };

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
});
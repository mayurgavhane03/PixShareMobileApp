import { View, Text,TextInput } from 'react-native'
import React, { useState } from 'react'

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onChangeText = (text) => {
       setSearchTerm(text);
    };
   
    return (
       <View style={styles.container}>
         <TextInput
           style={styles.input}
           placeholder="Search..."
           value={searchTerm}
           onChangeText={onChangeText}
         />
         {searchTerm !== '' && (
           <Text style={styles.clearButton} onPress={() => setSearchTerm('')}>
             X
           </Text>
         )}
       </View>
    );
   };
   
   const styles = {
    container: {
       flexDirection: 'row',
       alignItems: 'center',
       paddingHorizontal: 10,
       paddingVertical: 5,
       borderRadius: 10,
       backgroundColor: '#F1F1F1',
    },
    input: {
       flex: 1,
       paddingLeft: 10,
       borderRadius: 10,
    },
    clearButton: {
       marginLeft: 5,
       paddingHorizontal: 10,
       paddingVertical: 5,
       borderRadius: 10,
       backgroundColor: '#C7C7C7',
    },
   };
   
   export default SearchInput;
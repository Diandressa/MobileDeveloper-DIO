import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './ButtonAppStyles';

export function ButtonApp() {
  return (
    <View style={{width: '100%'}}>
        <Pressable 
            onPress={()=>{console.log('pressionado')}}
            style={styles.button}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable 
            onPress={()=>{console.log('pressionado')}}
            style={styles.button}
        >
            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>
        
    </View>
  );
}
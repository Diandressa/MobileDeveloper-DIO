import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './ButtonAppStyles';
import { TextInputApp } from '../TextInputApp/TextInputApp';

export function ButtonApp() {
  return (
    <>
        <TextInputApp/>
        
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
    </>
  );
}
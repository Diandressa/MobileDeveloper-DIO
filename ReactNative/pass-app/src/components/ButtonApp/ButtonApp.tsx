import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './ButtonAppStyles';

export function ButtonApp() {
  return (
    <View style={styles.container}>
        <Button 
            onPress={()=>{console.log('ola')}}
            title='Click aqui'
            accessibilityLabel='Click aqui'
            color="#831584"
        />
        <Pressable onPress={()=>{console.log('pressionado')}}>
            <Text>💾 Copy</Text>
        </Pressable>
        
    </View>
  );
}
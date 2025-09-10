import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './TextInputAppStyles';
interface TextInputAppProps{
    pass:string
}

export function TextInputApp(props:TextInputAppProps) {
  return (
    <TextInput 
      style={styles.inputer} 
      placeholder='pass'
      placeholderTextColor='#000000'
      value={props.pass}
    />
  );
}
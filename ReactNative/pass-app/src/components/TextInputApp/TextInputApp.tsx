import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './TextInputAppStyles';

export function TextInputApp() {
  return (
    <TextInput 
      style={styles.inputer} 
      placeholder='pass'
      multiline={true}
    />
  );
}
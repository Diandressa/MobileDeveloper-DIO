import React from 'react';
import { View, Pressable, Text } from 'react-native';

import { styles } from './ButtonStyle';

interface ButtonProps {
    title: string,
    label: string,
    handlerActivate?: () => void
}

export function ButtonApp({title,label,handlerActivate}:ButtonProps) {
  return (
    <Pressable
    accessibilityLabel={label}
    onPress={handlerActivate}
    style={styles.StyleButton}
    >
      <Text style={{color: "#fff", textAlign: "center"}}>{title}</Text>
    </Pressable>
  );
}
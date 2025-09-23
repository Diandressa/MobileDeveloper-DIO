import React from 'react';
import { View, Button } from 'react-native';

import { styles } from './ButtonStyle';

interface ButtonProps {
    title: string,
    label: string,
    handlerActivate?: () => void
}

export function ButtonApp({title,label,handlerActivate}:ButtonProps) {
  return (
    <Button
    title={title}
    color="#354D7E"
    accessibilityLabel={label}
    onPress={handlerActivate}
    ></Button>
  );
}
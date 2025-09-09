import React from 'react';
import { Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import logo from '../../../assets/logo.png'

export function Logo() {
  return (
    <>
        <Text style={styles.title}>
            Pass Generator
        </Text>
        <Image
            source={logo}
            style={{resizeMode:'contain', height: 180}}
        />
    </>
  );
}
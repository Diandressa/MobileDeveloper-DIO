import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './ButtonAppStyles';
import { TextInputApp } from '../TextInputApp/TextInputApp';
import generatePass from '../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function ButtonApp() {
    const [pass, setPass] = useState('');

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

    return (
    <>
        <TextInputApp pass={pass}/>
        
        <Pressable 
            onPress={handleGenerateButton}
            style={styles.button}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable 
            onPress={handleCopyButton}
            style={styles.button}
        >
            <Text style={styles.text}>💾 COPY</Text>
        </Pressable>
    </>
    );
}
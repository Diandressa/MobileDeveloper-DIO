import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './ButtonAppStyles';
import { TextInputApp } from '../TextInputApp/TextInputApp';
import generatePass from '../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import Slider from '@react-native-community/slider';

export function ButtonApp() {
    const [pass, setPass] = useState('');
    const [length, setLength] = useState(0);

    function handleGenerateButton(){
        let generateToken = generatePass(length)
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

        <Text style={{color: '#fff', paddingTop: 20}}>Password Length:</Text>

        <Text style={{color: '#fff', textAlign: 'center', marginBottom: 5}}>
            {length}
        </Text>
        <Slider 
        style={{width: 200, height: 40}}
        minimumValue={3}
        maximumValue={10}
        minimumTrackTintColor="#b8f132"
        maximumTrackTintColor="#ffffff"
        step={1}
        value={length}
        onValueChange={(length) => setLength(length)}
        />
    </>
    );
}
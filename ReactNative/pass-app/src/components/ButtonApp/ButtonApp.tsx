import React, { useState } from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './ButtonAppStyles';
import { TextInputApp } from '../TextInputApp/TextInputApp';
import generatePass from '../services/passwordService';

export function ButtonApp() {
    const [pass, setPass] = useState('');

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
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
            onPress={()=>{console.log('pressionado')}}
            style={styles.button}
        >
            <Text style={styles.text}>💾 COPY</Text>
        </Pressable>
    </>
    );
}
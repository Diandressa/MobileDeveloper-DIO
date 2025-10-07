import { View, Text, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen( {navigation}:any ){
    function navToGallery(){
        navigation.navigate('gallery')
    }

    return(
        <View style={{flex:1, backgroundColor: 'red'}}>
            <Button
                title='Go to Gallery'
                onPress={navToGallery}
            />
            <Text>Home works!!</Text>
            <StatusBar style='auto'/>
        </View>
    )
}
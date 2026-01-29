import {Text, View, Button} from 'react-native';
import { styles } from './style';

export default function RaffleScreen({navigation}:any){
    function navToMovie(){
        navigation.navigate('movie')
    }
    return(
        <View style={styles.container}>
            <Button 
                title="Raffle"
                onPress={navToMovie}
            />
        </View> 
    )
}
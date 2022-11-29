import { StyleSheet, View, Image } from "react-native";
import { Button, Text } from '@rneui/themed';

export default function OBScreen01({ navigation }) {
    return(
        // logo first
        <View>
            <Image 
                style={styles.logo}
                source={require('../assets/imgs/Logo.png')}
            />
            <Image 
                style={styles.obImage}
                source={require('../assets/imgs/splash-1.png')}
            />
            <Text style={styles.splash}>
                <Text>Welcome!</Text>
                <Text>Dungeons & Dragons Wiki is an index compiling all monsters from the Dungeons & Dragons universe.</Text>
            </Text>

            <View>
                <Button 
                    title="NEXT"
                    onPress={() => navigation.navigate('OBS02')}
                />

                <Button 
                    title="SKIP"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            
        </View>
    );
}


const obstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {

    },

    obImage: {

    },


});
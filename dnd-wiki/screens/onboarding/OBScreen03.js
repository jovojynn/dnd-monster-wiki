import { StyleSheet, View, Image } from "react-native";
import { Button, Text } from '@rneui/themed';

export default function OBScreen03({ navigation }) {
    return(
        // logo first
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../../assets/imgs/Logo.png')}
            />
            <Image 
                style={styles.obImage}
                source={require('../../assets/imgs/splash-3.png')}
            />
            <Text style={styles.obText}>
                <Text h3>SPOTLIGHT</Text>
                {'\n'}
                <Text style>Let's start navigating the application. Jump to the HOME tab and see our featured monster!</Text>
            </Text>

            <View style={styles.btnContainer}>
                <Button 
                    title="Onboard Now!"
                    buttonStyle={{
                        backgroundColor: '#28282B'
                    }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 300,
                        marginVertical: 0,
                    }}
                    onPress={() => navigation.navigate('Home', { screen: 'Home'})}
                />

            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E7E7DB'
    },

    logo: {
        position: 'absolute',
        top: 60

    },

    obImage: {
        marginBottom: 40 ,
        marginTop: 150,
        width: 300,
        height: 260
    },

    obText: {
        textAlign: 'center',
        fontSize: 18,
        paddingRight: 30,
        paddingLeft: 30,
        lineHeight: 25,
        marginBottom: 75
    },
    btnContainer: {
        marginTop: 50,
        marginBottom: 75
    }
});
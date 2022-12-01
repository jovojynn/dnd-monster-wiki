import { StyleSheet, View, Image, ScrollView } from 'react-native';

import { Text } from '@rneui/themed';


export default function MonsterDetailScreen({ navigation }) {

    return(
        <ScrollView>
            <View style={styles.container}>
                <Image 
                    style={styles.monsterImg}
                    source={require('../assets/imgs/dragon.jpg')}                    
                />
                <Text h4 style={{color: '#fff'}}>Ancient Green Dragon</Text>
                <View style={styles.cardStats}>
                    <Text style={styles.statContainer}>
                        <Text style={styles.stat}>Size</Text>
                        {'\n'}
                        <Text style={styles.statValue}>Gagantuan</Text>
                    </Text>
                    
                    <Text style={styles.statContainer}>
                        <Text style={styles.stat}>Type</Text>
                        {'\n'}
                        <Text style={styles.statValue}>Dragon</Text>
                    </Text>
                    <Text style={styles.statContainer}>
                        <Text style={styles.stat}>Alignment</Text>
                        {'\n'}
                        <Text style={styles.statValue}>Lawful Evil</Text>
                    </Text>
                </View>
                <View style={styles.monsterDesc}>
                    <Text>Lorem ipsum dolor sit amet consectetur. Facilisi id adipiscing eget montes volutpat ullamcorper varius massa ut. Vel mollis nam id fermentum pretium. Purus dictumst egestas ac orci ipsum facilisi amet molestie commodo. Commodo mauris amet nunc odio nulla gravida enim. Ac dolor ipsum donec adipiscing lacinia ullamcorper ut ultricies purus. Eros gravida consequat volutpat arcu ut id massa imperdiet. Arcu tincidunt egestas pellentesque libero egestas vel. Venenatis quam blandit adipiscing neque sem risus parturient consectetur.</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#28282B'
    },

    monsterName: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },

    monsterImg: {
        width: '100%',
        height: 300,
        marginBottom: 20
    },

    monsterDesc: {
        backgroundColor: '#E7E7DB',
        width: '85%',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20
    },

    cardInfo: {
       flex: 1,
    },

    cardStats: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20

    },

    statContainer: {
        flex: 1,
        textAlign: 'center',
    },

    stat: {
        color: '#fff'                 ,
        textDecorationLine: 'underline',
        fontSize: 12
    },

    statValue: {
        color: '#fff',
        fontSize: 12
    },

   
});
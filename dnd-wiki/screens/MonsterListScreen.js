import { StyleSheet, View, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Text, Card, Button } from '@rneui/themed';

// List Item Component
import MonsterListItem from '../components/MonsterListItem';
import { text } from '@fortawesome/fontawesome-svg-core';

// Need to import monster data below

export default function MonsterListScreen({ navigation }) {
    // render list item below

    return(
        <View style={styles.container}>
            <ScrollView>
            {/* Chip would go here */}
            
                <Card>
                    <Card.Title h4 style={{color: '#fff'}}>Ancient Green Dragon</Card.Title>
                    <Card.Image 
                        style={styles.cardImg}
                        source={require('../assets/imgs/dragon.jpg')}                    
                    />
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
                    <Button 
                        type="outline"
                        title="VIEW CREATURE"
                        buttonStyle={{
                            backgroundColor: '#28282B',
                            borderColor: '#6FCBF3',
                            borderWidth: 1,
                            borderRadius: 5
                        }}
                        containerStyle={{
                            marginTop: 10,
                            height: 50,
                            width: 300,
                        }}
                        onPress={() => navigation.navigate('MonsterDetails')}
                    />
                </Card>
            
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3D3D3F'
    },

    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center',
        width: '100%',
        height: 100,
        backgroundColor: '#28282B',
        marginTop: 20
    },

    monsterName: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },

    cardImg: {
        width: '100%',
        height: 200,
        borderColor:'#F15356',
        borderWidth: 1
    },

    cardInfo: {
       flex: 1,
    },

    cardStats: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

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
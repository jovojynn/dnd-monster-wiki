import { StyleSheet, View, ImageBackground, } from 'react-native';
import { Button, Text, ThemeProvider } from '@rneui/themed';
import { monstersTheme } from '../themes/monstersTheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function CreateMonsterScreen({ navigation }) {
    return(
        <SafeAreaProvider>
            <ThemeProvider theme={monstersTheme}>
                <View style={styles.container}>
                    <Text style={monstersTheme.Text}>Hiiii</Text>
                </View>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
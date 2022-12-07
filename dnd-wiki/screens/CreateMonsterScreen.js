import { StyleSheet, View, TextInput, ScrollView } from "react-native";
import { Button, Text } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function CreateMonsterScreen({ navigation }) {
    return (
        <ScrollView>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <Text h4 style={styles.inputTitle}>
                        Monster Name
                    </Text>
                    <TextInput style={styles.input} />
                    <Text h4 style={styles.inputTitle}>
                        Size
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tiny to Gargantuan"
                    />
                    <Text h4 style={styles.inputTitle}>
                        Type
                    </Text>
                    <TextInput style={styles.input} />
                    <Text h4 style={styles.inputTitle}>
                        Alignment
                    </Text>
                    <TextInput style={styles.input} />
                    <Text h4 style={styles.inputTitle}>
                        Description
                    </Text>
                    <TextInput style={styles.input} />
                    <Button
                        type="outline"
                        title="CREATE MONSTER"
                        buttonStyle={{
                            backgroundColor: "#6FCBF3",
                            borderColor: "#74CBF0",
                            borderWidth: 1,
                            borderRadius: 5,
                        }}
                        containerStyle={{
                            marginTop: 10,
                            height: 50,
                            width: 300,
                        }}
                        onPress={() => navigation.navigate("MonsterDetails")}
                    />
                </View>
            </SafeAreaProvider>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#3D3D3F",
        paddingTop: 15,
    },

    input: {
        width: 300,
        height: 53,
        backgroundColor: "#616161",
        marginBottom: 25,
        padding: 15,
    },

    inputTitle: {
        color: "#fff",
        marginBottom: 5,
    },
});

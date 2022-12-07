import { StyleSheet, View, Image, ScrollView } from "react-native";

import { Text, ListItem, Card, Button } from "@rneui/themed";

export default function MonsterListItem({ itemData, navigatorRef }) {
    return (
        <ListItem>
            <Card>
                <Card.Title h4 style={{ color: "#fff" }}>
                    {itemData.name}
                </Card.Title>
                <Card.Image
                    style={styles.cardImg}
                    source={{ uri: itemData.img_main }}
                />
                <View style={styles.cardStats}>
                    <Text style={styles.statContainer}>
                        <Text style={styles.stat}>Size</Text>

                        <Text style={styles.statValue}>Large</Text>
                    </Text>

                    <Text style={styles.statContainer}>
                        <Text style={styles.stat}>Type</Text>

                        <Text style={styles.statValue}>Abomination</Text>
                    </Text>
                    <Text style={styles.statContainer}>
                        <Text style={styles.stat}>Alignment</Text>

                        <Text style={styles.statValue}>Evil</Text>
                    </Text>
                </View>
                <Button
                    type="outline"
                    title="VIEW CREATURE"
                    buttonStyle={{
                        backgroundColor: "#28282B",
                        borderColor: "#6FCBF3",
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    containerStyle={{
                        marginTop: 10,
                        height: 50,
                        width: 300,
                    }}
                    onPress={() =>
                        // Navigate to the Monster page
                        navigatorRef.navigate("MonsterDetails", {
                            // Setting detailId property to the API objects id
                            detailSlug: itemData.slug,
                        })
                    }
                />
            </Card>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#3D3D3F",
    },

    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlignVertical: "center",
        width: "100%",
        height: 100,
        backgroundColor: "#28282B",
        marginTop: 20,
    },

    monsterName: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
    },

    cardImg: {
        width: "100%",
        height: 200,
        borderColor: "#F15356",
        borderWidth: 1,
    },

    cardInfo: {
        flex: 1,
    },

    cardStats: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    statContainer: {
        flex: 1,
        textAlign: "center",
    },

    stat: {
        color: "#fff",
        textDecorationLine: "underline",
        fontSize: 12,
    },

    statValue: {
        color: "#fff",
        fontSize: 12,
    },
});

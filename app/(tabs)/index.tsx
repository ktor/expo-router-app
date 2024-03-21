import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Link, router} from "expo-router";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text>ableneo React Native preview with Expo.</Text>
            <Link href="/users/1">User 1</Link>
            <Pressable onPress={() => {router.push({pathname: "/users/[id]", params: {id : 2}})}}>
                <Text>User 2</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

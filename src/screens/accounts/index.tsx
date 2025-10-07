import * as React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'


const Accounts: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30 }}> Accounts </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default Accounts

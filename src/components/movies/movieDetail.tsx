import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'


const MovieDetail: React.FC = ({  route }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}> MovieDetail </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default MovieDetail

import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { RouteType } from '../../routes/RouteType'

type Props = RouteType<'News'>

const News: React.FC<Props> = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30 }}> News </Text>
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

export default News

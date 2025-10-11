import React from 'react'
import {  Text, StyleSheet, TouchableOpacity } from 'react-native'
import { RouteType } from '../routes/RouteType'

type Props = RouteType<'IconButton'>

const IconButton: React.FC<Props> = ({ title,Icon,onPress }) => {
    return (
        <TouchableOpacity  onPress={onPress} style={styles.container}>
            {Icon}
            <Text style={{ fontSize: 14, color:"white" ,marginTop:5}}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        margin:10
    },
})

export default IconButton

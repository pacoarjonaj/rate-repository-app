import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import RepositoryStats from './RepositoryStats'
import RepositoryItemHeader from './RepositoryItemHeader'
import theme from '../theme'



const RepositoryItem = (props) => (
	<View key={props.id} style={styles.container}>
		<RepositoryItemHeader {...props} />
		<RepositoryStats {...props} />
	</View>
)

const styles = StyleSheet.create({
	container: {
		padding: 20, 
		paddingVertical: 5
	}
})



export default RepositoryItem
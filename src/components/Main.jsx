import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'
import LoginPage from '../pages/Login'


const Main = () => {

	return (
		<View style={{flex: 1}}>
			<AppBar />
			<Routes>
				<Route 
					path='/' 
					element={<RepositoryList />}
				/>
				<Route 
					path='/signin' 
					element={<LoginPage />}
				/>
			</Routes>
		</View>
	)
}

export default Main
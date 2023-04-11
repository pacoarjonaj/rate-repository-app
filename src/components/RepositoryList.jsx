import { Text, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import repos from '../data/repositories'

const RepositoryList = () => {
	//const { repositories } = useRepositories()
	const repositories = repos
	
	return (
		<FlatList 
			data={repositories}
			ItemSeparatorComponent={() => <Text></Text>}
			renderItem={({item: repo}) => (
				<RepositoryItem {...repo} />
			)}
		>

		</FlatList>
	)
}

export default RepositoryList
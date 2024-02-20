import { View, Text, FlatList, Alert } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { INavigationInterface } from '../../modules/INavigationInterface'
import StarWarsComponent from '../../components/Dashboard/StarWarsComponent'
import { ListMovies } from '../../sample_data/ListMovies'
import { getDetailMovie } from '../../services/DetailsSW'
import Spinner from 'react-native-loading-spinner-overlay'
import { useMovie } from '../../context/MovieContext'

export default function DashboardListScreen({ navigation }: INavigationInterface) {
    const [loading, setLoading] = React.useState<boolean>(false)
    const { selectMovie } = useMovie()
    const itemSelected = async (id: number) => {
        try {
            setLoading(true)
            await selectMovie(id)
            navigation.navigate('DashboardDetail')
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível buscar os detalhes do filme')
        } finally {
            setLoading(false)
        }
    }
    return (
        <Background logoutOption={true}>
            <FlatList
                data={ListMovies}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <StarWarsComponent movie={item} itemSelected={itemSelected} />}
            />
            <Spinner visible={loading} />
        </Background>
    )
}
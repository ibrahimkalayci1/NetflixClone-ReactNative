import React, { useMemo } from 'react'
import {  StyleSheet, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { screenStyle } from '../../styles/defaultScreenStyle'
import MovieCard from '../../components/movies/movieCard'
import { CATEGORIES } from '../../utils/constants'
import CategoryCard from '../../components/movies/categoryCard'


const MovieList: React.FC = ({ navigation, route }) => {
    const {nowPlayingMovies, topRatedMovies,upComingMovies,popularMovies,categories,selectedCategory} = 
    useSelector((state:RootState) =>state.movies );
    const categoryData=() => {
        console.log("filteredData Çalıştı")
        switch (selectedCategory?.category) {
            case CATEGORIES.NOWPLAYING: return nowPlayingMovies
            case CATEGORIES.POPULAR: return popularMovies
            case CATEGORIES.TOPRATED: return topRatedMovies
            case CATEGORIES.UPCOMING: return upComingMovies
            
        }
    }


const filteredData = useMemo(
    () => categoryData(), 
    [
        selectedCategory
    ],
)
    return (
        <View style={screenStyle.container}>
           <FlatList
            horizontal
            data={categories}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item})  => <CategoryCard  category={item} /> }
            />
            <FlatList
            numColumns={2}
            data={filteredData}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item})  => <MovieCard  movie={item} /> }
            />
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

export default MovieList

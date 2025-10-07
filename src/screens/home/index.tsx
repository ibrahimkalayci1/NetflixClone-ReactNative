import React, { useEffect } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { screenStyle } from '../../styles/defaultScreenStyle';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies } from '../../store/actions/moviesActions';
import Section from '../../components/home/section';
import { CATEGORIES } from '../../utils/constants';
const Home: React.FC = () => {
  const { popularMovies, upComingMovies,topRatedMovies,nowPlayingMovies } = useSelector((state: RootState) => state.movies);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPopularMovies({page:1}));
    dispatch(getNowPlayingMovies({page:2}));
    dispatch(getTopRatedMovies({page:3}));
    dispatch(getUpComingMovies({page:4}));
  }, []);

  const sections = [
    {
        id:1,
        sectionTitle:"Now Playing",
        data:nowPlayingMovies,
        category: CATEGORIES.NOWPLAYING,
    },
    {
        id:2,
        sectionTitle:"Popular",
        data:popularMovies,
        category: CATEGORIES.POPULAR,
    },
    {
        id:3,
        sectionTitle:"Top Rated",
        data:topRatedMovies,
        category: CATEGORIES.TOPRATED,
    },
    {
        id:4,
        sectionTitle:"Upcoming",
        data:upComingMovies,
        category: CATEGORIES.UPCOMING,
    },
]


  return (
    <View style={screenStyle.container}>

      <FlatList
        data={sections}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item})  => (
   <Section  title={item.sectionTitle}  data={item.data} category={item.category} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
    
  },
});

export default Home;

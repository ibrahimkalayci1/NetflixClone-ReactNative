import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import { RouteType } from '../../routes/RouteType';
import { screenStyle } from '../../styles/defaultScreenStyle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import MovieCard from '../../components/movies/movieCard';
import { getMyList } from '../../store/actions/moviesActions';

type Props = RouteType<'News'>;

const MyList: React.FC<Props> = ({ navigation, route }) => {
  const { myList } = useSelector((state: RootState) => state.movies);
  const { token } = useSelector((state: RootState) => state.notifications);
  const dispatc: AppDispatch = useDispatch();
  useEffect(() => {
    dispatc(getMyList(token));
  }, []);

  return (
    <View style={screenStyle.container}>
      <FlatList
        numColumns={2}
        data={myList}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />{' '}
    </View>
  );
};

export default MyList;

import React, { memo, useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SectionTitle from './sectionTitle';
import MovieCard from '../movies/movieCard';
import { SectionProps } from '../../models/ui/sectionProps';
import { useNavigation } from '@react-navigation/native';
import { MOVIELIST } from '../../utils/routes';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../store/slices/moviesSlice';

const Section: React.FC<SectionProps> = ({ data, title ,category}) => {

  const navigation = useNavigation();
   const dispatch:AppDispatch=useDispatch()
  const handleNavigate = useCallback(() => {
      dispatch(setCategory(category))
      navigation.navigate(MOVIELIST)
    },
    [],
  )
  


  return (
    <View style={styles.container}>
      <SectionTitle title={title}  onPress={handleNavigate}   />

      <FlatList
        data={data}
        renderItem={({ item }) => <MovieCard movie={item} />}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(Section);

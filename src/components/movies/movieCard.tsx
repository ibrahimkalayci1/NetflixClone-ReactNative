import React, { memo } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { IMAGE_BASE_URL } from '../../services/urls';
import { MovieCardProps } from '../../models/ui/movieCardProps';
import { screenWidth } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { MOVIEDETAIL } from '../../utils/routes';

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity 
    onPress={()  => navigation.navigate(MOVIEDETAIL,{movieId:movie.id}) }
    
    style={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        style={{
          width: 400,
          height: 300,
          resizeMode: 'contain',
          borderRadius: 10,
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 18,
          color: 'white',
          fontWeight: '600',
          marginTop: 10,
        }}
      >
        {movie.title}
      </Text>
      <Text
        numberOfLines={1}
        style={{
          fontSize: 18,
          color: 'white',
          fontWeight: '600',
          marginTop: 10,
        }}
      >
        Rated:{movie.vote_average}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    maxWidth: screenWidth/2,
    marginVertical: 10,
    paddingHorizontal: 5,
  },
});

export default memo(MovieCard);

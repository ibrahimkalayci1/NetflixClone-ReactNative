import React, { useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Platform,
  Alert,
} from 'react-native';
import { screenStyle } from '../../styles/defaultScreenStyle';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from '../../store/actions/moviesActions';
import Section from '../../components/home/section';
import { CATEGORIES } from '../../utils/constants';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';
import {
  addNewNotification,
  setToken,
} from '../../store/slices/notificationsSlice';
import { addNotificationDatabase } from '../../store/actions/notificationActions';

const Home: React.FC = () => {
  const { popularMovies, upComingMovies, topRatedMovies, nowPlayingMovies } =
    useSelector((state: RootState) => state.movies);

  const { token } = useSelector((state: RootState) => state.notifications);

  const dispatch = useDispatch<AppDispatch>();
  async function requestUserPermission() {
    const token = await messaging().getToken();
    dispatch(setToken(token));
    if (Platform.OS == 'android')
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );

    const authStatus = await messaging().requestPermission();
  }

  useEffect(() => {
    requestUserPermission();
    dispatch(getPopularMovies({ page: 1 }));
    dispatch(getNowPlayingMovies({ page: 2 }));
    dispatch(getTopRatedMovies({ page: 3 }));
    dispatch(getUpComingMovies({ page: 4 }));
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (token) {
        dispatch(
          addNewNotification({
            id: remoteMessage.messageId,
            title: remoteMessage.notification?.title,
            body: remoteMessage.notification?.body,
            show: false,
            value: remoteMessage?.data?.movieId,
            sentTime: remoteMessage.sentTime,
          }),
        );

        dispatch(
          addNotificationDatabase({
            userId: token,
            id: remoteMessage.messageId,
            title: remoteMessage.notification?.title,
            body: remoteMessage.notification?.body,
            show: false,
            value: remoteMessage?.data?.movieId,
            sentTime: remoteMessage.sentTime,
          }),
        );
      }
    });

    return unsubscribe;
  }, [token]);

  const sections = [
    {
      id: 1,
      sectionTitle: 'Now Playing',
      data: nowPlayingMovies,
      category: CATEGORIES.NOWPLAYING,
    },
    {
      id: 2,
      sectionTitle: 'Popular',
      data: popularMovies,
      category: CATEGORIES.POPULAR,
    },
    {
      id: 3,
      sectionTitle: 'Top Rated',
      data: topRatedMovies,
      category: CATEGORIES.TOPRATED,
    },
    {
      id: 4,
      sectionTitle: 'Upcoming',
      data: upComingMovies,
      category: CATEGORIES.UPCOMING,
    },
  ];

  return (
    <View style={screenStyle.container}>
      <FlatList
        data={sections}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Section
            title={item.sectionTitle}
            data={item.data}
            category={item.category}
          />
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

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';
import { useNews } from '../context/newsContext';
import NewsListItem from './NewsListItem';

export default function BlogsScreen({ navigation }) {
  const [news] = useNews();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  if (news.length === 0) {
    return null;
  }
  const data = news[1];
  return (
    <>
      {loading ? (
        <SafeAreaView style={styles.loader}>
          <Image
            source={require('../assets/newsBackground.jpg')}
            style={[styles.image, StyleSheet.absoluteFill]}
          />
          <ActivityIndicator size="large" color="#fff" />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <Image
            source={require('../assets/newsBackground.jpg')}
            style={[styles.image, StyleSheet.absoluteFill]}
          />
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <NewsListItem
                data={item}
                onPress={() =>
                  navigation.navigate('Blog Details', { item: item })
                }
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
});

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
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
          <ActivityIndicator size="large" color="#fff" />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
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
    backgroundColor: '#111',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

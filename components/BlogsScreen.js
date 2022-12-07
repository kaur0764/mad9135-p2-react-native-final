import { StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import { useNews } from '../context/newsContext';
import NewsListItem from './NewsListItem';

export default function BlogsScreen({ navigation }) {
  const [news] = useNews();

  if (news.length === 0) {
    return null;
  }
  const data = news[1];
  return (
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
            onPress={() => navigation.navigate('Blog Details', { item: item })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
});

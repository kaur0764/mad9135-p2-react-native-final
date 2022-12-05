import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useNews } from '../context/newsContext';
import Card from './Card';

export default function ArticlesScreen({ navigation }) {
  const [news] = useNews();
  if (news.length === 0) {
    return null;
  }
  const data = news[0];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            data={item}
            onPress={() =>
              navigation.navigate('Article Details', { item: item })
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

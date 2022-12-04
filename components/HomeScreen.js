import { StyleSheet, SafeAreaView, Text, SectionList } from 'react-native';
import { useNews } from '../context/newsContext';
import Card from './Card';

export default function HomeScreen({ navigation }) {
  const [news] = useNews();
  if (news.length === 0) {
    return null;
  }
  const articlesData = news[0].slice(0, 3);
  const blogsData = news[1].slice(0, 3);
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[
          { title: ' Recent Articles', data: articlesData },
          { title: ' Recent Blogs', data: blogsData },
        ]}
        renderItem={({ item }) => {
          return (
            <Card
              data={item}
              onPress={() => navigation.navigate('Details', { item: item })}
            />
          );
        }}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
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

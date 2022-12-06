import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  SectionList,
} from 'react-native';
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
      <Image
        source={require('../assets/background.jpg')}
        style={[styles.image, StyleSheet.absoluteFill]}
      />
      <SectionList
        style={styles.list}
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
        renderSectionHeader={({ section }) => (
          <Text style={styles.text}>{section.title}</Text>
        )}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  list: {},
  text: {
    fontSize: 20,
    color: '#fff',
    marginTop: 16,
    marginBottom: 16,
    fontWeight: '600',
  },
});

import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
} from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  const newsItem = route.params.item;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{newsItem.title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: newsItem.imageUrl,
        }}
      />
      <View>
        <Text style={styles.summary}>{newsItem.summary}</Text>
        <Text style={styles.source}>Source: {newsItem.newsSite}</Text>
      </View>
      <Button
        title="Read More"
        accessibilityLabel="Read the full news item"
        onPress={() =>
          navigation.navigate('News Reader', { uri: newsItem.url })
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 225,
    borderRadius: 10,
  },
  summary: {
    fontSize: 18,
  },
  source: {
    fontStyle: 'italic',
    marginTop: 10,
  },
});

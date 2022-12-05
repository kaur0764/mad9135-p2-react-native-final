import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Button,
} from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  const newsItem = route.params.item;

  async function savePhoto() {
    //TODO: Figure out how to save a photo...
    // Probably a combination of FileSystem + MediaLibrary
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{newsItem.title}</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: newsItem.imageUrl,
            }}
          />
          <Button title="Save Photo" onPress={savePhoto} />
        </View>
        <View style={styles.summaryContainer}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  image: {
    width: 325,
    height: 244,
    borderRadius: 10,
  },
  summaryContainer: {
    paddingVertical: 15,
  },
  summary: {
    fontSize: 18,
  },
  source: {
    fontStyle: 'italic',
    marginTop: 8,
  },
});

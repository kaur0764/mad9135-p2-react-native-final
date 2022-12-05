import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Button,
  Alert,
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

export default function DetailsScreen({ navigation, route }) {
  const newsItem = route.params.item;

  async function savePhoto() {
    const splitUrl = newsItem.imageUrl.split('.');
    const extension = splitUrl[splitUrl.length - 1];
    const [, id] = String(Math.random()).split('.');
    const fileName = `${id}.${extension}`;

    try {
      const { uri } = await FileSystem.downloadAsync(
        newsItem.imageUrl,
        FileSystem.documentDirectory + fileName
      );
      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert(
        'Image Saved',
        'Success! The image was successfully saved to your image library.'
      );
    } catch (err) {
      Alert.alert('Error', `An error occurred. ${err.message}`);
    }
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

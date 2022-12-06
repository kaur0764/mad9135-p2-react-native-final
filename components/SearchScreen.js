import { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Button,
} from 'react-native';
import { useNews } from '../context/newsContext';

export default function SearchScreen() {
  const [news] = useNews();
  const [articles, blogs] = news;

  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  function searchHandler() {
    // TODO: Search articles and blogs for matches, store in results
    // Display results in FlatList in SearchScreen
    console.log(searchInput);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search space news"
          value={searchInput}
          onChangeText={setSearchInput}
          style={styles.input}
        />
        <Button title="Search" onPress={searchHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    marginRight: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'darkgrey',
  },
});

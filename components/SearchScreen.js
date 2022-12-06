import { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { useNews } from '../context/newsContext';
import NewsListItem from './NewsListItem';

export default function SearchScreen({ navigation }) {
  const [news] = useNews();
  const [articles, blogs] = news;

  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  function searchHandler() {
    const userInput = searchInput.toLowerCase().trim();
    console.log(userInput);

    const articleResults = articles.filter((article) => {
      return containsText(userInput, article);
    });

    const blogResults = blogs.filter((blog) => {
      return containsText(userInput, blog);
    });

    console.log(`blogResults length: ${blogResults.length}`);
    console.log(`articleResults length: ${articleResults.length}`);

    const newResults = [].concat(articleResults, blogResults);
    console.log(newResults.length);
    setResults(newResults);
  }

  function containsText(userInput, item) {
    const lowerTitle = item.title.toLowerCase();
    const lowerSummary = item.summary.toLowerCase();

    return lowerTitle.includes(userInput) || lowerSummary.includes(userInput);
  }

  function sortByRecent(a, b) {
    // TODO: Sort array by most recent before updating setResults state
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search space news"
          placeholderTextColor="#fff"
          value={searchInput}
          onChangeText={setSearchInput}
          style={styles.input}
        />
        <Button
          title="Search"
          onPress={searchHandler}
          style={styles.searchBtn}
          color="#fff"
        />
      </View>
      {results.length > 0 ? (
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <NewsListItem
              data={item}
              onPress={() => navigation.navigate('Overview', { item: item })}
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
    backgroundColor: '#111',
  },
  input: {
    fontSize: 16,
    height: 40,
    width: 250,
    marginRight: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
    borderColor: '#fff',
  },
  searchBtn: {
    color: '#000',
  },
  list: {
    alignSelf: 'stretch',
  },
});

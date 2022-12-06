import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { useNews } from '../context/newsContext';
import NewsListItem from './NewsListItem';

export default function SearchScreen({ navigation }) {
  const [news] = useNews();
  const [articles, blogs] = news;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  const [message, setMessage] = useState(
    'Search Space News for a specific topic.'
  );
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  function searchHandler() {
    const userInput = searchInput.toLowerCase().trim();

    const articleResults = articles.filter((article) => {
      return containsText(userInput, article);
    });
    const blogResults = blogs.filter((blog) => {
      return containsText(userInput, blog);
    });

    const newResults = [].concat(articleResults, blogResults);

    if (!newResults.length) {
      setMessage('No results found. Please try again.');
    } else {
      newResults.sort(sortByRecent);
      setLoading(true);
      setResults(newResults);
    }
  }

  function containsText(userInput, item) {
    const lowerTitle = item.title.toLowerCase();
    const lowerSummary = item.summary.toLowerCase();

    return lowerTitle.includes(userInput) || lowerSummary.includes(userInput);
  }

  function sortByRecent(a, b) {
    const datetimeA = new Date(a.publishedAt).getTime();
    const datetimeB = new Date(b.publishedAt).getTime();

    if (datetimeA > datetimeB) {
      return -1;
    }
    if (datetimeA > datetimeB) {
      return 1;
    }

    return 0;
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
        <>
          {loading ? (
            <SafeAreaView style={styles.loader}>
              <ActivityIndicator size="large" color="#fff" />
            </SafeAreaView>
          ) : (
            <FlatList
              data={results}
              renderItem={({ item }) => (
                <NewsListItem
                  data={item}
                  onPress={() =>
                    navigation.navigate('Overview', { item: item })
                  }
                />
              )}
              keyExtractor={(item) => item.id}
              style={styles.list}
            />
          )}
        </>
      ) : (
        <Text style={styles.message}>{message}</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
    maxHeight: 100,
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
  loader: {
    backgroundColor: '#111',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    alignSelf: 'stretch',
  },
  message: {
    fontSize: 16,
    color: '#fff',
  },
});

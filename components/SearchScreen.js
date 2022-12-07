import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Image,
  View,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { useNews } from '../context/newsContext';
import NewsListItem from './NewsListItem';
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchScreen({ navigation }) {
  const [news] = useNews();
  const [articles, blogs] = news;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  const [message, setMessage] = useState(
    'Search Space News for a specific topic.'
  );
  const [error, setError] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  function searchHandler() {
    const userInput = searchInput.toLowerCase().trim();
    if (!userInput) {
      setError('Please enter a search keyword');
    } else {
      setError('');
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
      <Image
        source={require('../assets/searchBackground.jpg')}
        style={[styles.image, StyleSheet.absoluteFill]}
      />
      <View styles={styles.searchContainer}>
        <BlurView intensity={80} style={styles.inputContainer}>
          <TextInput
            placeholder="Search space news"
            placeholderTextColor="#fff"
            cursorColor="#fff"
            value={searchInput}
            onChangeText={setSearchInput}
            style={[styles.input, { borderColor: error ? 'red' : '#fff' }]}
            onSubmitEditing={() => searchHandler()}
          />
        </BlurView>
        <Text style={styles.error}>{error}</Text>
      </View>
      {results.length > 0 ? (
        <>
          {loading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#fff" />
            </View>
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
        <LinearGradient
          colors={['transparent', '#555', 'transparent']}
          style={styles.messageContainer}
        >
          <Text style={styles.message}>{message}</Text>
        </LinearGradient>
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
    marginBottom: 32,
  },
  inputContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  input: {
    fontSize: 16,
    height: 40,
    width: 250,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
  },
  error: {
    color: 'red',
    paddingLeft: 12,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  list: {
    alignSelf: 'stretch',
  },
  messageContainer: {
    padding: 32,
    width: '100%',
  },
  message: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

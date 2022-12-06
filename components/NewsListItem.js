import React from 'react';
import { Text, StyleSheet, Pressable, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function NewsListItem({ data, onPress }) {
  const date = new Date(data.publishedAt).toDateString().split(' ');
  date.shift();
  const publishedDate = date.join(' ');

  return (
    <Pressable onPress={onPress}>
      <LinearGradient colors={['#555', '#333', '#111']} style={styles.listItem}>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
        <View style={styles.dataContainer}>
          <Text style={styles.text}>{data.title}</Text>
          <Text style={styles.date}>{publishedDate}</Text>
        </View>
        <Ionicons
          name={'chevron-forward-outline'}
          size={24}
          color={'#fff'}
          style={styles.chevron}
        />
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  dataContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    flexShrink: 1,
  },
  date: {
    fontSize: 14,
    color: '#fff',
    fontStyle: 'italic',
    paddingTop: 8,
  },
  chevron: {
    alignSelf: 'center',
  },
});

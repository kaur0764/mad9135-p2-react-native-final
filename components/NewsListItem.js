import React from 'react';
import { Text, StyleSheet, Pressable, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function NewsListItem({ data, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient colors={['#555', '#333', '#111']} style={styles.listItem}>
        <View style={styles.dataContainer}>
          <Image source={{ uri: data.imageUrl }} style={styles.image} />
          <Text style={styles.text}>{data.title}</Text>
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
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
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
    color: '#fff',
  },
  chevron: {
    alignSelf: 'center',
  },
});

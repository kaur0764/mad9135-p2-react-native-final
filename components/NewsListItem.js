import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function NewsListItem({ data, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient colors={['#555', '#333', '#111']} style={styles.listItem}>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
        <Text style={styles.text}>{data.title}</Text>
        <Ionicons name={'chevron-forward-outline'} size={24} color={'#fff'} />
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: { width: 80, height: 80, marginRight: 16 },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

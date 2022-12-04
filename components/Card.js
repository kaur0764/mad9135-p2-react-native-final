import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Card({ data, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
      <Text>{data.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    border: '1px solid #000',
    borderRadius: 10,
    margin: 16,
  },
  image: { width: 300, height: 150 },
});

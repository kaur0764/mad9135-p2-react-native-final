import React from 'react';
import { Text, StyleSheet, View, Pressable, Image } from 'react-native';
import { BlurView } from 'expo-blur';

export default function Card({ data, onPress }) {
  return (
    <BlurView intensity={80} style={styles.container}>
      <View style={styles.card}>
        <Pressable onPress={onPress}>
          <Image source={{ uri: data.imageUrl }} style={styles.image} />
          <Text style={styles.text}>{data.title}</Text>
        </Pressable>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 10,
  },
  card: {
    padding: 16,
  },
  image: { width: 300, height: 150, marginBottom: 16 },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

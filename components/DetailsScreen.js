import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function DetailsScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

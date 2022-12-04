import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function BlogsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Blogs Screen</Text>
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

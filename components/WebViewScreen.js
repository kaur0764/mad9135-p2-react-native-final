import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function WebViewScreen({ route }) {
  const uri = route.params.uri;
  return (
    <SafeAreaView style={styles.container}>
      <Text>WebView Screen</Text>
      <Text>{uri}</Text>
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

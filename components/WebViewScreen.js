import { WebView } from 'react-native-webview';

export default function WebViewScreen({ route }) {
  const uri = route.params.uri;

  return <WebView source={{ uri: uri }} />;
}

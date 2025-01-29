import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Chat from './Chat';


export default function App() {
  return (
    <View style={styles.container}>

      <SafeAreaProvider>
         <Chat></Chat>
      </SafeAreaProvider>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Stack from './src/routes/Stack'
import ListProjects from './src/screens/ListProjects';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Stack />
    </View >
  );
}

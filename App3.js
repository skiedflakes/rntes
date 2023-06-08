import React from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerNavigator from './src/navigation/Drawer';

const App = () => {
  return (
    <View style={styles.container}>
      <DrawerNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

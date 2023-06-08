import React from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerNavigator from './src/navigation/Drawer';
import {NativeModules, Button} from 'react-native';

const NewModuleButton = () => {
  const {CalendarModule} = NativeModules;

  const onPress = () => {
    CalendarModule.createCalendarEvent('Event name', 'Event location', (error, arrayData) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Array data:', arrayData);
      }
    });
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <NewModuleButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

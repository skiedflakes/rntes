import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import NativeModuleExam from '../screens/NativeModuleExam'
const DrawerNavigator = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState('UI EXAM');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigateToScreen = (screen) => {
    setActiveScreen(screen);
    setDrawerOpen(false);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'UI EXAM':
        return <HomeScreen />;
      case 'NATIVE MODULE EXAM':
        return <NativeModuleExam />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
       <View style={styles.drawerButton}>
      <TouchableOpacity onPress={toggleDrawer} >
       <Image  style={{width: 40, height: 40}}source={require('../assets/3.png')} />
      </TouchableOpacity>
      <Text style={{color:'white',alignSelf:'center',fontSize:16,marginLeft:20}}>{activeScreen}</Text> 
      </View>
      {drawerOpen && (
        <View style={styles.drawer}>
          <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
            <Text>Close Drawer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToScreen('UI EXAM')}
            style={styles.drawerItem}
          >
            <Text>UI EXAM</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateToScreen('NATIVE MODULE EXAM')}
            style={styles.drawerItem}
          >
            <Text>NATIVE MODULE EXAM</Text>
          </TouchableOpacity>

        
        </View>
      )}

      <View style={styles.content}>{renderScreen()}</View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerButton: {
    flexDirection:'row',
    padding: 16,
    backgroundColor:'black'
  },
  drawer: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 20,
    left: 0,
    bottom: 0,
    width: 200,
    zIndex: 2,
    elevation: 4,
  },
  drawerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default DrawerNavigator;

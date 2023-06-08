import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SideNavigation = () => {
  const [isSideNavVisible, setSideNavVisible] = useState(false);

  const navigateToScreen = (screenName) => {
    // Perform navigation to the specified screen
  };

  const toggleSideNav = () => {
    setSideNavVisible(!isSideNavVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleSideNav}>
        <Text style={styles.toggleButtonText}>{isSideNavVisible ? 'Hide' : 'Show'} Side Navigation</Text>
      </TouchableOpacity>

      {isSideNavVisible && (
        <View style={styles.sideNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Screen1')}>
            <Text style={styles.navText}>Screen 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Screen2')}>
            <Text style={styles.navText}>Screen 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Screen3')}>
            <Text style={styles.navText}>Screen 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sideNav: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 200,
    backgroundColor: 'lightgray',
    padding: 10,
  },
  navItem: {
    marginBottom: 10,
  },
  navText: {
    fontSize: 16,
  },
});

export default SideNavigation;

import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const MovieList = ({movies}) => {
 

  const renderItem = ({ item }) => (
    <View style={styles.movieContainer}>
      <Text style={styles.movieTitle}>{item.title}</Text>
      <Text style={styles.movieYear}>{item.year}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
   flex:1,
    
  },
  movieContainer: {
   width:500,
    backgroundColor:'red',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  movieYear: {
    fontSize: 14,
    color: '#666666',
  },
});

export default MovieList;

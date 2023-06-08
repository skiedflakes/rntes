import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,NativeModules } from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import MovieList from '../components/MovieList';
export default function NativeModuleExam() {
const [movies,setMovies] = useState([]);
  const {MoviesModule} = NativeModules;
  const getCallbackData = () => {
    MoviesModule.createMoviesEvent('Event name', 'Event location', (arrayData) => {
     
        setMovies(arrayData);
        console.log('Array data:', arrayData);
    
    });
  };

  useEffect(() => {
    getCallbackData()
  }, [1]); // Only re-run the effect if count changes

    return (
      <View>
        <MovieList movies={movies}/>
        <Text>Profile Screen</Text>
      </View>
    );
  };
  


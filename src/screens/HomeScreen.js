import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,NativeModules } from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';


// Dummy screen components
export default function HomeScreen() {
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
  
    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    };
  
    const handleProgress = (progress) => {
      setCurrentTime(progress.currentTime);
    };
  
    const handleSeek = (value) => {
      videoRef.seek(value);
    };
  
    let videoRef;
  
    return (
      <View style={{ flex:1}}>
        <TouchableOpacity style={{ marginTop:40}} onPress={handlePlayPause}>
          <Text style={styles.playPauseButton}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <Video
          ref={(ref) => (videoRef = ref)}
          source={require('../assets/3.mp4')}
          style={styles.videoPlayer}
          resizeMode="contain"
          paused={!isPlaying}
          onProgress={handleProgress}
          onEnd={() => setIsPlaying(false)}
          onLoad={(data) => setDuration(data.duration)}
        />
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onSlidingComplete={handleSeek}
        />
      </View>
    );
  };



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    videoPlayer: {
      width: 300,
      height: 200,
     
    },
    playPauseButton: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    progressBar: {
      width: 300,
    },
  });

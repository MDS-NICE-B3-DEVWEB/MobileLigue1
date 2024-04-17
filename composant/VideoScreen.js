import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoScreen = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = "AIzaSyCsByhNHAoZaHG0qFkiPSVNG4MhwG32_Yg"; // Remplacez par votre propre clé API YouTube
        const channelId = "UCQsH5XtIc9hONE1BQjucM0g"; // Remplacez par l'ID de votre chaîne YouTube

        const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
          setVideos(data.items);
        } else {
          console.error('Error: No videos found in response');
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Vidéos</Text>
      {videos.map((video, index) => (
        <View key={index} style={styles.videoContainer}>
          <WebView
            style={{ width: Dimensions.get('window').width - 20, height: 200 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: `https://www.youtube.com/embed/${video.id.videoId}` }}
          />
          <Text style={styles.videoTitle}>{video.snippet.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#02153C', // Fond en #02153C
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20, // Plus d'espace après chaque titre
    textAlign: 'center', // Titre centré
    color: '#FFFFFF', // Couleur du texte en blanc
  },
  videoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFFFFF', // Couleur du texte en blanc
  },
});

export default VideoScreen;

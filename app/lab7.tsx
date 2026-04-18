import { View, Text, StyleSheet, Pressable, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { STORY } from '../data/destini';

export default function Lab7() {
  const [storyIndex, setStoryIndex] = useState(0);

  const nextStory = (choice: number) => {
    if (storyIndex === 0 && choice === 1) setStoryIndex(1);
    else if (storyIndex === 0 && choice === 2) setStoryIndex(2);
    else {
      alert("Hết truyện! Khởi động lại.");
      setStoryIndex(0);
    }
  };

  return (
    <ImageBackground style={styles.container} source={{ uri: 'https://images.unsplash.com/photo-1534067783941-51c9c2a82352' }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.storyContainer}>
          <Text style={styles.storyText}>{STORY[storyIndex].title}</Text>
        </View>
        
        <Pressable style={[styles.button, { backgroundColor: '#F44336' }]} onPress={() => nextStory(1)}>
          <Text style={styles.buttonText}>{STORY[storyIndex].choice1}</Text>
        </Pressable>
        
        <Pressable style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={() => nextStory(2)}>
          <Text style={styles.buttonText}>{STORY[storyIndex].choice2}</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  storyContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  storyText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    lineHeight: 35,
  },
  button: {
    minHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

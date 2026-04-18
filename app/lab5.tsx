import { View, StyleSheet, Pressable, Text, SafeAreaView } from 'react-native';

const COLORS = ['#F44336', '#FF9800', '#FFEB3B', '#4CAF50', '#009688', '#2196F3', '#9C27B0'];

export default function Lab5() {
  async function playSound(noteNumber: number) {
    try {
      console.log('Playing sound note', noteNumber);
      // NOTE cho bạn: Uncomment và import expo-av để Play file âm thanh thật nhé!
      // import { Audio } from 'expo-av';
      // const { sound } = await Audio.Sound.createAsync(require(`../assets/note${noteNumber}.wav`));
      // await sound.playAsync();
      alert(`Đang phát âm thanh phím số ${noteNumber}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {COLORS.map((color, index) => (
        <Pressable 
          key={index} 
          style={({pressed}) => [styles.key, { backgroundColor: color, opacity: pressed ? 0.8 : 1 }]} 
          onPress={() => playSound(index + 1)}
        >
          <Text style={styles.text}>Note {index + 1}</Text>
        </Pressable>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  key: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255,255,255,0.3)',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

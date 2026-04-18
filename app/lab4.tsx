import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { ANSWERS } from '../data/magic8ball';

export default function Lab4() {
  const [answer, setAnswer] = useState('8');

  const askQuestion = () => {
    const randomIndex = Math.floor(Math.random() * ANSWERS.length);
    setAnswer(ANSWERS[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ask Me Anything</Text>
      <Pressable onPress={askQuestion} style={({pressed}) => [pressed && {opacity: 0.8}]}>
        <View style={styles.ballOuter}>
          <View style={styles.ballInner}>
            <Text style={[styles.answerText, answer === '8' && { fontSize: 80, color: 'black' }]}>
              {answer}
            </Text>
          </View>
        </View>
      </Pressable>
      <Text style={styles.instruction}>Tap the ball to reveal your future</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  instruction: {
    color: 'white',
    fontSize: 16,
    marginTop: 50,
  },
  ballOuter: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  ballInner: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  answerText: {
    color: '#3F51B5',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

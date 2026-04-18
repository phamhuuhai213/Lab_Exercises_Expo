import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { QUESTIONS } from '../data/quizzler';
import QuizButton from '../components/QuizButton';

export default function Lab6() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scoreKeeper, setScoreKeeper] = useState<boolean[]>([]);

  const checkAnswer = (userAnswer: boolean) => {
    const correctAnswer = QUESTIONS[questionIndex].a;
    setScoreKeeper([...scoreKeeper, userAnswer === correctAnswer]);
    
    if (questionIndex < QUESTIONS.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert('Đã hết câu hỏi! Reset lại nhé.');
      setQuestionIndex(0);
      setScoreKeeper([]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{QUESTIONS[questionIndex].q}</Text>
      </View>
      
      <QuizButton title="ĐÚNG" color="#4CAF50" onPress={() => checkAnswer(true)} />
      <QuizButton title="SAI" color="#F44336" onPress={() => checkAnswer(false)} />
      
      <View style={styles.scoreRow}>
        {scoreKeeper.map((isCorrect, index) => (
          <MaterialIcons 
            key={index} 
            name={isCorrect ? "check" : "close"} 
            size={24} 
            color={isCorrect ? "#4CAF50" : "#F44336"} 
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'space-between',
  },
  questionContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    lineHeight: 35,
  },
  scoreRow: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

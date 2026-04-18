import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const QUESTIONS = [
  { q: "React Native dùng để lập trình app đa nền tảng cho cả iOS và Android?", a: true },
  { q: "Con nhện có 6 cái chân?", a: false },
  { q: "Mặt trời mọc ở hướng Đông?", a: true },
  { q: "Expo giúp việc khởi tạo dự án React Native dễ dàng hơn?", a: true },
];

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
      
      <Pressable style={[styles.button, { backgroundColor: '#4CAF50' }]} onPress={() => checkAnswer(true)}>
        <Text style={styles.buttonText}>ĐÚNG</Text>
      </Pressable>
      
      <Pressable style={[styles.button, { backgroundColor: '#F44336', marginBottom: 20 }]} onPress={() => checkAnswer(false)}>
        <Text style={styles.buttonText}>SAI</Text>
      </Pressable>
      
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
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  scoreRow: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

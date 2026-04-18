import { Pressable, Text, StyleSheet } from 'react-native';

interface QuizButtonProps {
  title: string;
  color: string;
  onPress: () => void;
}

export default function QuizButton({ title, color, onPress }: QuizButtonProps) {
  return (
    <Pressable style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});

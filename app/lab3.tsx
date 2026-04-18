import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Lab3() {
  const [leftDice, setLeftDice] = useState(1);
  const [rightDice, setRightDice] = useState(1);

  const rollDice = () => {
    setLeftDice(Math.floor(Math.random() * 6) + 1);
    setRightDice(Math.floor(Math.random() * 6) + 1);
  };

  const DiceIcon = ({ num }: { num: number }) => {
    const diceName = `dice-${['one', 'two', 'three', 'four', 'five', 'six'][num - 1]}`;
    return <FontAwesome5 name={diceName as any} size={120} color="white" />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Game</Text>
      <View style={styles.diceContainer}>
        <DiceIcon num={leftDice} />
        <DiceIcon num={rightDice} />
      </View>
      <Pressable style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D32F2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 60,
  },
  diceContainer: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 60,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#D32F2F',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

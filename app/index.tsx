import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const labs = [
    { id: 1, title: "I'M A RICH" },
    { id: 2, title: "MICARD" },
    { id: 3, title: "DICE" },
    { id: 4, title: "MAGIC 8 BALL" },
    { id: 5, title: "XYLOPHONE" },
    { id: 6, title: "Quizzler" },
    { id: 7, title: "Destini" },
    { id: 8, title: "BMI Calculator" },
    { id: 9, title: "Clima" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Danh sách Bài tập Lab</Text>
      {labs.map((lab) => (
        <Pressable key={lab.id} style={styles.button} onPress={() => router.push(`/lab${lab.id}`)}>
          <Text style={styles.buttonText}>Lab {lab.id}: {lab.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '90%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

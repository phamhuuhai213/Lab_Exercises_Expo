import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useState } from 'react';

export default function Lab8() {
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('65');

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ chiều cao và cân nặng');
    
    const bmi = (w / (h * h)).toFixed(1);
    let status = '';
    if (parseFloat(bmi) < 18.5) status = 'Gầy thèm ăn';
    else if (parseFloat(bmi) < 24.9) status = 'Bình thường';
    else status = 'Thừa cân (Ăn ít lại)';

    Alert.alert('Kết quả BMI', `Chỉ số BMI của bạn là: ${bmi}\nTình trạng: ${status}`);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Text style={styles.title}>BMI CALCULATOR</Text>
      
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.label}>CHIỀU CAO (cm)</Text>
          <TextInput 
            style={styles.input} 
            keyboardType="numeric" 
            value={height} 
            onChangeText={setHeight} 
            maxLength={3}
          />
        </View>
        
        <View style={styles.card}>
          <Text style={styles.label}>CÂN NẶNG (kg)</Text>
          <TextInput 
            style={styles.input} 
            keyboardType="numeric" 
            value={weight} 
            onChangeText={setWeight} 
            maxLength={3}
          />
        </View>
      </View>

      <Pressable style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>TÍNH TOÁN BMI</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E21',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#1D1E33',
    padding: 30,
    borderRadius: 15,
    width: '48%',
    alignItems: 'center',
  },
  label: {
    color: '#8D8E98',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EB1555',
    width: 80,
  },
  button: {
    backgroundColor: '#EB1555',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

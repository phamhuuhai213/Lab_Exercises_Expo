import { View, Text, StyleSheet, Image } from 'react-native';

export default function Lab1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I Am Rich</Text>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2765/2765401.png' }} 
        style={styles.image} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

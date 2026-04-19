import { Image, StyleSheet, Text, View } from 'react-native';

export default function Lab1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I Am Rich</Text>
      <Image
        source={require('../data/kim-cương.webp')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

import { MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Lab2() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Phạm Hữu HẢi</Text>
      <Text style={styles.job}>REACT NATIVE DEVELOPER</Text>
      <View style={styles.divider} />

      <View style={styles.card}>
        <MaterialIcons name="phone" size={24} color="#00796B" />
        <Text style={styles.cardText}>+84 123 456 789</Text>
      </View>

      <View style={styles.card}>
        <MaterialIcons name="email" size={24} color="#00796B" />
        <Text style={styles.cardText}>haiph.23ite@vku.udn.vn</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00796B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  job: {
    fontSize: 18,
    color: '#B2DFDB',
    letterSpacing: 2,
    fontWeight: 'bold',
    marginTop: 5,
  },
  divider: {
    width: 150,
    height: 1,
    backgroundColor: '#B2DFDB',
    marginVertical: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
  },
  cardText: {
    color: '#00796B',
    fontSize: 18,
    marginLeft: 20,
  },
});

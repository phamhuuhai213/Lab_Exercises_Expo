import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

export default function Lab9() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('');

  const fetchWeatherByLocation = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Không có quyền truy cập vị trí! Sẽ dùng dữ liệu mặc định.');
      setWeather({ temp: 28, desc: "Trời có mây", city: "Đà Nẵng (Mock)" });
      setLoading(false);
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      // Dùng Open-Meteo thay vì OpenWeatherMap để khỏi cần đăng ký API Key phức tạp cho Lab
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&current_weather=true`);
      const data = await res.json();
      setWeather({ 
        temp: data.current_weather.temperature, 
        desc: "Thời tiết thực theo tọa độ", 
        city: "Vị trí của bạn" 
      });
    } catch(e) {
      alert("Lỗi lấy thời tiết, dùng dữ liệu mẫu.");
      setWeather({ temp: 25, desc: "Mát mẻ", city: "Hồ Chí Minh" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherByLocation();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.loadingText}>Đang dò vị trí và lấy thời tiết...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput 
          style={styles.input} 
          placeholder="Nhập tên thành phố..." 
          placeholderTextColor="#999"
          value={city}
          onChangeText={setCity}
        />
        <Pressable style={styles.searchBtn} onPress={() => alert('Phần search tĩnh để demo Lab')}>
          <MaterialIcons name="search" size={28} color="white" />
        </Pressable>
      </View>

      <View style={styles.weatherInfo}>
        <Text style={styles.temp}>{weather?.temp}°C</Text>
        <Text style={styles.city}>📍 {weather?.city}</Text>
        <Text style={styles.desc}>{weather?.desc}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BCD4',
    padding: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'white',
    marginTop: 20,
    fontSize: 18,
  },
  searchRow: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  searchBtn: {
    marginLeft: 10,
    padding: 10,
  },
  weatherInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
  },
  city: {
    fontSize: 35,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 22,
    color: 'white',
    marginTop: 10,
    fontStyle: 'italic',
  },
});

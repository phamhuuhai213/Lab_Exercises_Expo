import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="lab1" options={{ title: 'Lab 1' }} />
        <Stack.Screen name="lab2" options={{ title: 'Lab 2' }} />
        <Stack.Screen name="lab3" options={{ title: 'Lab 3' }} />
        <Stack.Screen name="lab4" options={{ title: 'Lab 4' }} />
        <Stack.Screen name="lab5" options={{ title: 'Lab 5' }} />
        <Stack.Screen name="lab6" options={{ title: 'Lab 6' }} />
        <Stack.Screen name="lab7" options={{ title: 'Lab 7' }} />
        <Stack.Screen name="lab8" options={{ title: 'Lab 8' }} />
        <Stack.Screen name="lab9" options={{ title: 'Lab 9' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

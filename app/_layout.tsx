import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF' }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Início',
          headerTitle: 'Acesse sua Conta' 
        }} 
      />
    </Tabs>
  );
}
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Feed() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Feed</Text>
      <Button 
        title="Sair (Logout)" 
        onPress={() => router.replace('/login')} 
        color="#FF3B30"

        
      />

      <Button
      title="Acessar API" 
        onPress={() => router.push('/api')} 
        color="#000000"

      />

<Button
      title="Acessar CEP" 
        onPress={() => router.push('/cep')} 
        color="#000000"

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
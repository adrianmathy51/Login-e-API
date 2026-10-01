import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function API() {
    const [Frase, setFrase] = useState('Relembre uma frase de Chuck Norris.');

    const buscaFrase = () => {
        var url = 'https://api.chucknorris.io/jokes/random'

        fetch(url)
        .then(Resposta => Resposta.json())
        .then(dados => {setFrase(dados.value)})
    }

    return (
    <View style={styles.container}>
        <Text>{Frase}</Text>
      <Button  
        onPress={buscaFrase}
        title = 'Clique aqui' 
        color="#FF3B30"

        
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
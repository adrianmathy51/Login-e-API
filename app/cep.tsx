import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CEP() {
    const [cep, setCep] = useState('');
    const [frase, setFrase] = useState('CEP da sua região');

    const buscaFrase = () => {
        
        const cepLimpo = cep.replace(/\D/g, '');

        if (cepLimpo.length !== 8) {
            setFrase('Por favor, digite um CEP válido com 8 dígitos.');
            return;
        }

        const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;

        fetch(url)
            .then(resposta => resposta.json())
            .then(dados => {
                if (dados.erro) {
                    setFrase('CEP não encontrado.');
                } else {
                    // Exibe o endereço formatado conforme retornado pela ViaCEP
                    setFrase(`${dados.logradouro},${dados.bairro} - ${dados.localidade}/${dados.uf} | ${dados.regiao}`);
                }
            })
            .catch(() => {
                setFrase('Erro ao buscar o CEP.');
            });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o CEP (ex: 85040380)"
                keyboardType="numeric"
                maxLength={8}
                value={cep}
                onChangeText={setCep}
            />

            <Button  
                onPress={buscaFrase}
                title="Buscar Endereço" 
                color="#FF3B30"
            />

            <Text style={styles.resultado}>{frase}</Text>
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
        padding: 20,
    },
    input: {
        width: '36%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    resultado: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
    },
});

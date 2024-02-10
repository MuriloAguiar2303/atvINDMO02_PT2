import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, TextInput, Alert, View, StyleSheet } from 'react-native'

export default function Contato() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{position:'absolute',top:40}}>
                <Text style={{fontSize:35}}>Cadastro</Text>
            </View>
            <View style={{gap:10}}>
                <TextInput style={{ borderColor: 'red', borderWidth: 1, width: 220, }} placeholder="Nome"></TextInput>
                <TextInput style={{ borderColor: 'red', borderWidth: 1, width: 220, }} placeholder="CPF"  keyboardType="numeric" ></TextInput>
                <TextInput style={{ borderColor: 'red', borderWidth: 1, width: 220, }} placeholder="DataNascimento"  keyboardType="numeric"></TextInput>
            </View>
            <View style={{ width: 220, marginTop:150 }}>
                <Button title="Enviar" color={'red'}
                    onPress={() => Alert.alert('Cadastro concluido', 'Parabens pelo cadastro, espere o resultado')}></Button>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808077'
    },
});
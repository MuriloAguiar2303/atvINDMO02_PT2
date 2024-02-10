import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

export default function Detalhes() {
    const route = useRoute();
    const { cursoInfo } = route.params;
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize:18}}>{cursoInfo.curso}</Text>
        <Text>Descrição: {cursoInfo.mensagem}</Text>
      </SafeAreaView>
    );
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        backgroundColor:'#808077'
    }
})
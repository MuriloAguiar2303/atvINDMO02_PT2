import { SafeAreaView } from "react-native-safe-area-context";
import {Text,Image,StyleSheet} from 'react-native'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../assets/logo-senai.png")} style={{width:250, height:130,position:'absolute',top:2}}></Image>
            <Text>Murilo Henrique de Aguiar</Text>
            <Text>Sumaré, 07/02/2024</Text>
            <Text>Escola SENAI Celso Charuri</Text>
            <Text>Técnico em Desenvolvimento de Sistemas</Text>
            <Text>INDMO - Interface para Dispositivos Móveis</Text>
        </SafeAreaView>
    )
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#808077'
    },
  });
  
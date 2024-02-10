import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, View, StyleSheet, ScrollView, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";





export default function Cursos() {

    const navigation = useNavigation();

    function navegaDetalhesAMD() {

        const adm = {
            curso: 'TÉCNICO EM ADMINISTRAÇÃO:',
            mensagem: 'O curso técnico de Administração tem por objetivo habilitar profissionais em realizar e gerir processos administrativos das áreas da indústria e de serviços, utilizando-se de técnicas e tecnologias apropriadas e de padrões éticos, legais, de qualidade e segurança, com responsabilidade social e ambiental.',
        }
        navigation.navigate('Detalhes',{cursoInfo: adm});
    }
    function navegaDetalhesDS() {
        const DS = {
            curso: 'TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS:',
            mensagem: 'O Curso Técnico de Desenvolvimento de Sistemas tem por objetivo habilitar profissionais para analisar requisitos funcionais e não funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário.',
        }
        navigation.navigate('Detalhes',{cursoInfo: DS});
    }
    function navegaDetalhesMELM() {
        const MELM = {
            curso: 'TÉCNICO EM ELETROMECÂNICA:',
            mensagem: 'O curso técnico de Eletromecânica tem por objetivo habilitar profissionais no planejamento, no controle e na realização de atividades relativas à manutenção eletromecânica, em conformidade às normas técnicas, ambientais, de qualidade e de segurança e saúde no trabalho.',
        }
        navigation.navigate('Detalhes',{cursoInfo: MELM});
    }

    return (
        <SafeAreaView style={styles.container}>


            <Image source={require("../../assets/logo-senai.png")} style={{ width: 200, height: 90}}></Image>
            <View style={styles.texto}>
                <Text style={styles.titulo} onPress={navegaDetalhesDS}>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS:</Text>
               

            </View>
            <View style={styles.texto}>
                <Text style={styles.titulo} onPress={navegaDetalhesMELM}>TÉCNICO EM ELETROMECÂNICA:</Text>
    
            </View>
            <View style={styles.texto}>
                <Text style={styles.titulo} onPress={navegaDetalhesAMD}>TÉCNICO EM ADMINISTRAÇÃO:</Text>
        
            </View>



        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#808077'
    },
    titulo: {
        fontSize: 15,
        color:'white'
    },
    texto: {
        justifyContent: 'center',
        textAlign: 'justify',
        alignItems: 'center',
        gap: 8,
        backgroundColor:'red',
        width:370,
        height:110,
        borderRadius:20,
        borderColor:'black',
        borderWidth:2,
        
    }
});

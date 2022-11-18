import React  from 'react';
import{Image,View,TouchableOpacity,StyleSheet,Text}from 'react-native'


export default function CardAlunos({data}){
    return(
        <TouchableOpacity style = {estilo.container}>
            <Image style = {estilo.imagem} source = {{ uri: data.imagem }}></Image>
            <Text>{data.nome}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
  container:{
      margin:10,
      width:150,
      height:150,
      alignIntems:"center",
      justifyContent:"center",
      backgroundColor:"#ffff"
  },
  imagem :{
      width:120,
      height:120
  }
});

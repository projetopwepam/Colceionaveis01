import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloResumo from './estiloSobre';

function Sobre() {

    return(

        <View style={estiloResumo.container}>
            <View style={estiloResumo.borda}>
                 
            <Text style={estiloResumo.titulo}> Venda de jogos online </Text>
             <Text style={estiloResumo.texto}> Projeto sobre vendas de jogos online </Text>


                <TouchableOpacity style={estiloResumo.botaoContainer}>
                   <Text style={estiloResumo.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default Sobre;

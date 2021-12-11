import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhe from './estiloDetalhe';

function Detalhes() {
    return (
        
        <View style={estiloDetalhe.container}>
            <View style={estiloDetalhe.borda}>

            
            <Text style={estiloDetalhe.titulo}> Resumo </Text>
            <Text style={estiloDetalhe.texto}>Um estudo feito pela bandeira de cartões Visa concluiu que, em 2020, houve um aumento de 140% nas transações financeiras feitas nas principais plataformas e consoles de games em comparação com o ano de 2019. Na pandemia, o brasileiro jogou, comprou e investiu mais tempo em games.

A bandeira de cartões Visa também concluiu que o ticket médio gasto na pandemia não variou muito, mantendo-se em torno de R$ 51,00, mas houveram picos, como em março de 2020, onde o ticket médio gasto chegou a R$ 56,00 (mês em que alguns lugares no país optaram pelo lockdown e os trabalhos em home office cresceram exponencialmente).

Nunca se jogou tanto no Brasil. As vantagens do home office, como a flexibilidade do horário de trabalho, o bem estar gerado pelo trabalho em ambiente familiar e maior aproveitamento do tempo útil, como a perda do ir e vir no trânsito, permitiu que os brasileiros estejam mais aptos a passar o tempo se divertindo. E, para muitos, games são a melhor opção. Além disso, o aumento no consumo de lives de streamings de games também aumentou, como aponta o site e-commerce Brasil, em 20% ainda em abril de 2020, gerando cada vez mais interesse e discussão no assunto em pauta e mais consumo. Isso acaba ocasionando, consequentemente, mais compras.</Text>

            
<TouchableOpacity style={estiloDetalhe.botaoContainer}>
   <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default Detalhes;
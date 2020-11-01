# Sars-CoV-2 | Benford Research (COV-BNF)

COV-BNF é um site informativo que utiliza de dados públicos dos Ministérios da Saúde de diversos países ao redor do globo para analisar, através da Lei de Benford, índices que podem ser usados para identificar países com supressão de número reais de mortes de sua população ou países com sub-notificação. O estudo baseia-se na premissa de que, caso haja dados que não sejam verídicos sendo exportados por países que queiram esconder suas reais informações, haverá uma curvatura incomum no nosso índice gerado a partir da equação base da Lei de Benford.

### A Lei de Benford
A lei de Benford, também chamada de lei do primeiro dígito, refere-se à distribuição de dígitos em várias fontes de casos reais. Ao contrário da homogeneidade esperada, a lei afirma que em muitas coleções de números que ocorrem naturalmente, o primeiro dígito significativo provavelmente será pequeno. Sem homogeneidade, esta distribuição mostra que o dígito 1 tem 30% de chance de aparecer em um conjunto de dados estatísticos enquanto valores maiores tem menos possibilidade de aparecer.
<p align="center">
  <img src="https://www.statisticshowto.com/wp-content/uploads/2016/07/benford-formula.png" width="150" align="center">
 </p>
Frank Benford demonstrou que esse resultado se aplica a uma ampla variedade de conjuntos de dados, incluindo contas de eletricidade, endereços, preços de ações, preços de casas, números de população, taxas de mortalidade, comprimentos de rios, constantes físicas e matemáticas. pelas leis de potência (que são muito comuns na natureza). Todas essas afirmações são calculadas ou definidas junto a uma escala logarítmica.



#### Definição matemática
Um conjunto de números satisfaz a lei de Benford se o primeiro dígito  d (d ∈ {1, ..., 9}) ocorre com a seguinte probabilidade:

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Benford_law_log_log_graph.svg/2000px-Benford_law_log_log_graph.svg.png" width="400">
 </p>


### Coeficiente de Similaridade

Usamos nas nossas demonstrações um coeficiente criado por nós chamado Coeficiente de Similaridade, localizado no canto superior direito de cada país. Ele é calculado através da soma da diferença absoluta dos índices das nações obtidos pela aplicação da Lei de Benford com a probabilidade relativa descrita por Benford na equação base em seu respectivo dígito.
Quanto menor o número em questão, mais próximo efetivamente um país está da curva de Benford. Portanto, possivelmente havendo uma menor quantidade de notificações errôneas ou ocultação de mortes.

### Website Preview com os Resultados Parciais da Pesquisa
01/11/2020
![Resultado Parcial 1](https://image.prntscr.com/image/_Ol0Qv5rRBWCu9XfB5SFEw.png)
![Resultado Parcial 2](https://image.prntscr.com/image/q8tOFPHgS3OAfkg7hszajg.png)
![Resultado Parcial 3](https://image.prntscr.com/image/a3ogqPEdTm_L41yCMRZ4Hw.png)
![Resultado Parcial 4](https://image.prntscr.com/image/PNTu7MEzRFm_ZssoxnpycA.png)


## Contato
Bruno Trigueiro | bruno.trigueiro@outlook.com
Matemático Computacional, responsável pela aplicação das equações e criações de índices.

Rodrigo dos Santos | rodrigo.bak10@hotmail.com
Responsável por aspectos do front-end e formação de gráficos através dos cálculos.


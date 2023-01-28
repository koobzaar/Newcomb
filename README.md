
# Benford Research
Iniciativa que se dedica à análise estatística de dados públicos obtidos a partir dos Ministérios da Saúde de países diversos, visando a identificação de distorções nos números de mortalidade da população através da aplicação rigorosa da Lei de Benford. A coleta e processamento dos dados públicos é realizada mediante a utilização de técnicas de mineração de dados, e os resultados obtidos são submetidos à análise estatística para a inferência de informações relevantes relacionadas à distorção dos índices de mortalidade.


## Lei de Benford
A Lei de Benford é uma distribuição estatística que descreve a frequência relativa dos dígitos em uma série de dados numéricos. Ela é baseada na propriedade matemática conhecida como a "Propriedade de Escala Logarítmica". A distribuição de probabilidade da Lei de Benford é dada pela seguinte equação:

![Equação](https://i.imgur.com/9ZCz6rg.png)

onde d é o dígito considerado. Essa equação indica que a probabilidade de um dígito d aparecer como o primeiro dígito de um número é dada pelo logaritmo base 10 de (1 + 1/d). Por exemplo, a probabilidade de o dígito 1 aparecer como o primeiro dígito é de 30,1%, enquanto a probabilidade de o dígito 9 aparecer como o primeiro dígito é de 4,6%.

Aplicando a Lei de Benford em conjuntos de dados, é possível avaliar a conformidade desses dados com a distribuição de probabilidade esperada, através de medidas de distância, tais como o coeficiente de similaridade.

## Coeficiente de Similaridade

A distância de Benford (também conhecida como coeficiente de similaridade) é uma medida utilizada para comparar a distribuição de dígitos de um conjunto de dados com a distribuição esperada de acordo com a Lei de Benford. Essa lei afirma que os dígitos menores (especificamente, os dígitos 1 a 9) ocorrem com maior frequência na posição de dígitos significativos de números reais.

A equação para calcular nosso coeficiente é:

![Equação](https://i.imgur.com/6PCWoLk.png)

Onde:
- D é a distância de Benford calculada
-   d(i) é a frequência relativa do dígito i (ou seja, a frequência do dígito i dividida pelo número total de dígitos) no conjunto de dados
-   log10(1 + 1/i) é a frequência esperada do dígito i de acordo com a Lei de Benford
-   O símbolo Σ indica que a soma é tomada sobre todos os dígitos (i = 1 a 9)

A distância de Benford é uma medida de similaridade entre as distribuições de dígitos. Quanto menor o valor de D, maior a similaridade entre as distribuições de dígitos. Valores de D próximos a zero indicam que a distribuição de dígitos do conjunto de dados é consistente com a Lei de Benford, enquanto valores maiores de D indicam uma possível distorção nos dados.

A utilização do coeficiente de similaridade dado pela distância de Benford tem como objetivo principal verificar a consistência dos dados, podendo ser utilizado para identificar possíveis distorções nos dados, como por exemplo, casos de fraude ou erro humano na coleta de dados.

## Galeria

As imagens apresentadas são ilustrações visuais dos resultados obtidos através da aplicação do método de análise de distância de Benford, também conhecido como coeficiente de similaridade. Elas fornecem uma representação gráfica dos dados coletados dos Ministérios da Saúde de diversos países, permitindo uma fácil compreensão dos índices de mortalidade e possíveis distorções encontrados. É importante destacar que essas imagens foram geradas a partir de dados públicos e são apenas uma ferramenta auxiliar na análise dos resultados, e não devem ser consideradas como evidências conclusivas.

![Introdução](https://camo.githubusercontent.com/2540f3f58be1991be5ee019167d74458e36bc66105060d830af35a7acd324848/68747470733a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f5f4f6c305176357252425743753958664235534645772e706e67)
![Resultados](https://camo.githubusercontent.com/94c807f7c86a28d19c2523017554fe44e8a2b15deaa531da317ca1ddef233f52/68747470733a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f7138744f4650486753334f41666b673768737a616a672e706e67)
![Resultados](https://camo.githubusercontent.com/8e0ac417e1155884f9ff654703fe4266e292f8ed13302dcfa08cab3f03bc730b/68747470733a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f61336f6771504564546d5f4c343179434d525a3448772e706e67)
![Resultados](https://camo.githubusercontent.com/502060d51bf8ad4d83126e0aba52845c91d2d4ec73c1fb5f3250b6bec7560249/68747470733a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f504e5475374d457a52466d5f5a73736f786e707963412e706e67)

## Créditos
O autor deste projeto é Bruno Trigueiro, com afiliação institucional atual na Faculdade de Tecnologia do Estado de São Paulo (FATEC). No momento da realização deste projeto, o autor estava afiliado à Universidade Federal do Rio de Janeiro (UFRJ). O contato do autor pode ser estabelecido através dos endereços eletrônicos bruno.trigueiro@proton.me ou bruno.trigueiro@fatec.sp.gov.br. Este projeto não foi financiado por nenhum reconhecimento financeiro e não há outros autores envolvidos. É importante notar que as informações e resultados apresentados neste projeto são de natureza acadêmica e não devem ser interpretados como fatos científicos comprovados.

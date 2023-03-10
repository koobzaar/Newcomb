
# Newcomb - aka. Benford Research
Initiative that is dedicated to statistical analysis of public data obtained from various Health Ministries, aiming to identify distortions in the mortality numbers of the population through the rigorous application of Benford's Law. The collection and processing of public data is carried out using data mining techniques, and the results obtained are subjected to statistical analysis for inferring relevant information related to the distortion of mortality indices.

## Benford's Law
Benford's Law is a statistical distribution that describes the relative frequency of digits in a series of numerical data. It is based on the mathematical property known as the "Logarithmic Scale Property". The probability distribution of Benford's Law is given by the following equation:

![Equação](https://i.imgur.com/9ZCz6rg.png)

where d is the digit considered. This equation indicates that the probability of a digit d appearing as the first digit of a number is given by the base 10 logarithm of (1 + 1/d). For example, the probability of the digit 1 appearing as the first digit is 30.1%, while the probability of the digit 9 appearing as the first digit is 4.6%.

By applying Benford's Law to sets of data, it is possible to evaluate the compliance of these data with the expected probability distribution, through distance measures, such as the similarity coefficient.

## Similarity Coefficient

The Benford distance (also known as the similarity coefficient) is a measure used to compare the distribution of digits of a set of data with the expected distribution according to Benford's Law. This law states that smaller digits (specifically, digits 1 to 9) occur more frequently in the significant digit position of real numbers.

The equation to calculate our coefficient is:

![Equação](https://i.imgur.com/6PCWoLk.png)

OWhere:

- D is the calculated Benford distance
- d(i) is the relative frequency of digit i (i.e. the frequency of digit i divided by the total number of digits) in the data set
- log10(1 + 1/i) is the expected frequency of digit i according to Benford's Law
- The Σ symbol indicates that the sum is taken over all digits (i = 1 to 9)

The Benford distance is a measure of similarity between the digit distributions. The smaller the value of D, the greater the similarity between the digit distributions. D values close to zero indicate that the digit distribution of the data set is consistent with Benford's Law, while larger D values indicate a possible distortion in the data.

The use of the similarity coefficient given by the Benford distance aims to verify the consistency of the data, and can be used to identify possible distortions in the data, such as cases of fraud or human error in data collection.

## Gallery

The images presented are visual illustrations of the results obtained through the application of the Benford's distance analysis method, also known as the similarity coefficient. They provide a graphical representation of the data collected from the Ministries of Health of various countries, allowing for easy understanding of mortality rates and possible distortions found. It is important to note that these images were generated from public data and are only an auxiliary tool in analyzing the results and should not be considered as conclusive evidence.

![Introdução](https://camo.githubusercontent.com/2540f3f58be1991be5ee019167d74458e36bc66105060d830af35a7acd324848/68747470733a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f5f4f6c305176357252425743753958664235534645772e706e67)
![Resultados](https://camo.githubusercontent.com/94c807f7c86a28d19c2523017554fe44e8a2b15deaa531da317ca1ddef233f52/68747470733a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f7138744f4650486753334f41666b673768737a616a672e706e67)
![Resultados](https://camo.githubusercontent.com/8e0ac417e1155884f9ff654703fe4266e292f8ed13302dcfa08cab3f03bc730b/68747470733a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f61336f6771504564546d5f4c343179434d525a3448772e706e67)
![Resultados](https://camo.githubusercontent.com/502060d51bf8ad4d83126e0aba52845c91d2d4ec73c1fb5f3250b6bec7560249/68747470733a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f504e5475374d457a52466d5f5a73736f786e707963412e706e67)

## Author
The author of this project is Bruno Trigueiro, currently affiliated with the São Paulo State Technological College (FATEC). At the time of this project, the author was affiliated with the Federal University of Rio de Janeiro (UFRJ). The author can be contacted through the email addresses bruno.trigueiro@proton.me or bruno.trigueiro@fatec.sp.gov.br. This project was not funded by any financial recognition and there are no other authors involved. It is important to note that the information and results presented in this project are of an academic nature and should not be interpreted as proven scientific facts.

class dadosPais {
    constructor(dados, metadados) {
        this.nomePais = metadados.name;
        this.aliasMortes = metadados.alias;
        this.codigoBandeiraISO = metadados.flagISO;
        this.corBandeira = metadados.dominantColor;
        this.identificadorPais = metadados.id;
        this.dadosSARSCOV = dados;
        this.numDiasAnalisados = 0;
        this.numMortes = 0;
        this.benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.coeficienteSimilaridade = 0;
        this._dadosForamGerados = [false, false];
    }
    _analiseBenford() {
        let lastCovidData = 0,
            deltaCovid = 0,
            totalNumbers = 0;
        for (let i = 0; i < this.dadosSARSCOV.length - 1; i++) {
            lastCovidData = parseInt(this.dadosSARSCOV[i][this.aliasMortes], 10);
            this.numDiasAnalisados++;
            deltaCovid = parseInt(this.dadosSARSCOV[i + 1][this.aliasMortes], 10) - lastCovidData; 
            // Transforma em decimal os dados de morte de determinado dia e subtrai pelo dia anterior para ter o Δ relativo 
            // daquele intervalo de tempo
            if (deltaCovid != 0 && !isNaN(deltaCovid)) {
                //Posteriormente valida se os dados são diferentes de zero. Considerando que na lei de Benford não é utilizado 0 para medição, 
                //um dia que não tenha havido mortes não é útil para a relação de comparação de dados.
                this.numMortes += deltaCovid;
                this.benfordData[String(deltaCovid).charAt(0) - 1] += 1;
                totalNumbers++;
            }
        }
        // Guardamos no vetor BenfordData o resultado da nossa análise dos dados de morte e seus respectivos dígitos. Abaixo ele mescla tudo no vetor.
        for (let index = 0; index < this.benfordData.length; index++)
            this.benfordData[index] = this.benfordData[index] / totalNumbers * 100;
        this._dadosForamGerados[0] = true;
        return this.benfordData;
    }
    _coeficienteSimilaridade() {
        // Abaixo fazemos o coeficiente de similaridade. O índice é gerado utilizando a subtração da quantidade de dígitos de cada número de dois vetores:
        // os do país pós coleta e análise de dados (e assim portanto tendo a curva da Lei de Benford) com os da própria lei de Benford ([30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6])
        let getSoma = this.benfordData.map(function (item, index) {
            return Math.abs(item - BenfordLaw[index]);
        })
        var getCoeficiente = getSoma.reduce(function (getSoma, b) {
            return getSoma + b;
        }, 0);
        this._dadosForamGerados[1] = true;
        this.coeficienteSimilaridade = getCoeficiente;
        return this.coeficienteSimilaridade;
    }
    _gerarGrafico() {
        if (this._dadosForamGerados[0] === true && this._dadosForamGerados[1] === true)
            gerarGrafico(this.codigoBandeiraISO, this.benfordData, this.corBandeira, this.nomePais, this.coeficienteSimilaridade)
        else {
            if (!this._dadosForamGerados[0])
                this._analiseBenford();
            if (!this._dadosForamGerados[1])
                this._coeficienteSimilaridade();
            gerarGrafico(this.codigoBandeiraISO, this.benfordData, this.corBandeira, this.nomePais, this.coeficienteSimilaridade)
        }
    }
}
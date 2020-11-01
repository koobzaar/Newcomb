
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
            if (deltaCovid != 0 && !isNaN(deltaCovid)) {
                this.numMortes += deltaCovid;
                this.benfordData[String(deltaCovid).charAt(0) - 1] += 1;
                totalNumbers++;
            }
        }
        for (let index = 0; index < this.benfordData.length; index++)
            this.benfordData[index] = this.benfordData[index] / totalNumbers * 100;
        this._dadosForamGerados[0] = true;
        return this.benfordData;
    }
    _coeficienteSimilaridade() {
        let getSoma = this.benfordData.map(function (item, index) {
            return Math.abs(item - BenfordLaw[index]);
        })
        var getCoeficiente = getSoma.reduce(function (getSoma, b) {
            return getSoma + b;
        }, 0);
        this._dadosForamGerados[1] = true;
        this.coeficienteSimilaridade=getCoeficiente;
        return this.coeficienteSimilaridade;
    }
    _gerarGrafico() {
            if (this._dadosForamGerados[0]===true && this._dadosForamGerados[1]===true)
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
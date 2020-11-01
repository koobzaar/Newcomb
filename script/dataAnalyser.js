BenfordLaw = [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6]
class analisador {
    constructor() {
        this.paisesParaAnalisar = [alemanha, belgica, brasil, canada, china, coreia, dinamarca, espanha, eua, filipinas, india, ira, italia, japao, malasia, nigeria, palestina, paquistao, portugal, singapura, suica, turquia]
        this.paisesAnalisados =  [];
        this.diasAcumuladosAnalisados=0;
        this.mortesTotais=0;
        this.TotalPaisesAnalisados=0;
    }
    _dePaises() {
        console.log("Analisando...")
        for (let indexadorPaises = 0; indexadorPaises < this.paisesParaAnalisar.length; indexadorPaises++) {
            this.paisesAnalisados.push(new dadosPais(this.paisesParaAnalisar[indexadorPaises], countryMetadata[indexadorPaises]));
            console.log("Gerado: " + this.paisesAnalisados[indexadorPaises].nomePais)
            this.paisesAnalisados[indexadorPaises]._gerarGrafico();
            this.diasAcumuladosAnalisados += this.paisesAnalisados[indexadorPaises].numDiasAnalisados;
            this.mortesTotais += this.paisesAnalisados[indexadorPaises].numMortes;
            this.TotalPaisesAnalisados++;
        }
    }
}
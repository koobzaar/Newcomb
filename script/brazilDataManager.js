var numMortes = 0;
var numDias = 0;
var BenfordLaw = [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6]
// Brasil
$.getJSON("../data/brasil.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }
    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }
    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('BR', benfordData, '0, 156, 59','Brasil',sum)
    
});

// Índia
$.getJSON("../data/india.json", function (dataCovid) {
    let alias = 'deaths'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('IN', benfordData, '253, 162, 9','Índia',sum)
});
// Alemanha
$.getJSON("../data/alemanha.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('DE', benfordData, '255, 0, 0','Alemanha',sum)
});
// Italia
$.getJSON("../data/italia.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        

        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('IT', benfordData, '0, 140, 69','Itália',sum)
});
// China
$.getJSON("../data/china.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        

        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('CN', benfordData, '197, 16, 21','China',sum)
});
// Canadá
$.getJSON("../data/canada.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        

        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('CA', benfordData, '197, 16, 21','Canadá',sum)
});
// Bélgica
$.getJSON("../data/belgica.json", function (dataCovid) {
    let alias = 'deaths'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        

        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('BE', benfordData, '255,100,0','Bélgica',sum)
});
// Palestina
$.getJSON("../data/palestina.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        

        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('PS', benfordData, '0,0,0','Palestina',sum)
});
// Estados Unidos
$.getJSON("../data/eua.json", function (dataCovid) {
    let alias = 'totalDeaths'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        

        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('US', benfordData, '60, 59, 110','Estados Unidos',sum)
});
// Suíça
$.getJSON("../data/suica.json", function (dataCovid) {
    let alias = 'numberOfDeaths'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        

        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('CH', benfordData, '213, 43, 30','Suiça',sum)
}); //Mudaram pra deceased 
// Japão
$.getJSON("../data/japao.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        

        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('JP', benfordData, '255, 30, 0','Japão',sum)
});
// Coréia do Sul
$.getJSON("../data/coreia.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('KR', benfordData, '0, 71, 160','Coréia do Sul',sum)
});
// Nigéria 
$.getJSON("../data/nigeria.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }

    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;

    }

    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('NG', benfordData, '0, 108, 53','Nigéria',sum)
});
// Vietnam 
$.getJSON("../data/vietnam.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }
    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;
    }
    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('VN', benfordData, '218, 37, 29','Vietnã',sum)
});
// Espanha 
$.getJSON("../data/espanha.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }
    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;
    }
    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('ES', benfordData, '170, 21, 27','Espanha',sum)
}); 
// Turquia
$.getJSON("../data/turquia.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }
    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;
    }
    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('TR', benfordData, '227, 10, 23','Turquia',sum)
}); 
// Paquistão
$.getJSON("../data/paquistao.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }
    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;
    }
    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('PK', benfordData, '52, 146, 4)','Paquistão',sum)
}); 
// Singapura 
$.getJSON("../data/singapura.json", function (dataCovid) {
    let alias = 'deceased'
    var benfordData = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var dataDays = [];
    let lastCovidData = 0;
    var deltaCovid = 0;
    let totalNumbers = 0;
    for (let i = 0; i < dataCovid.length - 1; i++) {
        lastCovidData = parseInt(dataCovid[i][alias],10); numDias++;
        
        deltaCovid = parseInt(dataCovid[i + 1][alias],10) - lastCovidData;
        if (deltaCovid != 0  && !isNaN(deltaCovid)) { numMortes+=deltaCovid;
            dataDays.push({
                "numObitos": deltaCovid,
                "diaRespectivo": dataCovid[i].lastUpdatedAtSource
            })
            benfordData[String(deltaCovid).charAt(0) - 1] += 1;
            totalNumbers++;
        }
    }
    for (let index = 0; index < benfordData.length; index++) {
        benfordData[index] = benfordData[index] / totalNumbers * 100;
    }
    var coeficient = benfordData.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - BenfordLaw[index]);
      })
      var sum = coeficient.reduce(function(coeficient, b) { return coeficient + b; }, 0);
    console.log(sum)
    gerarGrafico('SG', benfordData, '239, 51, 64','Singapura',sum)
}); 

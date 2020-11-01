function analisar() {
  const analisePrincipal = new analisador()
  analisePrincipal._dePaises();
    $('.CountMortes').each(function () {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: analisePrincipal.mortesTotais
      }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter).toLocaleString('pt') + ' mil óbitos');
        }
      });
    });
    $('.CountDias').each(function () {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: analisePrincipal.diasAcumuladosAnalisados
      }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter).toLocaleString('pt') + ' dias de dados acumulativos');
        }
      });
    });
    $('.CountAnos').each(function () {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: analisePrincipal.diasAcumuladosAnalisados / 365
      }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter).toLocaleString('pt') + ' anos de dados acumulativos de pandemia');
        }
      });
    });
  $('.Contador').each(function () {
    var $this = $(this);
    jQuery({
      Counter: 0
    }).animate({
      Counter: $(this).text()
    }, {
      duration: 1000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter).toLocaleString('pt'));
      }
    });
  });$('.ContadorPaises').each(function () {
    var $this = $(this);
    jQuery({
      Counter: 0
    }).animate({
      Counter: analisePrincipal.paisesAnalisados.length
    }, {
      duration: 1000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter).toLocaleString('pt'));
      }
    });
  });
}
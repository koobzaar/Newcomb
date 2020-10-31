setTimeout(function name(params) {
    $('.CountMortes').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: numMortes }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter).toLocaleString('pt')+' mil óbitos');
          }
        });
      });
      $('.CountDias').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: numDias }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter).toLocaleString('pt')+' dias de dados acumulativos');
          }
        });
      });
      $('.CountAnos').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: 30 }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter).toLocaleString('pt')+' anos de dados acumulativos de pandemia');
          }
        });
      });
},3000);

$('.Contador').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter:  $(this).text() }, {
      duration: 1000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter).toLocaleString('pt'));
      }
    });
  });
 
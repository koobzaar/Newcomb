function analisar() {
  const analisePrincipal = new analisador()
  analisePrincipal._dePaises();
  let contadorConfig = {
    "duracao": 4000
  }
 
var element = document.getElementById('descricaoGraficos');
var elementHeight = element.clientHeight;

document.addEventListener('scroll', animate);
function inView() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}
var animateOnce=false
function animate() {
  if (inView()) {
    if(animateOnce===false){

      animateOnce=true
      $('.CountMortes').each(function () {
        var $this = $(this);
        jQuery({
          Counter: 0
        }).animate({
          Counter: analisePrincipal.mortesTotais
        }, {
          duration: contadorConfig.duracao,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter).toLocaleString('pt') + ' mil vidas perdidas');
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
          duration: contadorConfig.duracao,
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
          duration: contadorConfig.duracao,
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
          Counter: 1187014
        }, {
          duration: contadorConfig.duracao,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter).toLocaleString('pt'));
          }
        });
      });
      $('.ContadorPaises').each(function () {
        var $this = $(this);
        jQuery({
          Counter: 0
        }).animate({
          Counter: analisePrincipal.paisesAnalisados.length
        }, {
          duration: contadorConfig.duracao,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter).toLocaleString('pt'));
          }
        });
      });
  }} 
}

     
}
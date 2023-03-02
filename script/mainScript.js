function analisar() {
 
  const analisePrincipal = new analisador()
  
  analisePrincipal._dePaises();
  let contadorConfig = {
    "duracao": 10000
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
      $('.CountSeg').each(function () {
        var $this = $(this);
        jQuery({
          Counter: 0
        }).animate({
          Counter: analisePrincipal.tempoAlgoritmo
        }, {
          duration: contadorConfig.duracao,
          easing: 'swing',
          step: function () {
            $this.text('em '+(this.Counter/1000).toLocaleString('pt') + ' segundo(s)');
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
          Counter: analisePrincipal.paisesAnalisados.length-1
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
var x = document.getElementById('benfordProportion').innerHTML = `
<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="65.95ex" height="6.176ex"
style="vertical-align: -2.505ex;" viewBox="0 -1580.7 28395.2 2659.1" role="img" focusable="false"
xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">
<title id="MathJax-SVG-1-Title">{\displaystyle P(d)=\log _{10}(d+1)-\log _{10}(d)=\log _{10}\left({\frac
    {d+1}{d}}\right)=\log _{10}\left(1+{\frac {1}{d}}\right).}</title>
<defs aria-hidden="true">
    <path stroke-width="1" id="E1-MJMATHI-50"
        d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-28"
        d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
    </path>
    <path stroke-width="1" id="E1-MJMATHI-64"
        d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-29"
        d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-3D"
        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-6C"
        d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-6F"
        d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-67"
        d="M329 409Q373 453 429 453Q459 453 472 434T485 396Q485 382 476 371T449 360Q416 360 412 390Q410 404 415 411Q415 412 416 414V415Q388 412 363 393Q355 388 355 386Q355 385 359 381T368 369T379 351T388 325T392 292Q392 230 343 187T222 143Q172 143 123 171Q112 153 112 133Q112 98 138 81Q147 75 155 75T227 73Q311 72 335 67Q396 58 431 26Q470 -13 470 -72Q470 -139 392 -175Q332 -206 250 -206Q167 -206 107 -175Q29 -140 29 -75Q29 -39 50 -15T92 18L103 24Q67 55 67 108Q67 155 96 193Q52 237 52 292Q52 355 102 398T223 442Q274 442 318 416L329 409ZM299 343Q294 371 273 387T221 404Q192 404 171 388T145 343Q142 326 142 292Q142 248 149 227T179 192Q196 182 222 182Q244 182 260 189T283 207T294 227T299 242Q302 258 302 292T299 343ZM403 -75Q403 -50 389 -34T348 -11T299 -2T245 0H218Q151 0 138 -6Q118 -15 107 -34T95 -74Q95 -84 101 -97T122 -127T170 -155T250 -167Q319 -167 361 -139T403 -75Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-31"
        d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-30"
        d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-2B"
        d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-2212"
        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
    <path stroke-width="1" id="E1-MJSZ3-28"
        d="M701 -940Q701 -943 695 -949H664Q662 -947 636 -922T591 -879T537 -818T475 -737T412 -636T350 -511T295 -362T250 -186T221 17T209 251Q209 962 573 1361Q596 1386 616 1405T649 1437T664 1450H695Q701 1444 701 1441Q701 1436 681 1415T629 1356T557 1261T476 1118T400 927T340 675T308 359Q306 321 306 250Q306 -139 400 -430T690 -924Q701 -936 701 -940Z">
    </path>
    <path stroke-width="1" id="E1-MJSZ3-29"
        d="M34 1438Q34 1446 37 1448T50 1450H56H71Q73 1448 99 1423T144 1380T198 1319T260 1238T323 1137T385 1013T440 864T485 688T514 485T526 251Q526 134 519 53Q472 -519 162 -860Q139 -885 119 -904T86 -936T71 -949H56Q43 -949 39 -947T34 -937Q88 -883 140 -813Q428 -430 428 251Q428 453 402 628T338 922T245 1146T145 1309T46 1425Q44 1427 42 1429T39 1433T36 1436L34 1438Z">
    </path>
    <path stroke-width="1" id="E1-MJMAIN-2E"
        d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
</defs>
<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"
    aria-hidden="true">
    <use xlink:href="#E1-MJMATHI-50" x="0" y="0"></use>
    <use xlink:href="#E1-MJMAIN-28" x="751" y="0"></use>
    <use xlink:href="#E1-MJMATHI-64" x="1141" y="0"></use>
    <use xlink:href="#E1-MJMAIN-29" x="1664" y="0"></use>
    <use xlink:href="#E1-MJMAIN-3D" x="2331" y="0"></use>
    <g transform="translate(3388,0)">
        <use xlink:href="#E1-MJMAIN-6C"></use>
        <use xlink:href="#E1-MJMAIN-6F" x="278" y="0"></use>
        <use xlink:href="#E1-MJMAIN-67" x="779" y="0"></use>
        <g transform="translate(1279,-243)">
            <use transform="scale(0.707)" xlink:href="#E1-MJMAIN-31"></use>
            <use transform="scale(0.707)" xlink:href="#E1-MJMAIN-30" x="500" y="0"></use>
        </g>
    </g>
    <use xlink:href="#E1-MJMAIN-28" x="5475" y="0"></use>
    <use xlink:href="#E1-MJMATHI-64" x="5864" y="0"></use>
    <use xlink:href="#E1-MJMAIN-2B" x="6610" y="0"></use>
    <use xlink:href="#E1-MJMAIN-31" x="7611" y="0"></use>
    <use xlink:href="#E1-MJMAIN-29" x="8111" y="0"></use>
    <use xlink:href="#E1-MJMAIN-2212" x="8723" y="0"></use>
    <g transform="translate(9724,0)">
        <use xlink:href="#E1-MJMAIN-6C"></use>
        <use xlink:href="#E1-MJMAIN-6F" x="278" y="0"></use>
        <use xlink:href="#E1-MJMAIN-67" x="779" y="0"></use>
        <g transform="translate(1279,-243)">
            <use transform="scale(0.707)" xlink:href="#E1-MJMAIN-31"></use>
            <use transform="scale(0.707)" xlink:href="#E1-MJMAIN-30" x="500" y="0"></use>
        </g>
    </g>
    <use xlink:href="#E1-MJMAIN-28" x="11811" y="0"></use>
    <use xlink:href="#E1-MJMATHI-64" x="12201" y="0"></use>
    <use xlink:href="#E1-MJMAIN-29" x="12724" y="0"></use>
    <use xlink:href="#E1-MJMAIN-3D" x="13391" y="0"></use>
    <g transform="translate(14448,0)">
        <use xlink:href="#E1-MJMAIN-6C"></use>
        <use xlink:href="#E1-MJMAIN-6F" x="278" y="0"></use>
        <use xlink:href="#E1-MJMAIN-67" x="779" y="0"></use>
        <g transform="translate(1279,-243)">
            <use transform="scale(0.707)" xlink:href="#E1-MJMAIN-31"></use>
            <use transform="scale(0.707)" xlink:href="#E1-MJMAIN-30" x="500" y="0"></use>
        </g>
    </g>
    <g transform="translate(16535,0)">
        <use xlink:href="#E1-MJSZ3-28"></use>
        <g transform="translate(736,0)">
            <g transform="translate(120,0)">
                <rect stroke="none" width="2366" height="60" x="0" y="220"></rect>
                <g transform="translate(60,676)">
                    <use xlink:href="#E1-MJMATHI-64" x="0" y="0"></use>
                    <use xlink:href="#E1-MJMAIN-2B" x="745" y="0"></use>
                    <use xlink:href="#E1-MJMAIN-31" x="1746" y="0"></use>
                </g>
                <use xlink:href="#E1-MJMATHI-64" x="921" y="-715"></use>
            </g>
        </g>
        <use xlink:href="#E1-MJSZ3-29" x="3343" y="-1"></use>
    </g>
    <use xlink:href="#E1-MJMAIN-3D" x="20893" y="0"></use>
    <g transform="translate(21949,0)">
        <use xlink:href="#E1-MJMAIN-6C"></use>
        <use xlink:href="#E1-MJMAIN-6F" x="278" y="0"></use>
        <use xlink:href="#E1-MJMAIN-67" x="779" y="0"></use>
        <g transform="translate(1279,-243)">
            <use transform="scale(0.707)" xlink:href="#E1-MJMAIN-31"></use>
            <use transform="scale(0.707)" xlink:href="#E1-MJMAIN-30" x="500" y="0"></use>
        </g>
    </g>
    <g transform="translate(24036,0)">
        <use xlink:href="#E1-MJSZ3-28"></use>
        <g transform="translate(736,0)">
            <use xlink:href="#E1-MJMAIN-31" x="0" y="0"></use>
            <use xlink:href="#E1-MJMAIN-2B" x="722" y="0"></use>
            <g transform="translate(1723,0)">
                <g transform="translate(120,0)">
                    <rect stroke="none" width="643" height="60" x="0" y="220"></rect>
                    <use xlink:href="#E1-MJMAIN-31" x="71" y="676"></use>
                    <use xlink:href="#E1-MJMATHI-64" x="60" y="-715"></use>
                </g>
            </g>
        </g>
        <use xlink:href="#E1-MJSZ3-29" x="3343" y="-1"></use>
    </g>
    <use xlink:href="#E1-MJMAIN-2E" x="28116" y="0"></use>
</g>
</svg>`; 

     
}
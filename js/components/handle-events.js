AFRAME.registerComponent('handle-events', {
    init: function () {
      var el = this.el;  // <a-box>
      //const text = document.querySelector('a-text');
      const desc_est = document.querySelector('#descripcion-estatua');
      const est = document.querySelector('#estatua');
      const img_est = document.querySelector('#img-estatua');
      const cross_est = document.querySelector('#cross-estatua');
      const text_est = document.querySelector('#text-estatua');
      const bici = document.querySelector('#bicicleta');
      const cross_bici = document.querySelector('#cross-bicicleta');
      const desc_bici = document.querySelector('#descripcion-bicicleta');
      const text_bici = document.querySelector('#text-bicicleta');
    //   el.addEventListener('mouseenter', function () {
    //     el.setAttribute('color', '#24CAFF');  
    //   });
    //   el.addEventListener('mouseleave', function () {
    //     el.setAttribute('color', '#EF2D5E');  
    //   });
      el.addEventListener('click', function () {
          switch (el.id) {
              case "arrow-first":
                window.location.href = "http://127.0.0.1:8887/index.html"
                  break;
              case "arrow-second":
                window.location.href = "http://127.0.0.1:8887/secondPage.html"
                  break;
              case "arrow-third":
                window.location.href = "http://127.0.0.1:8887/thirdPage.html"
                  break;
              case "bicicleta":
                bici.setAttribute('visible', false);
                desc_bici.setAttribute('visible', true);
                cross_bici.setAttribute('visible', true);
                text_bici.setAttribute('visible', true);
                  break;
              case "estatua":
                  est.setAttribute('visible', false);
                  img_est.setAttribute('visible', true);
                  desc_est.setAttribute('visible', true);
                  cross_est.setAttribute('visible', true);
                  text_est.setAttribute('visible', true);
                  break;
              case "cross-estatua":
                  est.setAttribute('visible', true);
                  img_est.setAttribute('visible', false);
                  desc_est.setAttribute('visible', false);
                  cross_est.setAttribute('visible', false);
                  text_est.setAttribute('visible', false);
                  break;
              case "cross-bicicleta":
                  bici.setAttribute('visible', true);
                  desc_bici.setAttribute('visible', false);
                  cross_bici.setAttribute('visible', false);
                  text_bici.setAttribute('visible', false);
                  break;
              default:
                  break;
          }
      });
    } 
  });
AFRAME.registerComponent('handle-events', {
    init: function () {
      var el = this.el;  // <a-box>
      //const text = document.querySelector('a-text');
      const particles = document.querySelector('#particles');
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
              case "rain":
                particles.setAttribute('particle-system', "preset:rain");
                  break;
              case "text-rain":
                particles.setAttribute('particle-system', "preset:rain");
                  break;
              case "snow":
                particles.setAttribute('particle-system', "preset:snow");
                  break;
              case "text-snow":
                particles.setAttribute('particle-system', "preset:snow");
                  break;
              case "dust":
                particles.setAttribute('particle-system', "preset:dust");
                  break;
              case "text-dust":
                particles.setAttribute('particle-system', "preset:dust");
                  break;
              case "bicicleta":
                bici.setAttribute('visible', false);
                desc_bici.setAttribute('visible', true);
                cross_bici.setAttribute('visible', true);
                text_bici.setAttribute('visible', true);
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
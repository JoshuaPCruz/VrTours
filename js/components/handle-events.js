AFRAME.registerComponent('handle-events', {
    init: function () {
      var el = this.el;  // <a-box>
      //const text = document.querySelector('a-text');
      const desc_pel = document.querySelector('#descripcion-peluches');
      const pel = document.querySelector('#peluches');
      const cross_pel = document.querySelector('#cross-peluches');
      const text_pel = document.querySelector('#text-peluches');
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
              case "bicicleta":
                bici.setAttribute('visible', false);
                desc_bici.setAttribute('visible', true);
                cross_bici.setAttribute('visible', true);
                text_bici.setAttribute('visible', true);
                  break;
              case "peluches":
                  pel.setAttribute('visible', false);
                  desc_pel.setAttribute('visible', true);
                  cross_pel.setAttribute('visible', true);
                  text_pel.setAttribute('visible', true);
                  break;
              case "cross-peluches":
                  pel.setAttribute('visible', true);
                  desc_pel.setAttribute('visible', false);
                  cross_pel.setAttribute('visible', false);
                  text_pel.setAttribute('visible', false);
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
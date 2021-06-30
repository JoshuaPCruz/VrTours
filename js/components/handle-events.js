AFRAME.registerComponent('handle-events', {
    init: function () {
      var el = this.el;  // <a-box>
      //const text = document.querySelector('a-text');
      const desc_pel = document.querySelector('#descripcion-peluches');
      const pel = document.querySelector('#peluches');
      const cross_pel = document.querySelector('#cross-peluches');
      const text_pel = document.querySelector('#text-peluches');
      const tel = document.querySelector('#television');
      const cross_tel = document.querySelector('#cross-television');
      const desc_tel = document.querySelector('#descripcion-television');
      const text_tel = document.querySelector('#text-television');
    //   el.addEventListener('mouseenter', function () {
    //     el.setAttribute('color', '#24CAFF');  
    //   });
    //   el.addEventListener('mouseleave', function () {
    //     el.setAttribute('color', '#EF2D5E');  
    //   });
      el.addEventListener('click', function () {
          switch (el.id) {
              case "television":
                tel.setAttribute('visible', false);
                desc_tel.setAttribute('visible', true);
                cross_tel.setAttribute('visible', true);
                text_tel.setAttribute('visible', true);
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
              case "cross-television":
                  tel.setAttribute('visible', true);
                  desc_tel.setAttribute('visible', false);
                  cross_tel.setAttribute('visible', false);
                  text_tel.setAttribute('visible', false);
                  break;
              default:
                  break;
          }
      });
    } 
  });
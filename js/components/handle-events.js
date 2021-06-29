AFRAME.registerComponent('handle-events', {
    init: function () {
      var el = this.el;  // <a-box>
      const text = document.querySelector('a-text');
      const desc = document.querySelector('#descripcion');
      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', '#24CAFF');  
      });
      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', '#EF2D5E');  
      });
      let flag =true;
      el.addEventListener('click', function () {
        if(flag){
          el.setAttribute('scale', {x: 2, y: 1, z: 2});
          text.setAttribute('value', "ADIOS");
          desc.setAttribute('visible', true)
          flag = !flag;
        }else{
          el.setAttribute('scale', {x: 1, y: 1, z: 1});
          text.setAttribute('value', "HOLA");
          desc.setAttribute('visible', false)
          flag = !flag;
        }
        
      });
    } 
  });
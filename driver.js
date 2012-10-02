(function(){
  document.getElementById('load').addEventListener('click', function(){
    return document.getElementById('file').click();
  });
  document.getElementById('file').addEventListener('change', function(){
    var reader, builtins, start, files, file_texts;
    reader = new FileReader;
    builtins = ['Array.vm', 'Keyboard.vm', 'Math.vm', 'Memory.vm', 'Output.vm', 'Screen.vm', 'String.vm', 'Sys.vm'];
    start = document.getElementById('start');
    start.disabled = true;
    start.textContent = "translating..";
    files = Array.prototype.filter.call(this.files, function(it){
      return /^.+\.vm$/.test(it.name) && builtins.indexOf(it.name) === -1;
    });
    file_texts = [];
    reader.onload = function(){
      file_texts.push([this.result, files.pop().name]);
      if (files.length === 0) {
        try {
          translate(file_texts);
          vm.reset();
          return start.click();
        } catch (e) {
          alert("Error translating: " + e);
          start.textContent = "Start";
          return start.disabled = false;
        }
      } else {
        return this.readAsText(files[files.length - 1]);
      }
    };
    if (files.length > 0) {
      reader.readAsText(files[files.length - 1]);
    } else {
      alert("No non-OS .vm files found in your selection!");
    }
  });
  document.getElementById('start').addEventListener('click', function(){
    vm.start();
  });
  document.getElementById('stop').addEventListener('click', function(){
    vm.stop();
  });
  document.getElementById('reset').addEventListener('click', function(){
    vm.reset();
  });
  vm.canvas = document.getElementById('canvas').getContext('2d');
  document.addEventListener('keydown', vm.keyboard);
  document.addEventListener('keyup', vm.clearkeyboard);
  vm.startbutton = document.getElementById('start');
  vm.stopbutton = document.getElementById('stop');
  vm.resetbutton = document.getElementById('reset');
  vm.startbutton.disabled = true;
  vm.stopbutton.disabled = true;
  vm.resetbutton.disabled = true;
  window.addEventListener('error', function(){
    var _ref;
    return alert("Runtime error! Current callstack: " + ((_ref = vm.callstack) != null ? _ref.map(function(it){
      return it.fn_name;
    }).join(', ') : void 8));
  });
}).call(this);

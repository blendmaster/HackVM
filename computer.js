(function(){
  "use strict";
  this.vm = {
    map_screen: function(addr, value){
      var offset, p, i, pixel, _to;
      offset = (addr - 16384) * 16 * 4;
      p = 0;
      for (i = offset, _to = offset + 64; i < _to; i += 4) {
        pixel = value >> p++ & 1 ? 0 : 255;
        this.screen.data[i] = pixel;
        this.screen.data[i + 1] = pixel;
        this.screen.data[i + 2] = pixel;
      }
      if (!this.refresh) {
        return this.refresh = setTimeout(function(){
          vm.canvas.putImageData(vm.screen, 0, 0);
          return vm.refresh = void 8;
        }, 0);
      }
    },
    boot: function(){
      this.RAMBuffer = new ArrayBuffer(24577 * 2);
      this.RAM = new Int16Array(this.RAMBuffer);
      this.canvas.fillStyle = 'white';
      this.canvas.fillRect(0, 0, 512, 256);
      this.screen = this.canvas.getImageData(0, 0, 512, 256);
      __import(this.functions, this.builtins);
      this.callstack = [this.functions['Sys.init']];
      this.label = 0;
      this.RAM[0] = 261;
      this.booted = true;
      this.io = false;
      this.resetbutton.disabled = false;
    },
    run: function(){
      var len;
      while ((len = vm.callstack.length) > 0) {
        vm.callstack[len - 1](vm.label);
        if (vm.io) {
          vm.io = false;
          vm.timeout = setTimeout(vm.run, 0);
          return;
        }
        if (vm.pause) {
          vm.timeout = setTimeout(vm.run, vm.pause);
          vm.pause = 0;
          return;
        }
      }
      vm.stop();
    },
    start: function(){
      if (!vm.booted) {
        vm.boot();
      }
      vm.running = true;
      vm.startbutton.disabled = true;
      vm.startbutton.textContent = 'Running...';
      vm.stopbutton.disabled = false;
      vm.stopbutton.textContent = 'Stop';
      setTimeout(vm.run, 0);
    },
    stop: function(){
      clearTimeout(vm.timeout);
      vm.running = false;
      vm.startbutton.disabled = false;
      vm.startbutton.textContent = 'Start';
      vm.stopbutton.disabled = true;
      vm.stopbutton.textContent = 'Stopped';
    },
    reset: function(){
      vm.stop();
      vm.booted = false;
      vm.start();
    },
    keys: {
      13: 128,
      8: 129,
      37: 130,
      38: 131,
      39: 132,
      40: 133,
      36: 134,
      35: 135,
      33: 136,
      34: 137,
      46: 139,
      27: 140,
      112: 141,
      113: 142,
      114: 143,
      115: 144,
      116: 145,
      117: 146,
      118: 147,
      119: 148,
      120: 149,
      121: 150,
      122: 151,
      123: 152,
      186: 59,
      187: 61,
      188: 44,
      189: 45,
      190: 46,
      191: 47,
      192: 96,
      219: 91,
      220: 92,
      221: 93,
      222: 39,
      107: 61,
      109: 45
    },
    keyboard: function(e){
      var key;
      key = e.keyCode;
      if (vm.booted) {
        vm.RAM[24576] = vm.keys[key] || key;
      }
      if (vm.running) {
        return e.preventDefault();
      }
    },
    clearkeyboard: function(){
      if (vm.booted) {
        return vm.RAM[24576] = 0;
      }
    }
  };
  function __import(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);

(function(){
  "use strict";
  var arithmetic, unary, boolean, LCL, ARG, THIS, THAT, push_base, push_segment, pop_to_base, pop_segment, current_fn, code, flush;
  arithmetic = {
    add: '+',
    sub: '-',
    and: '&',
    or: '|'
  };
  unary = {
    neg: '-',
    not: '~'
  };
  boolean = {
    eq: '===',
    gt: '>',
    lt: '<'
  };
  LCL = 1;
  ARG = 2;
  THIS = 3;
  THAT = 4;
  push_base = function(base){
    return function(it){
      return "RAM[ SP++ ] = RAM[ " + base + " + " + it + " ]";
    };
  };
  push_segment = {
    constant: function(it){
      return "RAM[ SP++ ] = " + it;
    },
    argument: push_base('ARG'),
    local: push_base('LCL'),
    'this': push_base('THIS'),
    temp: function(it){
      return "RAM[ SP++ ] = RAM[ " + (5 + parseInt(it, 10)) + " ]";
    },
    pointer: function(it){
      var addr;
      return "RAM[ SP++ ] = " + (function(){
        switch (addr = parseInt(it, 10)) {
        case 0:
          return 'THIS';
        case 1:
          return 'THAT';
        default:
          return "RAM[ " + (3 + addr) + " ]";
        }
      }());
    }
  };
  pop_to_base = function(base){
    return function(it){
      return "RAM[ " + base + " + " + it + " ]";
    };
  };
  pop_segment = {
    argument: pop_to_base('ARG'),
    local: pop_to_base('LCL'),
    'this': pop_to_base('THIS'),
    that: function(it){
      return "addr = THAT + " + it + ";if( addr >= 16384 && addr < 24576 ) { vm.map_screen( addr, RAM[ SP - 1 ] ); }RAM[ addr ]";
    },
    temp: function(it){
      return "RAM[ " + (5 + parseInt(it, 10)) + " ]";
    },
    pointer: function(it){
      var addr;
      switch (addr = parseInt(it, 10)) {
      case 0:
        return 'THIS';
      case 1:
        return 'THAT';
      default:
        return "RAM[ " + (3 + addr) + " ]";
      }
    }
  };
  current_fn = void 8;
  code = [];
  flush = function(){
    vm.functions[current_fn] = new Function('label', "var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;loop: for(;;) {switch( label ) {case 0: " + code.join(';') + ";}}");
    return vm.functions[current_fn].fn_name = current_fn;
  };
  this.translate = function(it){
    var static_addr, statics;
    if (!Array.isArray(it)) {
      it = [it];
    }
    vm.functions = {};
    static_addr = 29;
    statics = {};
    it.forEach(function(_arg){
      var input, name, label, labels;
      input = _arg[0], name = _arg[1];
      if (!input || /^\s+$/.test(input)) {
        return;
      }
      current_fn = void 8;
      label = void 8;
      labels = void 8;
      push_segment.that = function(it){
        return "addr = THAT + " + it + ";if( addr == 24576 ) {vm.io = true;vm.label = " + label + ";RAM[ 0 ] = SP;RAM[ " + LCL + " ] = LCL;RAM[ " + ARG + " ] = ARG;RAM[ " + THIS + " ] = THIS; RAM[ " + THAT + " ] = THAT;return;}case " + label++ + ": RAM[ SP++ ] = RAM[ THAT + " + it + " ]";
      };
      push_segment['static'] = function(it){
        var _key, _ref;
        return "RAM[ SP++ ] = RAM[ " + ((_ref = statics[_key = name + "." + it]) != null
          ? _ref
          : statics[_key] = static_addr++) + " ]";
      };
      pop_segment['static'] = function(it){
        var _key, _ref;
        return "RAM[ " + ((_ref = statics[_key = name + "." + it]) != null
          ? _ref
          : statics[_key] = static_addr++) + " ]";
      };
      input.replace(/\/\/.*/gm, "").trim().split(/\s*[\n\r]+\s*/).forEach(function(it, i){
        var that, match, j, _to, _key, _ref;
        if (that = it.match(/^push (constant|argument|local|static|this|that|pointer|temp) (\d+)$/)) {
          code.push(push_segment[that[1]](that[2]));
        } else if (that = it.match(/^pop (argument|local|static|this|that|pointer|temp) (\d+)$/)) {
          code.push(pop_segment[that[1]](that[2]) + " = RAM[ --SP ]");
        } else if (match = it.match(/^function ([A-Za-z\._\:][\w_\.\:]+) (\d+)$/)) {
          if (current_fn) {
            flush();
          }
          code = [];
          current_fn = match[1];
          for (j = 0, _to = parseInt(match[2], 10); j < _to; ++j) {
            code.push("RAM[ SP++ ] = 0");
          }
          label = 1;
          labels = {};
        } else if (that = it.match(/^call ([A-Za-z\._\:][\w_\.\:]+) (\d+)$/)) {
          code.push("RAM[ SP++ ] = " + label, "RAM[ SP++ ] = LCL", "RAM[ SP++ ] = ARG", "RAM[ SP++ ] = THIS", "RAM[ SP++ ] = THAT", "RAM[ " + ARG + " ] = SP - " + (parseInt(that[2], 10) + 5), "RAM[ " + LCL + " ] = SP", "RAM[ 0 ] = SP", "RAM[ " + THIS + " ] = THIS", "RAM[ " + THAT + " ] = THAT", "vm.callstack.push( vm.functions['" + that[1] + "'] )", "vm.label = 0", "return", "case " + label++ + ": ");
        } else if (it === 'return') {
          code.push("frame = LCL", "vm.label = RAM[ frame - 5 ]", "RAM[ ARG ] = RAM[ --SP ]", "RAM[0] = ARG + 1", "RAM[ " + THAT + " ] = RAM[ frame - 1 ]", "RAM[ " + THIS + " ] = RAM[ frame - 2 ]", "RAM[ " + ARG + " ] = RAM[ frame - 3 ]", "RAM[ " + LCL + " ] = RAM[ frame - 4]", "vm.callstack.pop()", "return");
        } else if (that = it.match(/^label ([A-Za-z\._\:][\w_\.\:]+)$/)) {
          code.push("case " + ((_ref = labels[_key = that[1]]) != null
            ? _ref
            : labels[_key] = label++) + ": ");
        } else if (that = it.match(/^goto ([A-Za-z\._\:][\w_\.\:]+)$/)) {
          code.push("label = " + ((_ref = labels[_key = that[1]]) != null
            ? _ref
            : labels[_key] = label++) + "; continue loop");
        } else if (that = it.match(/^if-goto ([A-Za-z\._\:][\w_\.\:]+)$/)) {
          code.push("if(RAM[ --SP ] !== 0) { label = " + ((_ref = labels[_key = that[1]]) != null
            ? _ref
            : labels[_key] = label++) + "; continue loop; }");
        } else if (that = arithmetic[it]) {
          code.push("RAM[ --SP - 1 ] = RAM[ SP - 1 ] " + that + " RAM[ SP ]");
        } else if (that = boolean[it]) {
          code.push("RAM[ --SP - 1 ] = RAM[ SP - 1 ] " + that + " RAM[ SP ] ? -1 : 0");
        } else if (that = unary[it]) {
          code.push("RAM[ SP - 1 ] = " + that + "RAM[ SP - 1 ]");
        } else {
          throw new Error("couldn't parse \"" + it + "\" around line " + i + " in file \"" + name + "\"!");
        }
      });
      flush();
    });
  };
}).call(this);

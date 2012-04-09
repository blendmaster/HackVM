// These OS functions are originally part of the materials accompanying the book
// "The Elements of Computing Systems" by Nisan and Schocken, 
// MIT Press. Book site: www.idc.ac.il/tecs

// They were compiled using `translator.co` written by Steven Ruppert.
// Some original functions were replaced with more performant native JS
// versions.
(function () {
"use strict";

vm.builtins = {};

vm.builtins['Sys.init'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Memory.init']);
            vm.label = 0;
            return;
          case 1:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.init']);
            vm.label = 0;
            return;
          case 2:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.init']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.init']);
            vm.label = 0;
            return;
          case 4:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Keyboard.init']);
            vm.label = 0;
            return;
          case 5:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 6;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Main.main']);
            vm.label = 0;
            return;
          case 6:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.halt']);
            vm.label = 0;
            return;
          case 7:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Sys.halt'] = function () {
    "use strict";
    vm.callstack = [];
};

vm.builtins['Sys.wait'] = function () {
    "use strict";
    var RAM, frame;
    RAM = vm.RAM;
    vm.pause = RAM[RAM[2]];
    frame = RAM[1];
    vm.label = RAM[frame - 5];
    RAM[RAM[2]] = RAM[--RAM[0]];
    RAM[0] = RAM[2] + 1;
    RAM[4] = RAM[frame - 1];
    RAM[3] = RAM[frame - 2];
    RAM[2] = RAM[frame - 3];
    RAM[1] = RAM[frame - 4];
    vm.callstack.pop();
};

vm.builtins['Sys.error'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 3;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.new']);
            vm.label = 0;
            return;
          case 1:
            RAM[SP++] = 69;
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.appendChar']);
            vm.label = 0;
            return;
          case 2:
            RAM[SP++] = 82;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.appendChar']);
            vm.label = 0;
            return;
          case 3:
            RAM[SP++] = 82;
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.appendChar']);
            vm.label = 0;
            return;
          case 4:
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.printString']);
            vm.label = 0;
            return;
          case 5:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 6;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.printInt']);
            vm.label = 0;
            return;
          case 6:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.halt']);
            vm.label = 0;
            return;
          case 7:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.new'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 3;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Memory.alloc']);
            vm.label = 0;
            return;
          case 1:
            THIS = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 2;
                continue loop;
            }
            label = 3;
            continue loop;
          case 2:
            RAM[SP++] = 14;
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 4:
            RAM[5] = RAM[--SP];
          case 3:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 5;
                continue loop;
            }
            label = 6;
            continue loop;
          case 5:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.new']);
            vm.label = 0;
            return;
          case 7:
            RAM[THIS + 1] = RAM[--SP];
          case 6:
            RAM[SP++] = RAM[ARG + 0];
            RAM[THIS + 0] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[THIS + 2] = RAM[--SP];
            RAM[SP++] = THIS;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.dispose'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            THIS = RAM[--SP];
            RAM[SP++] = RAM[THIS + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = RAM[THIS + 1];
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.dispose']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = THIS;
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Memory.deAlloc']);
            vm.label = 0;
            return;
          case 4:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.length'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            THIS = RAM[--SP];
            RAM[SP++] = RAM[THIS + 2];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.charAt'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            THIS = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[THIS + 2];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[THIS + 2];
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 15;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[THIS + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 4;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 4:
            RAM[SP++] = RAM[THAT + 0];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.setCharAt'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            THIS = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[THIS + 2];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[THIS + 2];
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 16;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[THIS + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 2];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.appendChar'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            THIS = RAM[--SP];
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = RAM[THIS + 0];
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 17;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = RAM[THIS + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[THIS + 2] = RAM[--SP];
            RAM[SP++] = THIS;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.eraseLastChar'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            THIS = RAM[--SP];
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 18;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[THIS + 2] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.intValue'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            THIS = RAM[--SP];
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          case 2:
            RAM[SP++] = 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP++] = RAM[THIS + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 3;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 3:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 45;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 4;
                continue loop;
            }
            label = 5;
            continue loop;
          case 4:
            RAM[SP++] = 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[LCL + 4] = RAM[--SP];
            RAM[SP++] = 1;
            RAM[LCL + 0] = RAM[--SP];
          case 5:
          case 6:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[THIS + 2];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[LCL + 3];
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 7;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[THIS + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 8;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 8:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 48;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 9;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 3];
            if (RAM[--SP] !== 0) {
                label = 9;
                continue loop;
            }
            label = 10;
            continue loop;
          case 9:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 10;
            RAM[SP++] = 11;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 11:
            RAM[SP++] = RAM[LCL + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
          case 10:
            label = 6;
            continue loop;
          case 7:
            RAM[SP++] = RAM[LCL + 4];
            if (RAM[--SP] !== 0) {
                label = 12;
                continue loop;
            }
            label = 13;
            continue loop;
          case 12:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[LCL + 1] = RAM[--SP];
          case 13:
            RAM[SP++] = RAM[LCL + 1];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.setInt'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            THIS = RAM[--SP];
            RAM[SP++] = RAM[THIS + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 19;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = 6;
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.new']);
            vm.label = 0;
            return;
          case 4:
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 5;
                continue loop;
            }
            label = 6;
            continue loop;
          case 5:
            RAM[SP++] = 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[ARG + 1] = RAM[--SP];
          case 6:
            RAM[SP++] = RAM[ARG + 1];
            RAM[LCL + 1] = RAM[--SP];
          case 7:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 8;
                continue loop;
            }
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 10;
            RAM[SP++] = 9;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.divide']);
            vm.label = 0;
            return;
          case 9:
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 48;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 10;
            RAM[SP++] = 10;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 10:
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[ARG + 1] = RAM[--SP];
            label = 7;
            continue loop;
          case 8:
            RAM[SP++] = RAM[LCL + 3];
            if (RAM[--SP] !== 0) {
                label = 11;
                continue loop;
            }
            label = 12;
            continue loop;
          case 11:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 45;
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
          case 12:
            RAM[SP++] = RAM[THIS + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 13;
                continue loop;
            }
            label = 14;
            continue loop;
          case 13:
            RAM[SP++] = 19;
            RAM[SP++] = 15;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 15:
            RAM[5] = RAM[--SP];
          case 14:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 16;
                continue loop;
            }
            label = 17;
            continue loop;
          case 16:
            RAM[SP++] = 0;
            RAM[SP++] = RAM[THIS + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 48;
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 1;
            RAM[THIS + 2] = RAM[--SP];
            label = 18;
            continue loop;
          case 17:
            RAM[SP++] = 0;
            RAM[THIS + 2] = RAM[--SP];
          case 19:
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 20;
                continue loop;
            }
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = RAM[THIS + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 21;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 21:
            RAM[SP++] = RAM[THAT + 0];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[THIS + 2];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[THIS + 2] = RAM[--SP];
            label = 19;
            continue loop;
          case 18:
          case 20:
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 22;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.dispose']);
            vm.label = 0;
            return;
          case 22:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.newLine'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 128;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.backSpace'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 129;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['String.doubleQuote'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 34;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.init'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 16384;
            RAM[16] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[17] = RAM[--SP];
            RAM[SP++] = 17;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.new']);
            vm.label = 0;
            return;
          case 1:
            RAM[18] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP++] = RAM[18];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 1;
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 16;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[18];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[18];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 4;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 4:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[18];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 5;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 5:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            label = 2;
            continue loop;
          case 3:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.clearScreen'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
          case 1:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 8192;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 2;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[16];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 0;
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            label = 1;
            continue loop;
          case 2:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.updateLocation'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[17];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[16];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[16];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 3;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 3:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[ARG + 1];
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            label = 4;
            continue loop;
          case 2:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[16];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[16];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 5;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 5:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
          case 4:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.setColor'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            RAM[17] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.drawPixel'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 511;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 255;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 7;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 16;
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.divide']);
            vm.label = 0;
            return;
          case 4:
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 16;
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 5:
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 32;
            RAM[SP++] = 6;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 6:
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = RAM[18];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 7;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 7:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 8;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.updateLocation']);
            vm.label = 0;
            return;
          case 8:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.drawConditional'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 2];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawPixel']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
            label = 4;
            continue loop;
          case 2:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawPixel']);
            vm.label = 0;
            return;
          case 5:
            RAM[5] = RAM[--SP];
          case 4:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.drawLine'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 2];
            RAM[SP++] = 511;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 3];
            RAM[SP++] = 255;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 8;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 2];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.abs']);
            vm.label = 0;
            return;
          case 4:
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 3];
            RAM[SP++] = RAM[ARG + 1];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.abs']);
            vm.label = 0;
            return;
          case 5:
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = RAM[LCL + 2];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[LCL + 6] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 6];
            RAM[SP++] = RAM[ARG + 3];
            RAM[SP++] = RAM[ARG + 1];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[SP++] = RAM[LCL + 6];
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[SP++] = RAM[ARG + 2];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 6;
                continue loop;
            }
            label = 7;
            continue loop;
          case 6:
            RAM[SP++] = RAM[ARG + 0];
            RAM[LCL + 4] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 2];
            RAM[ARG + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 4];
            RAM[ARG + 2] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[LCL + 4] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 3];
            RAM[ARG + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 4];
            RAM[ARG + 3] = RAM[--SP];
          case 7:
            RAM[SP++] = RAM[LCL + 6];
            if (RAM[--SP] !== 0) {
                label = 8;
                continue loop;
            }
            label = 9;
            continue loop;
          case 8:
            RAM[SP++] = RAM[LCL + 3];
            RAM[LCL + 4] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 4];
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 3];
            RAM[LCL + 8] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[LCL + 7] = RAM[--SP];
            label = 10;
            continue loop;
          case 9:
            RAM[SP++] = RAM[ARG + 0];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 2];
            RAM[LCL + 8] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 3];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[LCL + 7] = RAM[--SP];
          case 10:
            RAM[SP++] = 2;
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 11;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 11:
            RAM[SP++] = RAM[LCL + 3];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 5] = RAM[--SP];
            RAM[SP++] = 2;
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 12;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 12:
            RAM[LCL + 9] = RAM[--SP];
            RAM[SP++] = 2;
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = RAM[LCL + 3];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 13;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 13:
            RAM[LCL + 10] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 6];
            RAM[SP++] = 14;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 8;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawConditional']);
            vm.label = 0;
            return;
          case 14:
            RAM[5] = RAM[--SP];
          case 15:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = RAM[LCL + 8];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 16;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 5];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 17;
                continue loop;
            }
            label = 18;
            continue loop;
          case 17:
            RAM[SP++] = RAM[LCL + 5];
            RAM[SP++] = RAM[LCL + 9];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 5] = RAM[--SP];
            label = 19;
            continue loop;
          case 18:
            RAM[SP++] = RAM[LCL + 5];
            RAM[SP++] = RAM[LCL + 10];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 7];
            if (RAM[--SP] !== 0) {
                label = 20;
                continue loop;
            }
            label = 21;
            continue loop;
          case 20:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            label = 22;
            continue loop;
          case 21:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
          case 19:
          case 22:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 6];
            RAM[SP++] = 23;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 8;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawConditional']);
            vm.label = 0;
            return;
          case 23:
            RAM[5] = RAM[--SP];
            label = 15;
            continue loop;
          case 16:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.drawRectangle'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 3];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 2];
            RAM[SP++] = 511;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 3];
            RAM[SP++] = 255;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 9;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 16;
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.divide']);
            vm.label = 0;
            return;
          case 4:
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = 16;
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 5:
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 7] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 2];
            RAM[SP++] = 16;
            RAM[SP++] = 6;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.divide']);
            vm.label = 0;
            return;
          case 6:
            RAM[LCL + 4] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 2];
            RAM[SP++] = RAM[LCL + 4];
            RAM[SP++] = 16;
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 7:
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 8] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 7];
            RAM[SP++] = RAM[18];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 8;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 8:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[LCL + 6] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 8];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[18];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 9;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 9:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 5] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 32;
            RAM[SP++] = 10;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 10:
            RAM[SP++] = RAM[LCL + 3];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 4];
            RAM[SP++] = RAM[LCL + 3];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 2] = RAM[--SP];
          case 11:
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 3];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 12;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 13;
                continue loop;
            }
            label = 14;
            continue loop;
          case 13:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 5];
            RAM[SP++] = RAM[LCL + 6];
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[SP++] = 15;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.updateLocation']);
            vm.label = 0;
            return;
          case 15:
            RAM[5] = RAM[--SP];
            label = 16;
            continue loop;
          case 14:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 6];
            RAM[SP++] = 17;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.updateLocation']);
            vm.label = 0;
            return;
          case 17:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
          case 18:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 19;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[SP++] = 20;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.updateLocation']);
            vm.label = 0;
            return;
          case 20:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            label = 18;
            continue loop;
          case 19:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = RAM[LCL + 5];
            RAM[SP++] = 21;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.updateLocation']);
            vm.label = 0;
            return;
          case 21:
            RAM[5] = RAM[--SP];
          case 16:
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[ARG + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 32;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            label = 11;
            continue loop;
          case 12:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.drawHorizontal'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 2];
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.min']);
            vm.label = 0;
            return;
          case 1:
            RAM[LCL + 7] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 2];
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.max']);
            vm.label = 0;
            return;
          case 2:
            RAM[LCL + 8] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 1;
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 256;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[SP++] = RAM[LCL + 7];
            RAM[SP++] = 512;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[SP++] = RAM[LCL + 8];
            RAM[SP++] = 1;
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            label = 4;
            continue loop;
          case 3:
            RAM[SP++] = RAM[LCL + 7];
            RAM[SP++] = 0;
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.max']);
            vm.label = 0;
            return;
          case 5:
            RAM[LCL + 7] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 8];
            RAM[SP++] = 511;
            RAM[SP++] = 6;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.min']);
            vm.label = 0;
            return;
          case 6:
            RAM[LCL + 8] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 7];
            RAM[SP++] = 16;
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.divide']);
            vm.label = 0;
            return;
          case 7:
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 7];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 16;
            RAM[SP++] = 8;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 8:
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 9] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 8];
            RAM[SP++] = 16;
            RAM[SP++] = 9;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.divide']);
            vm.label = 0;
            return;
          case 9:
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 8];
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 16;
            RAM[SP++] = 10;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 10:
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 10] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 9];
            RAM[SP++] = RAM[18];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 11;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 11:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[LCL + 5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 10];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[18];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 12;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 12:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 4] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 32;
            RAM[SP++] = 13;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 13:
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 6] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 6];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 6];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 14;
                continue loop;
            }
            label = 15;
            continue loop;
          case 14:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 4];
            RAM[SP++] = RAM[LCL + 5];
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[SP++] = 16;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.updateLocation']);
            vm.label = 0;
            return;
          case 16:
            RAM[5] = RAM[--SP];
            label = 17;
            continue loop;
          case 15:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 5];
            RAM[SP++] = 18;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.updateLocation']);
            vm.label = 0;
            return;
          case 18:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
          case 19:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 3];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 20;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[SP++] = 21;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.updateLocation']);
            vm.label = 0;
            return;
          case 21:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            label = 19;
            continue loop;
          case 20:
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = RAM[LCL + 4];
            RAM[SP++] = 22;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.updateLocation']);
            vm.label = 0;
            return;
          case 22:
            RAM[5] = RAM[--SP];
          case 4:
          case 17:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.drawSymetric'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 3];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 8;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawHorizontal']);
            vm.label = 0;
            return;
          case 1:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 3];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 8;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawHorizontal']);
            vm.label = 0;
            return;
          case 2:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 3];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 3];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 8;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawHorizontal']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 3];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 3];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 8;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawHorizontal']);
            vm.label = 0;
            return;
          case 4:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Screen.drawCircle'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 511;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 255;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 12;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 511;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 255;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 4;
                continue loop;
            }
            label = 5;
            continue loop;
          case 4:
            RAM[SP++] = 13;
            RAM[SP++] = 6;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 6:
            RAM[5] = RAM[--SP];
          case 5:
            RAM[SP++] = RAM[ARG + 2];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = 1;
            RAM[SP++] = RAM[ARG + 2];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 9;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawSymetric']);
            vm.label = 0;
            return;
          case 7:
            RAM[5] = RAM[--SP];
          case 8:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 9;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 10;
                continue loop;
            }
            label = 11;
            continue loop;
          case 10:
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 2;
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 12;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 12:
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 3;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 2] = RAM[--SP];
            label = 13;
            continue loop;
          case 11:
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 2;
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 14;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 14:
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 5;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 1] = RAM[--SP];
          case 13:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 15;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 9;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Screen.drawSymetric']);
            vm.label = 0;
            return;
          case 15:
            RAM[5] = RAM[--SP];
            label = 8;
            continue loop;
          case 9:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.init'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 16384;
            RAM[19] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[20] = RAM[--SP];
            RAM[SP++] = 32;
            RAM[21] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[22] = RAM[--SP];
            RAM[SP++] = 6;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.new']);
            vm.label = 0;
            return;
          case 1:
            RAM[23] = RAM[--SP];
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.initMap']);
            vm.label = 0;
            return;
          case 2:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.createShiftedMap']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.initMap'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 127;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.new']);
            vm.label = 0;
            return;
          case 1:
            RAM[24] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 2:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 32;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 33;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 30;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 4:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 34;
            RAM[SP++] = 54;
            RAM[SP++] = 54;
            RAM[SP++] = 20;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 5:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 35;
            RAM[SP++] = 0;
            RAM[SP++] = 18;
            RAM[SP++] = 18;
            RAM[SP++] = 63;
            RAM[SP++] = 18;
            RAM[SP++] = 18;
            RAM[SP++] = 63;
            RAM[SP++] = 18;
            RAM[SP++] = 18;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 6;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 6:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 36;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 3;
            RAM[SP++] = 30;
            RAM[SP++] = 48;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 7:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 37;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 35;
            RAM[SP++] = 51;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 51;
            RAM[SP++] = 49;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 8;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 8:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 38;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 54;
            RAM[SP++] = 27;
            RAM[SP++] = 27;
            RAM[SP++] = 27;
            RAM[SP++] = 54;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 9;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 9:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 39;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 10;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 10:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 40;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 12;
            RAM[SP++] = 24;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 11;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 11:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 41;
            RAM[SP++] = 6;
            RAM[SP++] = 12;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 12:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 42;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 63;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 13;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 13:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 43;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 63;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 14;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 14:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 44;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 0;
            RAM[SP++] = 15;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 15:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 45;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 16;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 16:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 46;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 17;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 17:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 47;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 32;
            RAM[SP++] = 48;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 3;
            RAM[SP++] = 1;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 18;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 18:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 48;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 19;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 19:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 49;
            RAM[SP++] = 12;
            RAM[SP++] = 14;
            RAM[SP++] = 15;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 20;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 20:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 50;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 48;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 3;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 21;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 21:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 28;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 22;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 22:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 52;
            RAM[SP++] = 16;
            RAM[SP++] = 24;
            RAM[SP++] = 28;
            RAM[SP++] = 26;
            RAM[SP++] = 25;
            RAM[SP++] = 63;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 60;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 23;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 23:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 53;
            RAM[SP++] = 63;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 31;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 24;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 24:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 54;
            RAM[SP++] = 28;
            RAM[SP++] = 6;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 31;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 25;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 25:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 55;
            RAM[SP++] = 63;
            RAM[SP++] = 49;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 26;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 26:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 56;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 27;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 27:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 57;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 62;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 24;
            RAM[SP++] = 14;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 28;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 28:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 58;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 29;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 29:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 59;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 30;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 30:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 60;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 3;
            RAM[SP++] = 6;
            RAM[SP++] = 12;
            RAM[SP++] = 24;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 31;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 31:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 61;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 32;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 32:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 62;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 3;
            RAM[SP++] = 6;
            RAM[SP++] = 12;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 3;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 33;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 33:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 64;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 59;
            RAM[SP++] = 59;
            RAM[SP++] = 59;
            RAM[SP++] = 27;
            RAM[SP++] = 3;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 34;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 34:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 63;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 35;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 35:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 65;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 36;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 36:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 66;
            RAM[SP++] = 31;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 31;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 31;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 37;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 37:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 67;
            RAM[SP++] = 28;
            RAM[SP++] = 54;
            RAM[SP++] = 35;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 35;
            RAM[SP++] = 54;
            RAM[SP++] = 28;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 38;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 38:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 68;
            RAM[SP++] = 15;
            RAM[SP++] = 27;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 27;
            RAM[SP++] = 15;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 39;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 39:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 69;
            RAM[SP++] = 63;
            RAM[SP++] = 51;
            RAM[SP++] = 35;
            RAM[SP++] = 11;
            RAM[SP++] = 15;
            RAM[SP++] = 11;
            RAM[SP++] = 35;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 40;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 40:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 70;
            RAM[SP++] = 63;
            RAM[SP++] = 51;
            RAM[SP++] = 35;
            RAM[SP++] = 11;
            RAM[SP++] = 15;
            RAM[SP++] = 11;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 41;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 41:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 71;
            RAM[SP++] = 28;
            RAM[SP++] = 54;
            RAM[SP++] = 35;
            RAM[SP++] = 3;
            RAM[SP++] = 59;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 54;
            RAM[SP++] = 44;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 42;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 42:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 72;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 43;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 43:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 73;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 44;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 44:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 74;
            RAM[SP++] = 60;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 27;
            RAM[SP++] = 27;
            RAM[SP++] = 14;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 45;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 45:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 75;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 27;
            RAM[SP++] = 15;
            RAM[SP++] = 27;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 46;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 46:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 76;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 35;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 47;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 47:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 77;
            RAM[SP++] = 33;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 48;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 48:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 78;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 55;
            RAM[SP++] = 55;
            RAM[SP++] = 63;
            RAM[SP++] = 59;
            RAM[SP++] = 59;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 49;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 49:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 79;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 50;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 50:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 80;
            RAM[SP++] = 31;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 31;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 51;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 51:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 81;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 59;
            RAM[SP++] = 30;
            RAM[SP++] = 48;
            RAM[SP++] = 0;
            RAM[SP++] = 52;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 52:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 82;
            RAM[SP++] = 31;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 31;
            RAM[SP++] = 27;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 53;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 53:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 83;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 6;
            RAM[SP++] = 28;
            RAM[SP++] = 48;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 54;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 54:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 84;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 45;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 55;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 55:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 85;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 56;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 56:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 86;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 57;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 57:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 87;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 18;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 58;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 58:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 88;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 59;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 59:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 89;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 60;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 60:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 90;
            RAM[SP++] = 63;
            RAM[SP++] = 51;
            RAM[SP++] = 49;
            RAM[SP++] = 24;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 35;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 61;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 61:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 91;
            RAM[SP++] = 30;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 62;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 62:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 92;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 1;
            RAM[SP++] = 3;
            RAM[SP++] = 6;
            RAM[SP++] = 12;
            RAM[SP++] = 24;
            RAM[SP++] = 48;
            RAM[SP++] = 32;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 63;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 63:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 93;
            RAM[SP++] = 30;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 24;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 64;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 64:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 94;
            RAM[SP++] = 8;
            RAM[SP++] = 28;
            RAM[SP++] = 54;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 65;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 65:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 95;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 66;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 66:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 96;
            RAM[SP++] = 6;
            RAM[SP++] = 12;
            RAM[SP++] = 24;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 67;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 67:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 97;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 14;
            RAM[SP++] = 24;
            RAM[SP++] = 30;
            RAM[SP++] = 27;
            RAM[SP++] = 27;
            RAM[SP++] = 54;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 68;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 68:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 98;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 15;
            RAM[SP++] = 27;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 69;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 69:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 99;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 70;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 70:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 100;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 60;
            RAM[SP++] = 54;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 71;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 71:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 101;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 3;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 72;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 72:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 102;
            RAM[SP++] = 28;
            RAM[SP++] = 54;
            RAM[SP++] = 38;
            RAM[SP++] = 6;
            RAM[SP++] = 15;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 15;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 73;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 73:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 103;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 62;
            RAM[SP++] = 48;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 74;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 74:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 104;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 27;
            RAM[SP++] = 55;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 75;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 75:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 105;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 14;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 76;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 76:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 106;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 0;
            RAM[SP++] = 56;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 77;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 77:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 107;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 51;
            RAM[SP++] = 27;
            RAM[SP++] = 15;
            RAM[SP++] = 15;
            RAM[SP++] = 27;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 78;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 78:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 108;
            RAM[SP++] = 14;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 79;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 79:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 109;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 29;
            RAM[SP++] = 63;
            RAM[SP++] = 43;
            RAM[SP++] = 43;
            RAM[SP++] = 43;
            RAM[SP++] = 43;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 80;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 80:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 110;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 29;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 81;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 81:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 111;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 82;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 82:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 112;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 31;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 0;
            RAM[SP++] = 83;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 83:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 113;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 62;
            RAM[SP++] = 48;
            RAM[SP++] = 48;
            RAM[SP++] = 0;
            RAM[SP++] = 84;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 84:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 114;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 29;
            RAM[SP++] = 55;
            RAM[SP++] = 51;
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = 7;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 85;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 85:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 115;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 6;
            RAM[SP++] = 24;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 86;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 86:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 116;
            RAM[SP++] = 4;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 15;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 6;
            RAM[SP++] = 54;
            RAM[SP++] = 28;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 87;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 87:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 117;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 27;
            RAM[SP++] = 27;
            RAM[SP++] = 27;
            RAM[SP++] = 27;
            RAM[SP++] = 27;
            RAM[SP++] = 54;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 88;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 88:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 118;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 89;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 89:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 119;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 63;
            RAM[SP++] = 18;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 90;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 90:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 120;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 51;
            RAM[SP++] = 30;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 30;
            RAM[SP++] = 51;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 91;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 91:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 121;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 51;
            RAM[SP++] = 62;
            RAM[SP++] = 48;
            RAM[SP++] = 24;
            RAM[SP++] = 15;
            RAM[SP++] = 0;
            RAM[SP++] = 92;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 92:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 122;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 63;
            RAM[SP++] = 27;
            RAM[SP++] = 12;
            RAM[SP++] = 6;
            RAM[SP++] = 51;
            RAM[SP++] = 63;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 93;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 93:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 123;
            RAM[SP++] = 56;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 7;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 56;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 94;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 94:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 124;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 95;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 95:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 125;
            RAM[SP++] = 7;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 56;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 12;
            RAM[SP++] = 7;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 96;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 96:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 126;
            RAM[SP++] = 38;
            RAM[SP++] = 45;
            RAM[SP++] = 25;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 97;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 17;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.create']);
            vm.label = 0;
            return;
          case 97:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.create'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 11;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.new']);
            vm.label = 0;
            return;
          case 1:
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[24];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 2];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 2;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 3];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 3;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 4];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 4;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 5];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 5;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 6];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 6;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 7];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 7;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 8];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 8;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 9];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 9;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 10];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 10;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 11];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.createShiftedMap'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 127;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.new']);
            vm.label = 0;
            return;
          case 1:
            RAM[25] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[LCL + 2] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 127;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = RAM[24];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 4;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 4:
            RAM[SP++] = RAM[THAT + 0];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = 11;
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.new']);
            vm.label = 0;
            return;
          case 5:
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = RAM[25];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[LCL + 3] = RAM[--SP];
          case 6:
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = 11;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 7;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 8;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 8:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 256;
            RAM[SP++] = 9;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 9:
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 3] = RAM[--SP];
            label = 6;
            continue loop;
          case 7:
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 10;
                continue loop;
            }
            label = 11;
            continue loop;
          case 10:
            RAM[SP++] = 32;
            RAM[LCL + 2] = RAM[--SP];
            label = 12;
            continue loop;
          case 11:
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 2] = RAM[--SP];
          case 12:
            label = 2;
            continue loop;
          case 3:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.getMap'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 32;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 126;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 0;
            RAM[ARG + 0] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[20];
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            label = 4;
            continue loop;
          case 3:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[24];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 5;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 5:
            RAM[SP++] = RAM[THAT + 0];
            RAM[LCL + 0] = RAM[--SP];
            label = 6;
            continue loop;
          case 4:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[25];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 7;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 7:
            RAM[SP++] = RAM[THAT + 0];
            RAM[LCL + 0] = RAM[--SP];
          case 6:
            RAM[SP++] = RAM[LCL + 0];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.drawChar'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.getMap']);
            vm.label = 0;
            return;
          case 1:
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[21];
            RAM[LCL + 0] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 11;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            RAM[SP++] = RAM[20];
            if (RAM[--SP] !== 0) {
                label = 4;
                continue loop;
            }
            label = 5;
            continue loop;
          case 4:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[19];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 6;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 6:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 256;
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[LCL + 3] = RAM[--SP];
            label = 7;
            continue loop;
          case 5:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[19];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 8;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 8:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 255;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[LCL + 3] = RAM[--SP];
          case 7:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[19];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = RAM[LCL + 2];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 9;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 9:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[LCL + 3];
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 32;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 1] = RAM[--SP];
            label = 2;
            continue loop;
          case 3:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.moveCursor'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 22;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 63;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 20;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 2;
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.divide']);
            vm.label = 0;
            return;
          case 4:
            RAM[22] = RAM[--SP];
            RAM[SP++] = 32;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 352;
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 5:
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[22];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[21] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = RAM[22];
            RAM[SP++] = 2;
            RAM[SP++] = 6;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 6:
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            RAM[20] = RAM[--SP];
            RAM[SP++] = 32;
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.drawChar']);
            vm.label = 0;
            return;
          case 7:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.printChar'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.newLine']);
            vm.label = 0;
            return;
          case 1:
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 2;
                continue loop;
            }
            label = 3;
            continue loop;
          case 2:
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.println']);
            vm.label = 0;
            return;
          case 4:
            RAM[5] = RAM[--SP];
            label = 5;
            continue loop;
          case 3:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 6;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.backSpace']);
            vm.label = 0;
            return;
          case 6:
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 7;
                continue loop;
            }
            label = 8;
            continue loop;
          case 7:
            RAM[SP++] = 9;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.backSpace']);
            vm.label = 0;
            return;
          case 9:
            RAM[5] = RAM[--SP];
            label = 10;
            continue loop;
          case 8:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 11;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.drawChar']);
            vm.label = 0;
            return;
          case 11:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[20];
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 12;
                continue loop;
            }
            label = 13;
            continue loop;
          case 12:
            RAM[SP++] = RAM[22];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[22] = RAM[--SP];
            RAM[SP++] = RAM[21];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[21] = RAM[--SP];
          case 13:
            RAM[SP++] = RAM[22];
            RAM[SP++] = 32;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 14;
                continue loop;
            }
            label = 15;
            continue loop;
          case 14:
            RAM[SP++] = 16;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.println']);
            vm.label = 0;
            return;
          case 16:
            RAM[5] = RAM[--SP];
            label = 17;
            continue loop;
          case 15:
            RAM[SP++] = RAM[20];
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[20] = RAM[--SP];
          case 5:
          case 10:
          case 17:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.printString'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.length']);
            vm.label = 0;
            return;
          case 1:
            RAM[LCL + 1] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.charAt']);
            vm.label = 0;
            return;
          case 4:
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.printChar']);
            vm.label = 0;
            return;
          case 5:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            label = 2;
            continue loop;
          case 3:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.printInt'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[23];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.setInt']);
            vm.label = 0;
            return;
          case 1:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[23];
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.printString']);
            vm.label = 0;
            return;
          case 2:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.println'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[21];
            RAM[SP++] = 352;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[22];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[21] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[22] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[20] = RAM[--SP];
            RAM[SP++] = RAM[21];
            RAM[SP++] = 8128;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 32;
            RAM[21] = RAM[--SP];
          case 2:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Output.backSpace'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[20];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = RAM[22];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            label = 4;
            continue loop;
          case 3:
            RAM[SP++] = RAM[22];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[22] = RAM[--SP];
            RAM[SP++] = RAM[21];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[21] = RAM[--SP];
            label = 5;
            continue loop;
          case 4:
            RAM[SP++] = 31;
            RAM[22] = RAM[--SP];
            RAM[SP++] = RAM[21];
            RAM[SP++] = 32;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 6;
                continue loop;
            }
            label = 7;
            continue loop;
          case 6:
            RAM[SP++] = 8128;
            RAM[21] = RAM[--SP];
          case 7:
            RAM[SP++] = RAM[21];
            RAM[SP++] = 321;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[21] = RAM[--SP];
          case 5:
            RAM[SP++] = 0;
            RAM[20] = RAM[--SP];
            label = 8;
            continue loop;
          case 2:
            RAM[SP++] = 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[20] = RAM[--SP];
          case 8:
            RAM[SP++] = 32;
            RAM[SP++] = 9;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.drawChar']);
            vm.label = 0;
            return;
          case 9:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Memory.init'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[26] = RAM[--SP];
            RAM[SP++] = 2048;
            RAM[SP++] = RAM[26];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 14334;
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 2049;
            RAM[SP++] = RAM[26];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 2050;
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Memory.peek'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[26];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 1;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 1:
            RAM[SP++] = RAM[THAT + 0];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Memory.poke'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[26];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Memory.alloc'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 5;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = 2048;
            RAM[LCL + 0] = RAM[--SP];
          case 4:
            RAM[SP++] = 0;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 5;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 5:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 6;
                continue loop;
            }
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 7;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 7:
            RAM[SP++] = RAM[THAT + 0];
            RAM[LCL + 0] = RAM[--SP];
            label = 4;
            continue loop;
          case 6:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 16379;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 8;
                continue loop;
            }
            label = 9;
            continue loop;
          case 8:
            RAM[SP++] = 6;
            RAM[SP++] = 10;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 10:
            RAM[5] = RAM[--SP];
          case 9:
            RAM[SP++] = 0;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 11;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 11:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 12;
                continue loop;
            }
            label = 13;
            continue loop;
          case 12:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 0;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 14;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 14:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 15;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 15:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 16;
                continue loop;
            }
            label = 17;
            continue loop;
          case 16:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 3;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 4;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            label = 18;
            continue loop;
          case 17:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 3;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 19;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 19:
            RAM[SP++] = RAM[THAT + 0];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
          case 18:
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
          case 13:
            RAM[SP++] = 0;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 0;
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Memory.deAlloc'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 1;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 1:
            RAM[SP++] = RAM[THAT + 0];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 2;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 2:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            label = 4;
            continue loop;
          case 3:
            RAM[SP++] = 0;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 5;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 5:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            label = 6;
            continue loop;
          case 4:
            RAM[SP++] = 0;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 7;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 7:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = 0;
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 8;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 8:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 9;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 9:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 10;
                continue loop;
            }
            label = 11;
            continue loop;
          case 10:
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 2;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            label = 12;
            continue loop;
          case 11:
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 1;
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 13;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 13:
            RAM[SP++] = RAM[THAT + 0];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
          case 6:
          case 12:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Math.init'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 16;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.new']);
            vm.label = 0;
            return;
          case 1:
            RAM[27] = RAM[--SP];
            RAM[SP++] = 16;
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Array.new']);
            vm.label = 0;
            return;
          case 2:
            RAM[28] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP++] = RAM[28];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = 1;
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
          case 3:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 15;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 4;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[28];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[28];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 5;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 5:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[28];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 6;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 6:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            label = 3;
            continue loop;
          case 4:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Math.abs'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[ARG + 0] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 0];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Math.multiply'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[LCL + 4] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.abs']);
            vm.label = 0;
            return;
          case 1:
            RAM[ARG + 0] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.abs']);
            vm.label = 0;
            return;
          case 2:
            RAM[ARG + 1] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 1];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            label = 4;
            continue loop;
          case 3:
            RAM[SP++] = RAM[ARG + 0];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[ARG + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[ARG + 1] = RAM[--SP];
          case 4:
          case 5:
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = RAM[ARG + 1];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 6;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = RAM[28];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 7;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 7:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[ARG + 1];
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 8;
                continue loop;
            }
            label = 9;
            continue loop;
          case 8:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = RAM[28];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 10;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 10:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 2] = RAM[--SP];
          case 9:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[ARG + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 3] = RAM[--SP];
            label = 5;
            continue loop;
          case 6:
            RAM[SP++] = RAM[LCL + 4];
            if (RAM[--SP] !== 0) {
                label = 11;
                continue loop;
            }
            label = 12;
            continue loop;
          case 11:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[LCL + 0] = RAM[--SP];
          case 12:
            RAM[SP++] = RAM[LCL + 0];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Math.divide'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 3;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = 0;
            RAM[SP++] = RAM[27];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[ARG + 1];
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.abs']);
            vm.label = 0;
            return;
          case 4:
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 5;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.abs']);
            vm.label = 0;
            return;
          case 5:
            RAM[ARG + 0] = RAM[--SP];
          case 6:
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 7;
                continue loop;
            }
            RAM[SP++] = 32767;
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[27];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 8;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 8:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[27];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 9;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 9:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 10;
                continue loop;
            }
            label = 11;
            continue loop;
          case 10:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[27];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[27];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 12;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 12:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[27];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 13;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 13:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[5] = RAM[--SP];
            THAT = RAM[--SP];
            RAM[SP++] = RAM[5];
            addr = THAT + 0;
            if (addr >= 16384 && addr < 24576) {
                vm.map_screen(addr, RAM[SP - 1]);
            }
            RAM[addr] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[SP++] = RAM[27];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 14;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 14:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 15;
                continue loop;
            }
            label = 16;
            continue loop;
          case 15:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
          case 11:
          case 16:
            label = 6;
            continue loop;
          case 7:
          case 17:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 18;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[27];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 19;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 19:
            RAM[SP++] = RAM[THAT + 0];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 20;
                continue loop;
            }
            label = 21;
            continue loop;
          case 20:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[28];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 22;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 22:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[27];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 23;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 23:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[ARG + 0] = RAM[--SP];
          case 21:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            label = 17;
            continue loop;
          case 18:
            RAM[SP++] = RAM[LCL + 2];
            if (RAM[--SP] !== 0) {
                label = 24;
                continue loop;
            }
            label = 25;
            continue loop;
          case 24:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[LCL + 1] = RAM[--SP];
          case 25:
            RAM[SP++] = RAM[LCL + 1];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Math.sqrt'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 4;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = 7;
            RAM[LCL + 0] = RAM[--SP];
          case 4:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[SP - 1] = - RAM[SP - 1];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 5;
                continue loop;
            }
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[28];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            THAT = RAM[--SP];
            addr = THAT + 0;
            if (addr == 24576) {
                vm.io = true;
                vm.label = 6;
                RAM[0] = SP;
                RAM[1] = LCL;
                RAM[2] = ARG;
                RAM[3] = THIS;
                RAM[4] = THAT;
                return;
            }
          case 6:
            RAM[SP++] = RAM[THAT + 0];
            RAM[--SP - 1] = RAM[SP - 1] + RAM[SP];
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Math.multiply']);
            vm.label = 0;
            return;
          case 7:
            RAM[LCL + 2] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = RAM[ARG + 0];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[SP++] = RAM[LCL + 2];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[--SP - 1] = RAM[SP - 1] & RAM[SP];
            if (RAM[--SP] !== 0) {
                label = 8;
                continue loop;
            }
            label = 9;
            continue loop;
          case 8:
            RAM[SP++] = RAM[LCL + 1];
            RAM[LCL + 3] = RAM[--SP];
          case 9:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 1;
            RAM[--SP - 1] = RAM[SP - 1] - RAM[SP];
            RAM[LCL + 0] = RAM[--SP];
            label = 4;
            continue loop;
          case 5:
            RAM[SP++] = RAM[LCL + 3];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Math.max'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 1];
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = RAM[ARG + 0];
            RAM[ARG + 1] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 1];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Math.min'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = RAM[ARG + 1];
            RAM[--SP - 1] = RAM[SP - 1] < RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = RAM[ARG + 0];
            RAM[ARG + 1] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 1];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Keyboard.init'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Keyboard.keyPressed'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 24576;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Memory.peek']);
            vm.label = 0;
            return;
          case 1:
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Keyboard.readChar'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.printChar']);
            vm.label = 0;
            return;
          case 1:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[--SP - 1] = RAM[SP - 1] | RAM[SP];
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 3;
                continue loop;
            }
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Keyboard.keyPressed']);
            vm.label = 0;
            return;
          case 4:
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 5;
                continue loop;
            }
            label = 6;
            continue loop;
          case 5:
            RAM[SP++] = RAM[LCL + 0];
            RAM[LCL + 1] = RAM[--SP];
          case 6:
            label = 2;
            continue loop;
          case 3:
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.backSpace']);
            vm.label = 0;
            return;
          case 7:
            RAM[SP++] = 8;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.printChar']);
            vm.label = 0;
            return;
          case 8:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            RAM[SP++] = 9;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.printChar']);
            vm.label = 0;
            return;
          case 9:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Keyboard.readLine'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = 80;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.new']);
            vm.label = 0;
            return;
          case 1:
            RAM[LCL + 3] = RAM[--SP];
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Output.printString']);
            vm.label = 0;
            return;
          case 2:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.newLine']);
            vm.label = 0;
            return;
          case 3:
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.backSpace']);
            vm.label = 0;
            return;
          case 4:
            RAM[LCL + 2] = RAM[--SP];
          case 5:
            RAM[SP++] = RAM[LCL + 4];
            RAM[SP - 1] = ~RAM[SP - 1];
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 6;
                continue loop;
            }
            RAM[SP++] = 7;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 5;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Keyboard.readChar']);
            vm.label = 0;
            return;
          case 7:
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 1];
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            RAM[LCL + 4] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 4];
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 8;
                continue loop;
            }
            label = 9;
            continue loop;
          case 8:
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = RAM[LCL + 2];
            RAM[--SP - 1] = RAM[SP - 1] === RAM[SP] ? -1 : 0;
            if (RAM[--SP] !== 0) {
                label = 10;
                continue loop;
            }
            label = 11;
            continue loop;
          case 10:
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = 12;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.eraseLastChar']);
            vm.label = 0;
            return;
          case 12:
            RAM[5] = RAM[--SP];
            label = 13;
            continue loop;
          case 11:
            RAM[SP++] = RAM[LCL + 3];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 14;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 7;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.appendChar']);
            vm.label = 0;
            return;
          case 14:
            RAM[LCL + 3] = RAM[--SP];
          case 9:
          case 13:
            label = 5;
            continue loop;
          case 6:
            RAM[SP++] = RAM[LCL + 3];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Keyboard.readInt'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = 0;
            RAM[SP++] = 0;
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Keyboard.readLine']);
            vm.label = 0;
            return;
          case 1:
            RAM[LCL + 0] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 2;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.intValue']);
            vm.label = 0;
            return;
          case 2:
            RAM[LCL + 1] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 0];
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['String.dispose']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
            RAM[SP++] = RAM[LCL + 1];
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Array.new'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 0;
            RAM[--SP - 1] = RAM[SP - 1] > RAM[SP] ? -1 : 0;
            RAM[SP - 1] = ~RAM[SP - 1];
            if (RAM[--SP] !== 0) {
                label = 1;
                continue loop;
            }
            label = 2;
            continue loop;
          case 1:
            RAM[SP++] = 2;
            RAM[SP++] = 3;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Sys.error']);
            vm.label = 0;
            return;
          case 3:
            RAM[5] = RAM[--SP];
          case 2:
            RAM[SP++] = RAM[ARG + 0];
            RAM[SP++] = 4;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Memory.alloc']);
            vm.label = 0;
            return;
          case 4:
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

vm.builtins['Array.dispose'] = function (label) {
    var RAM = vm.RAM, SP = RAM[0], LCL = RAM[1], ARG = RAM[2], THIS = RAM[3], THAT = RAM[4], frame, addr;
loop:
    for (;;) {
        switch (label) {
          case 0:
            RAM[SP++] = RAM[ARG + 0];
            THIS = RAM[--SP];
            RAM[SP++] = THIS;
            RAM[SP++] = 1;
            RAM[SP++] = LCL;
            RAM[SP++] = ARG;
            RAM[SP++] = THIS;
            RAM[SP++] = THAT;
            RAM[2] = SP - 6;
            RAM[1] = SP;
            RAM[0] = SP;
            RAM[3] = THIS;
            RAM[4] = THAT;
            vm.callstack.push(vm.functions['Memory.deAlloc']);
            vm.label = 0;
            return;
          case 1:
            RAM[5] = RAM[--SP];
            RAM[SP++] = 0;
            frame = LCL;
            vm.label = RAM[frame - 5];
            RAM[ARG] = RAM[--SP];
            RAM[0] = ARG + 1;
            RAM[4] = RAM[frame - 1];
            RAM[3] = RAM[frame - 2];
            RAM[2] = RAM[frame - 3];
            RAM[1] = RAM[frame - 4];
            vm.callstack.pop();
            return;
          default:;
        }
    }
};

})();
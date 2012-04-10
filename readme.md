# The Hack virtual machine and hardware on JS

This app compiles the Hack VM intermediate language from the textbook [Elements of Computing Systems](http://www1.idc.ac.il/tecs/) into Javascript and runs it on a simulation of the Hack hardware from the same book. The app will run on modern web browsers that support JS Typed Arrays and the `<canvas>` element.

The main logic is written in [coco](https://github.com/satyr/coco), which needs to be compiled to javascript with the `coco` command line tool before use.

## Technical Details

`computer.co` sets up a 16-bit typed Javascript array to accurately simulate the Hack computer's RAM. It also implements the mapping from Hack's memory mapped screen to the HTML `<canvas>` element's ImageData buffer for output. Because javascript's key events are asynchronous, the computer will pause execution whenever a keypress is needed from the VM code so a keypress event in the browser's event queue can be processed. The computer also handles the callstack. To improve screen performance, the screen is only redrawn when keypresses are processed, or `Sys.wait` is called.

`translator.co` converts Hack VM functions and instructions into native Javascript functions. VM labels get translated into `case` statements inside a `switch` statement inside an empty `for` loop in each function body, which is the only way to to support arbitrary code execution paths in Javascript. This is similar to the approach [emscripten](https://github.com/kripken/emscripten) uses, though emscripten is also able to reconstruct `if` and `while` label structures into native Javascript for greater performance, which this VM emulator does not do. The "return address" between function calls is passed as `vm.label`, which corresponds to the `case` statement inside the calling function.

`builtins.js` contains pre-compiled javascript functions of the Hack standard OS libraries, such as `Sys` and `String`. Some functions such as `Sys.halt` and `Sys.wait` are manually written to hook into native JS features such as `setTimeout`, to enable better performance and prevent the VM's usual exit mode of an infinite loop from hanging the web browser. For even better performance, other builtin functions in the `Screen` and `Keyboard` sections could also be rewritten to take advantage of native JS functionality (but they're not right now).


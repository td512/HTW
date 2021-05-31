function checkForLibraryByTypeOf(caller, type){
    // checks for a library by the type of that library, for example with jQuery it should be a function
    // checkForLibraryByTypeOf(jQuery, "function") when loaded should return true.
    if (typeof caller == type){
        return true
    } else {
        return false
    }
}

function writeBootSequenceWithIndex(index){
	term.writeln(boot_text[index])
	if (index < boot_text.length - 1) {
		setTimeout(function(){ writeBootSequenceWithIndex(index+1) }, 45)
	}
}


let runTerminal = async function() {
    if (term._initialized) {
      return;
    }

    term._initialized = true;

    term.prompt = () => {
      term.write('\r\n$ ');
    };
	
    
    term.onData(e => {
      switch (e) {
        case '\r': // Enter
        case '\u0003': // Ctrl+C
		  if (app_ready) {
			prompt(term);
		  }
          break;
        case '\u007F': // Backspace (DEL)
          // Do not delete the prompt
          if (term._core.buffer.x > 2 && app_ready) {
            term.write('\b \b');
          }
          break;
        default: // Print all other characters for demo
		  if (app_ready) {
			  term.write(e);
		  }
          
      }
    });
  }

  function prompt(term) {
    term.write('\r\n$ ');
  }
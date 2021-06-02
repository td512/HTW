function checkForLibraryByTypeOf(caller, type){
    // checks for a library by the type of that library, for example with jQuery it should be a function
    // checkForLibraryByTypeOf(jQuery, "function") when loaded should return true.
    if (typeof caller == type){
        return true
    } else {
        return false
    }
}

function playNextStoryElement(storyElementId){
    elementData = storyElements.elements[storyElementId]
    console.log(`Loading Story Element '${elementData.name}'`)
    $.get(`${elementData.directory}/${elementData.fileName}`, function(data){
        console.log(`Playing Story Element '${elementData.name}'`)
        playStoryElement(data, 0, elementData.typeDelay, elementData.loadDelay, elementData.lineByLine, playNextStoryElement(storyElementId + 1))
    })
}

function playStoryElement(storyData, sequenceIndex, syncTime, initialLoadoutTime, lineByLine, callback){
    console.log(lineByLine)
    if (lineByLine){
        localStoryData = storyData.split(/\r\n|\n/)
        if (sequenceIndex == 0) {
            setTimeout(function(){
                term.writeln(localStoryData[sequenceIndex])
                setTimeout(function(){ playStoryElement(storyData, sequenceIndex+1, syncTime, initialLoadoutTime, lineByLine, callback)}, syncTime)
            }, initialLoadoutTime)
        } else if (sequenceIndex < localStoryData.length - 1) {
            term.writeln(localStoryData[sequenceIndex])
            setTimeout(function(){ playStoryElement(storyData, sequenceIndex+1, syncTime, initialLoadoutTime, lineByLine, callback)}, syncTime)
        } else {
            callback
        }
    } else {
        if (sequenceIndex == 0) {
            setTimeout(function(){
                term.write(storyData[sequenceIndex])
                setTimeout(function(){ playStoryElement(storyData, sequenceIndex+1, syncTime, initialLoadoutTime, lineByLine, callback)}, syncTime)
            }, initialLoadoutTime)
        } else if (sequenceIndex < storyData.length - 1) {
            term.write(storyData[sequenceIndex])
            setTimeout(function(){ playStoryElement(storyData, sequenceIndex+1, syncTime, initialLoadoutTime, lineByLine, callback)}, syncTime)
        } else {
            callback
        }
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